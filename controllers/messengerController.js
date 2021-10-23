const profileModel = require("../models/profile-model");
const userModel = require("../models/user-model");
const messageModel = require("../models/message");
const conversationModel = require("../models/conversation");
const conversation = require("../models/conversation");

class MessengerController {
  async sendMessage(req, res, next) {
    try {
      let { text, user, conversationUser } = req.body;
      console.log(conversationUser);
      const conversationUserFinded = await profileModel.findOne({
        user: conversationUser,
      });
      if (!conversationUserFinded) {
        throw new Error("Собеседника не существует");
      }
      let conversation = await conversationModel.findOne({
        members: { $all: [conversationUser, user] },
      });

      if (!conversation) {
        conversation = await conversationModel.create({
          members: [user, conversationUser],
        });
      }
      const message = await messageModel.create({
        conversationId: conversation._id,
        text,
        sender: user,
      });
      res.json(message);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }
  async getConversation(req, res) {
    try {
      const { conversationUser, userId } = req.body;
      const conversationUserProfile = await profileModel.findOne({
        user: conversationUser,
      });
      if (!conversationUserProfile) {
        throw new Error("Собеседника не существует");
      }
      const conversation = await conversationModel.findOne({
        members: { $all: [conversationUser, userId] },
      });
      res.json({
        conversationUser: conversationUserProfile,
        conversationId: conversation?._id,
      });
    } catch (e) {
      console.log(e);
    }
  }
  async getConversations(req, res) {
    try {
      const { userId } = req.body;
      const conversations = await conversationModel.find({
        members: { $in: userId },
      });
      const contentConversations = [];
      for (let i = 0; i < conversations.length; i++) {
        const conversationUser =
          conversations[i].members[0] == userId
            ? conversations[i].members[1]
            : conversations[i].members[0];
        const conversationUserProfile = await profileModel.findOne({
          user: conversationUser,
        });
        if (!conversationUserProfile) {
          continue;
        }
        contentConversations.push({
          ...conversations[i],
          conversationUser: conversationUserProfile,
        });
      }
      res.json(contentConversations);
    } catch (e) {
      console.log(e);
    }
  }
  async getMessages(req, res) {
    try {
      const { conversationId, limit, skip } = req.body;
      let messages;
      if (limit && skip != undefined) {
        messages = await messageModel
          .find({
            conversationId: conversationId,
          })
          .skip(skip * limit)
          .limit(limit);
      } else {
        messages = await messageModel.find({
          conversationId: conversationId,
        });
      }

      res.json(messages);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new MessengerController();

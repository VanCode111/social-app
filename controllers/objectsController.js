const profileModel = require("../models/profile-model");
const routerModel = require("../models/router-model");

class objectsController {
  async findObjects(req, res, next) {
    try {
      let { subString } = req.body;
      subString = subString.trim().split(" ");
      console.log(subString[0]);
      let users = await profileModel.find({
        fullName: {
          $regex: subString[0].toLowerCase(),
        },
        fullName: {
          $regex: subString[1]
            ? subString[1].toLowerCase()
            : subString[0].toLowerCase(),
        },
      });
      for (let i = 0; i < users.length; i++) {
        const { path } = await routerModel.findOne({ user: users[i].user });
        users[i] = {
          profile: users[i],
          link: "/" + path,
        };
      }
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new objectsController();

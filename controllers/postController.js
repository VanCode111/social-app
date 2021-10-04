const postModel = require("../models/post-model");
const profileModel = require("../models/profile-model");
const routerModel = require("../models/router-model");
const userModel = require("../models/user-model");
const FilesService = require("../services/filesService");
const postService = require("../services/postService");
const PostService = require("../services/postService");

class postController {
  async createPost(req, res) {
    try {
      const { userId, text } = req.body;
      const files = req.files;
      const photo = files?.photo;
      const imageUrl = photo ? FilesService.uploadImage(photo) : null;
      const post = await postModel.create({
        user: userId,
        text,
        photo: imageUrl,
      });
      res.json(post);
    } catch (e) {
      console.log(e);
    }
  }
  async deletePost(req, res) {
    try {
      const { user, postId } = req.body;
      const id = user.id;
      const post = await postService.deletePost(postId, id);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getUserPosts(req, res) {
    try {
      const { userId } = req.body;
      const user = await profileModel.findOne({ user: userId });
      const router = await routerModel.findOne({ user: userId });
      let posts = await postModel.find({ user: userId });
      posts = posts.map((post) => {
        return {
          post: post,
          profile: user,
          authorLink: router.path,
        };
      });
      res.json(posts);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new postController();

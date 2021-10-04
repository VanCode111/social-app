const postModel = require("../models/post-model");

class PostService {
  async deletePost(postId, userId) {
    const post = await postModel.findOne({ _id: postId });
    if (!post) {
      throw new Error("Пост не существует");
    }
    if (post.user != userId) {
      throw new Error("Нет прав удаления");
    }
    const postDeleted = await postModel.deleteOne({ _id: postId });
    return { postDeleted };
  }
}

module.exports = new PostService();

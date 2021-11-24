const uuid = require("uuid");
const path = require("path");
const profileModel = require("../models/profile-model");
class ProfileController {
  async uploadImage(req, res) {
    try {
      const { img } = req.files;
      const { userId } = req.body;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const imageUrl = fileName;
      const profile = await profileModel.updateOne(
        { user: userId },
        { $set: { profileImage: imageUrl } }
      );
      res.json(imageUrl);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new ProfileController();

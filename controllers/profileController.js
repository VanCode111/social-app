const uuid = require("uuid");
const path = require("path");
class ProfileController {
  async uploadImage(req, res) {
    try {
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      res.json(fileName);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new ProfileController();

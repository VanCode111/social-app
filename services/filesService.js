const uuid = require("uuid");
const path = require("path");

class FilesService {
  uploadImage(image) {
    const fileName = uuid.v4() + ".jpg";
    image.mv(path.resolve(__dirname, "..", "static", fileName));
    const fileUrl = process.env.SERVER_URL + fileName;
    return fileUrl;
  }
}

module.exports = new FilesService();

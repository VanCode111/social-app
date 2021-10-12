const musicModel = require("../models/music-model");

class MusicController {
  async getMusic(req, res, next) {
    try {
      const tracks = await musicModel.find();
      res.json(tracks);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new MusicController();

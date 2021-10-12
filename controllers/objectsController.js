const profileModel = require("../models/profile-model");
const routerModel = require("../models/router-model");

class objectsController {
  async findObjects(req, res, next) {
    try {
      let { subString } = req.body;
      subString = subString.trim();
      console.log(subString[0]);
      let users = await profileModel
        .find({
          fullName: {
            $regex: new RegExp("^" + subString + ".*", "i"),
          },
        })
        .exec();
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

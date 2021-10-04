const userModel = require("../models/user-model");
const routerModel = require("../models/router-model");
const profileModel = require("../models/profile-model");

class RouterController {
  async dynamic({ link }) {
    console.log(link);
    const route = await routerModel.findOne({ path: link });
    const profile = await profileModel.findOne({ user: route.user });
    console.log(profile);
    if (!profile) {
      throw new Error("Страница не найдена");
    }
    return profile;
  }
}

module.exports = new RouterController();

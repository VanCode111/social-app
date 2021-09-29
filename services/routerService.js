const userModel = require("../models/user-model");
const routerModel = require("../models/router-model");

class RouterController {
  async dynamic({ link }) {
    console.log(link);
    const route = await routerModel.findOne({ path: link });
    const user = await userModel.findOne({ _id: route.user });
    console.log(userModel.count());
    if (!user) {
      throw new Error("Страница не найдена");
    }
    return { name: user.name, lastName: user.lastName };
  }
}

module.exports = new RouterController();

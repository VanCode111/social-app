const userService = require("../services/userService");
const tokenService = require("../services/tokenService");
const routerModel = require("../models/router-model");
const router = require("../router");

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password, name, lastName } = req.body;
      const response = await userService.registration(
        email,
        password,
        name,
        lastName
      );
      res.json(response);
    } catch (e) {
      console.log(e);
    }
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const response = await userService.login({ email, password });
      res.json(response);
    } catch (e) {
      console.log(e);
    }
  }
  async check(req, res, next) {
    const { accessToken } = tokenService.generateToken({
      id: req.user.id,
      email: req.user.email,
    });
    const router = await routerModel.findOne({ user: req.user.id });
    return res.json({ accessToken, link: router.path });
  }
}

module.exports = new UserController();

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
      res.status(500).json(e.message);
    }
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const response = await userService.login({ email, password });
      res.json(response);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async check(req, res, next) {
    try {
      const { accessToken } = tokenService.generateToken({
        id: req.body.user.id,
        email: req.body.user.email,
      });
      const router = await routerModel.findOne({ user: req.body.user.id });
      return res.json({ accessToken, link: router.path });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new UserController();

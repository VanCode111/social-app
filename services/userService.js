const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const tokenService = require("./tokenService");
const routerModel = require("../models/router-model");

class UserService {
  async login({ email, password }) {
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("Неверный логин или пароль");
    }
    if (!bcrypt.compare(user.password, password)) {
      throw new Error("Неверный логин или пароль");
    }
    const router = await routerModel.findOne({ user: user._id });
    return { user, router };
  }
  async registration(email, password, name, lastName) {
    const candidate = await userModel.findOne({ email });
    if (candidate) {
      throw new Error(`Пользователь с таким email уже существует`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    let user = await userModel.create({
      email,
      name,
      lastName,
      fullName: `${name.toLowerCase()}${lastName.toLowerCase()}`,
      password: hashPassword,
    });
    const count = await userModel.count();
    const router = await routerModel.create({
      user: user._id,
      path: "user" + count,
    });
    const userProtect = {
      id: user._id,
      email: user.email,
    };
    const tokens = tokenService.generateToken(userProtect);
    return {
      ...tokens,
      user,
      router,
    };
  }
}

module.exports = new UserService();

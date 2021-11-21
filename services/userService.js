const userModel = require("../models/user-model");
const bcrypt = require("bcryptjs");
const tokenService = require("./tokenService");
const routerModel = require("../models/router-model");
const profileModel = require("../models/profile-model");

class UserService {
  async login({ email, password }) {
    const user = await userModel.findOne({ email });
    const profile = await profileModel.findOne({ user: user._id });
    if (!user) {
      throw new Error("Неверный логин или пароль");
    }
    if (!bcrypt.compare(user.password, password)) {
      throw new Error("Неверный логин или пароль");
    }
    const userProtect = {
      id: user._id,
      email: user.email,
    };
    const router = await routerModel.findOne({ user: user._id });
    const tokens = tokenService.generateToken(userProtect);
    return { user, router, profile, ...tokens };
  }
  async registration(email, password, name, lastName) {
    const candidate = await userModel.findOne({ email });
    if (candidate) {
      throw new Error(`Пользователь с таким email уже существует`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    let user = await userModel.create({
      email,
      password: hashPassword,
    });
    const count = await userModel.count();
    const router = await routerModel.create({
      user: user._id,
      path: "user" + count,
    });
    const profile = await profileModel.create({
      user: user._id,
      name,
      lastName,
      fullName: `${name.toLowerCase()}${lastName.toLowerCase()}`,
      profileImage: "http://localhost:5000/Avatar.jpg",
    });
    const userProtect = {
      id: user._id,
      email: user.email,
    };
    const tokens = tokenService.generateToken(userProtect);
    return {
      ...tokens,
      profile,
      router,
    };
  }
}

module.exports = new UserService();

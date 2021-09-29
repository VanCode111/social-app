const jwt = require("jsonwebtoken");
const tokenModel = require("../models/token");

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "30m",
    });
    return {
      accessToken,
    };
  }
  async saveToken(userId, refreshToken) {}
}

module.exports = new TokenService();

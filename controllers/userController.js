class UserController {
  async registration(req, res, next) {
    try {
      res.json("1223");
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController();

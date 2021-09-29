const routerService = require("../services/routerService");

class RouterController {
  async dynamic(req, res, next) {
    try {
      const { link } = req.body;

      const response = await routerService.dynamic({ link });
      console.log(response);
      res.json(response);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new RouterController();

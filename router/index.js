const Router = require("express").Router;
const userController = require("../controllers/userController");
const router = new Router();

router.post("/registration");
router.post("/login");
router.post("/logout");
router.get("/refresh", userController.registration);
router.get("/users");

module.exports = router;

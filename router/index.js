const Router = require("express").Router;
const userController = require("../controllers/userController");
const routerController = require("../controllers/routerController");
const authMiddleware = require("../middleware/authMiddleware");
const router = new Router();
const profileController = require("../controllers/profileController");
const objectsController = require("../controllers/objectsController");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/logout");
router.post("/dynamic", routerController.dynamic);
router.get("/auth", authMiddleware, userController.check);
router.post("/findObjects", objectsController.findObjects);
router.post("/uploadimage", profileController.uploadImage);
router.get("/users");

module.exports = router;

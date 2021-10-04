const Router = require("express").Router;
const userController = require("../controllers/userController");
const routerController = require("../controllers/routerController");
const authMiddleware = require("../middleware/authMiddleware");
const router = new Router();
const profileController = require("../controllers/profileController");
const objectsController = require("../controllers/objectsController");
const postController = require("../controllers/postController");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/logout");
router.post("/dynamic", routerController.dynamic);
router.get("/auth", authMiddleware, userController.check);
router.post("/findObjects", objectsController.findObjects);
router.post("/uploadimage", profileController.uploadImage);
router.post("/getuserposts", postController.getUserPosts);
router.post("/createpost", postController.createPost);
router.post("/deletepost", authMiddleware, postController.deletePost);

module.exports = router;

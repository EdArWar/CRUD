const Router = require("express");
const PostController = require("../controllers/PostController");
const auth = require("../middleware/auth.middleware");
const router = new Router();

router.post("/create", auth, PostController.createPost);
router.patch("/update", auth, PostController.updatePost);

router.get("/", PostController.getAllPosts);
router.get("/:id", PostController.getPostById);

module.exports = router;

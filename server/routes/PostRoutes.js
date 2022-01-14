const Router = require("express");
const PostController = require("../controllers/PostController");
const auth = require("../middleware/auth.middleware");
const router = new Router();

router.post("/create", auth, PostController.createPost);
router.patch("/update", auth, PostController.updatePost);
router.patch("/:id/likePost", auth, PostController.likePost);
router.delete("/:id", auth, PostController.removePost);

router.get("/", PostController.getAllPosts);
router.get("/:id", PostController.getPostById);

module.exports = router;

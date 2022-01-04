const Router = require("express");
const PostController = require("../controllers/PostController");
const auth = require("../middleware/auth.middleware");
console.log("stex ");
const router = new Router();

router.post("/create", auth, PostController.createPost);

router.get("/", PostController.getAllPosts);

module.exports = router;

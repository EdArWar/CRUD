const Router = require("express");
const PostController = require("../controllers/PostController");
const auth = require("../middleware/auth.middleware");

const router = new Router();

router.post("/create", auth, PostController.createPost);

module.exports = router;

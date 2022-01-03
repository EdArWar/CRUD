const Post = require("../models/Post");

class PostController {
  async createPost(req, res) {
    try {
      const post = req.body;

      const newPost = new Post({
        ...post,
        creator: req.user.id,
        createAt: new Date().toISOString(),
      });

      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PostController();

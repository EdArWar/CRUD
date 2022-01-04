const Post = require("../models/Post");

class PostController {
  async createPost(req, res) {
    console.log("createPost");

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

  async getAllPosts(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
    }
  }

  async getPostById(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);
      res.status(200).json(post);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PostController();

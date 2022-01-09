const Post = require("../models/Post");
const User = require("../models/User");

class PostController {
  async createPost(req, res) {
    console.log("createPost");

    try {
      const postBody = req.body;
      const user = await User.findById(req.user.id);

      const newPost = new Post({
        ...postBody,
        creator: { id: req.user.id, name: user.name },
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

  async updatePost(req, res) {
    try {
      const { id, name, clan, organization, profession, position, avatar } =
        req.body;
      const updatePost = await Post.findByIdAndUpdate(
        id,
        {
          name: name,
          clan,
          organization,
          profession,
          position,
          avatar,
        },
        { new: true }
      );
      res.status(200).json(updatePost);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PostController();

const Post = require("../models/Post");
const RequestTypes = require("../types/RequestTypes");
const User = require("../models/User");
const mongoose = require("mongoose");

class PostController {
  async createPost(req, res) {
    try {
      const postBody = req.body;
      const user = await User.findById(req.user.id);

      const newPost = new Post({
        ...postBody,
        creator: { id: req.user.id, name: user.name },
        createAt: new Date().toISOString(),
      });

      await newPost.save();
      res.status(200).json({
        message: "Post Created",
        responseType: RequestTypes.SUCCESS,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getAllPosts(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts.reverse());
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
      res.status(200).json({
        message: "Post Updated ",
        responseType: RequestTypes.SUCCESS,
        updatePost,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async removePost(req, res) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No post with id: ${id}`);

      await Post.findByIdAndDelete(id);
      res.status(200).json({
        responseType: RequestTypes.SUCCESS,
        message: "Post deleted successfully.",
      });
    } catch (error) {
      console.log(error);
    }
  }

  async likePost(req, res) {
    try {
      const { id } = req.params;

      if (!req.user.id) {
        return req.json({ message: "Unauthenticated" });
      }

      const post = await Post.findById(id);

      const user = await User.findById(req.user.id);

      const { name, avatar } = user;

      const index = post.likes.findIndex(
        (item) => item.id === String(req.user.id)
      );

      if (index === -1) {
        post.likes.push({ id, name, avatar });
      } else {
        post.likes = post.likes.filter(
          (item) => item.id !== String(req.user.id)
        );
      }

      const updatePost = await Post.findByIdAndUpdate(id, post, { new: true });

      res.status(200).json(updatePost);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PostController();

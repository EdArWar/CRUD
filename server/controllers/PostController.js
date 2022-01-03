class PostController {
  async createPost(req, res) {
    try {
      console.log("createPost", req.body);
      res.end("DONE !!!");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PostController();

class PostController {
  async createPost(req, res) {
    try {
      console.log("createPost");
      res.end("DONE !!!");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PostController();

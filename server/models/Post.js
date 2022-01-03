const { Schema, model, ObjectId } = require("mongoose");

const PostSchema = new Schema({
  name: String,
  age: Number,
  profession: String,
  position: String,
  creator: String,
  avatar: String,
  likes: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("Post", PostSchema);

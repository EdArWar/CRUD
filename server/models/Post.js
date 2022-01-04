const { Schema, model, ObjectId } = require("mongoose");

const PostSchema = new Schema({
  name: String,
  clan: String,
  organization: { type: String, default: "Does not consist" },
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

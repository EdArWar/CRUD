const { Schema, model, ObjectId } = require("mongoose");

const PostSchema = new Schema({
  name: String,
  clan: String,
  organization: { type: String, default: "Does not consist" },
  profession: String,
  position: String,
  creator: {
    id: ObjectId,
    name: String,
  },
  avatar: String,
  likes: { type: [Object], default: [] },
  status: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("Post", PostSchema);

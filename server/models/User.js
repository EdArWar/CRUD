const { Schema, model, ObjectId } = require("mongoose");

const User = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  avatar: { type: String, default: "" },
  setting: {
    lang: { type: String, default: "en" },
    theme: { type: String, default: "light" },
  },
});

module.exports = model("User", User);

const { Schema, model, ObjectId } = require("mongoose");

const User = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

module.exports = model("User", User);

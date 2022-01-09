const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const fileUpload = require("express-fileupload");
const corsMiddleware = require("./middleware/cors.middleware");
const AuthRoutes = require("./routes/AuthRoutes");
const PostRoutes = require("./routes/PostRoutes");

const app = express();
const PORT = config.get("PORT");

app.use(fileUpload({}));
app.use(corsMiddleware);
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.static("static"));

app.use("/api/auth", AuthRoutes);
app.use("/api/posts", PostRoutes);

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    });

    app.listen(PORT, () => {
      console.log(`Server Started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

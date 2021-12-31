const express = require("express");
const config = require("config");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const corsMiddleware = require("./middleware/cors.middleware");
const AuthRotes = require("./routes/AuthRoutes");

const app = express();
const PORT = config.get("PORT");

app.use(fileUpload({}));
app.use(corsMiddleware);
app.use(express.json());
app.use(express.static("static"));

app.use("/api/auth", AuthRotes);

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`Server Started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

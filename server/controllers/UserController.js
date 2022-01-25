const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const RequestTypes = require("../types/RequestTypes");
const jwt = require("jsonwebtoken");
const config = require("config");

class UserController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errorStatus: true,
          responseType: RequestTypes.ERROR,
          message: "Incorrect request",
          ...errors,
        });
      }

      const { name, email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.json({
          message: `User with  ${email} already exist`,
          errorStatus: true,
          responseType: RequestTypes.INFO,
        });
      }

      const hashPassword = await bcrypt.hash(password, 5);

      const user = new User({ name, email, password: hashPassword });

      await user.save();

      return res.json({
        message: "User was created !",
        responseType: RequestTypes.SUCCESS,
      });
    } catch (error) {
      console.log(error);
      res.json({
        errorStatus: true,
        responseType: RequestTypes.ERROR,
        ...error,
      });
    }
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.json({
          errorStatus: true,
          message: `User with ${email} not found !`,
          responseType: RequestTypes.INFO,
        });
      }

      const isPassValid = bcrypt.compareSync(password, user.password);

      if (!isPassValid) {
        return res.json({
          errorStatus: true,
          message: `Invalid password`,
          responseType: RequestTypes.INFO,
        });
      }

      const token = jwt.sign({ id: user.id }, config.get("secretKey"));

      return res.status(200).json({
        token,
        message: "Login Is Success",
        responseType: RequestTypes.SUCCESS,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          avatar: user.avatar,
          setting: user.setting,
        },
      });
    } catch (error) {
      console.log(error);
      res.json({
        errorStatus: true,
        responseType: RequestTypes.ERROR,
        ...error,
      });
    }
  }

  async auth(req, res) {
    try {
      const user = await User.findOne({ _id: req.user.id });
      const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
        expiresIn: "1h",
      });
      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          avatar: user.avatar,
          setting: user.setting,
        },
      });
    } catch (e) {
      console.log(e);
      res.json({
        errorStatus: true,
        responseType: RequestTypes.ERROR,
        ...error,
      });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.user;

      const { name, lang, theme, avatar } = req.body;

      const updateUser = await User.findByIdAndUpdate(
        id,
        {
          name,
          avatar,
          setting: {
            lang,
            theme,
          },
        },
        { new: true }
      );

      res.status(200).json({
        message: "User Updated ",
        responseType: RequestTypes.SUCCESS,
        updateUser: updateUser,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserController();

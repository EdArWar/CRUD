const Router = require("express");
const { check } = require("express-validator");
const auth = require("../middleware/auth.middleware");

const router = new Router();
const UserController = require("../controllers/UserController");

router.post(
  "/registration",
  [
    check("email", "Incorrect email").isEmail(),
    check("password", "Password must be longer 3 and shorter then 12").isLength(
      { min: 3, max: 12 }
    ),
  ],
  UserController.registration
);
router.post("/login", UserController.login);
router.get("/auth", auth, UserController.auth);

router.patch("/update", auth, UserController.updateUser);

module.exports = router;

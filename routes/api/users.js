const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

//@desc Register user
router.post(
  "/",
  [
    check("name", "Please enter your name.").not().isEmpty(),
    check("email", "The email must be valid.").isEmail(),
    check("password", "password must be at lease 6 character.").isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User route");
  }
);

module.exports = router;

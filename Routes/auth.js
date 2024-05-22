const express = require("express");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("../models/UserData");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.get("/",function(req, res){
    err = []
    res.render("sign_in",{errors : err});
});
router.get("/Sign_Up",function(req,res){
    res.render("sign_up");
});



router.post(
  "/Sign_Up",
  [
    body("username", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // console.log(req.body);
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.render("sign_up", { errors: err.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        err=["The user with this email already exists"];
        return res.render("sign_up", { errors: err.array() });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedpass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedpass,
      });
      err=["Sigup in sucesfull"];
      res.render("sign_up", { errors: err.array() })
    } catch (err) {
      console.log(err);
      res.status(500).send("Some Error occured");
    }
  }
);

router.post(
  "/",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.render("sign_in", { errors: err.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        err=["User does not exist"];
        return res.render("sign_in", { errors: err.array() });
      }

      const check = await bcrypt.compare(password, user.password);

      if (!check) {
        err=["User does not exist"];
        return res.render("sign_in", { errors: err.array() });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Some Error occured");
    }
  }
);


module.exports = router;
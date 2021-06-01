// import User from "../models/User";
// import httpErrors from "http-errors";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  // check if all fields are available
  if (!username || !email || !password) {
    res
      .status(httpErrors.BadRequest)
      .json({ message: "Please Enter all fields" });
  }

  // check if email exist
  const alreadyExist = await User.findOne({ email });
  if (alreadyExist) {
    res.status(400).json({ message: "Email already exist" });
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // create a user
  console.log(username, email, password);
  const user = await User.create({ username, email, password: hashedPassword });
  res.status(201).json({ user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email)

  if (!email || !password) {
    res.status(httpErrors.BadRequest).json({ message: "Enter all fields" });
    return;
  }

  // check if email is in the database
  let user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({ message: "Invalid credentials" });
    return;
  }

  // generate token
  const token = jwt.sign({ id: user._id }, "123456789", { expiresIn: "1hr" });
  res.status(200).json({ token });
};

export const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"] || "";

  token = token.split("")[1];
  if (token) {
    const decodeToken = jwt.verify(token, "123456789");
    req.user = decodeToken.id;
    next();
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
};

export const getUsers = async(req, res) =>{
  const users = await User.find();
  res.status(200).json({users})
}

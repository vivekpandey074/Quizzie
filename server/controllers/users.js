const ApiError = require("../utils/ApiError");
const User = require("../models/userModel");
const asyncHandler = require("../utils/asyncHandler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleUserRegistration = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  if ([name, email, password].some((field) => field.trim() == "")) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findOne({ email });

  if (user) throw new ApiError(409, "User already exist");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  res.status(201).send({
    success: true,
    message: "User created successfully",
  });
});

const handleUserLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email & password is required");
  }

  const user = await User.findOne({ email });

  if (!user) throw new ApiError("404", "Invalid email or password");

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) throw new ApiError(401, "Invalid email or password");

  const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });

  res.status(200).cookie("token", token).send({
    success: true,
    message: "User Logged In successfully",
    token: token,
  });
});

const handleGetCurrentUser = asyncHandler(async (req, res, next) => {
  const currentUser = await User.findById(req.body.userId).select("-password");

  if (!currentUser) throw new ApiError(404, "current user not found");

  res.status(200).send({
    success: true,
    message: "User fetched successfully",
    currentUser,
  });
});

module.exports = {
  handleUserLogin,
  handleUserRegistration,
  handleGetCurrentUser,
};

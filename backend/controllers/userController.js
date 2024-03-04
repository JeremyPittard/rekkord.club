import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Auth user/set token
// route    POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "Auth user" });
});

// @desc   Register a new user
// route    POST /api/users
// @access Public
const registerUser = asyncHandler(async (request, response) => {
  const { name, email, password } = request.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    response.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(response, user._id);
    response.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    response.status(400);
    throw new Error("invalid deets");
  }
});

// @desc    logout user
// route    POST /api/users/logout
// @access Public
const logOut = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "logout user" });
});

// @desc    get user profile
// route    GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "get user profile" });
});

// @desc    update user profile
// route    PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "update user" });
});

export { authUser, registerUser, logOut, getUserProfile, updateUserProfile };

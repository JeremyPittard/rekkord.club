import asyncHandler from "express-async-handler";

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
  response.status(200).json({ message: "register user" });
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

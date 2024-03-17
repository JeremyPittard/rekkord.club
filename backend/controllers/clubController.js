import asyncHandler from "express-async-handler";

// @desc   list clubs a user is registered in
// route    Get /api/clubs
// @access Private
const getClubs = asyncHandler(async (request, response) => {
  response.status(200).json({ message: `🪨🪨` });
});

// @desc   list clubs a user is registered in
// route    Get /api/clubs
// @access Private
const joinClub = asyncHandler(async (request, response) => {
  const { id } = request.params;
  response.status(200).json({ message: `join ${id} as ${request.user._id}` });
});

// @desc   Create a club
// route    PUT /api/clubs
// @access Private
const createClub = asyncHandler(async (request, response) => {
  response.status(200).json({ message: `🪈♣️` });
});

// @desc   Edit club
// route    Get /api/clubs
// @access Private

export { createClub, getClubs, joinClub };

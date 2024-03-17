import express from "express";
import {
  createClub,
  getClubs,
  joinClub,
} from "../controllers/clubController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createClub).get(protect, getClubs);

router.post("/:id/join", protect, joinClub);

export default router;

import express from "express";
import  protect  from "../middlewares/auth.middleware.js";
import {
  joinPost,
  leavePost,
  getParticipants,
} from "../controllers/participation.controller.js";

const router = express.Router();

router.post("/:id/join", protect, joinPost);
router.delete("/:id/leave", protect, leavePost);
router.get("/:id/participants", protect, getParticipants);

export default router;


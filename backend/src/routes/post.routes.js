import express from "express";
import protect from "../middlewares/auth.middleware.js";
import {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", protect, createPost);
router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.delete("/:id",protect, deletePost);

export default router;


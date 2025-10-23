import express from "express";
import protect from "../middlewares/auth.middleware.js";
import {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  getMyPosts,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/my-posts", protect, getMyPosts); 
router.post("/", protect, createPost);
router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.delete("/:id",protect, deletePost);


export default router;


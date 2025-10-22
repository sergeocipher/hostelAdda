import Post from "../models/post.model.js"; 

// Create a new post
export const createPost = async (req, res) => {
  try {
     const { title, type, description, expireAt, minAmount } = req.body;
     const newPost = new Post({
      title,
      type,
      description,
      expireAt,
      minAmount,
      creator: req.user._id, // added from JWT middleware
    });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);

  } catch (error) {
    res.status(500).json({ message: "Error creating post", error: error.message });
  }
};


// Get all posts
export const getAllPosts = async (req, res) => {
  try {
  const posts = await Post.find().populate("creator", "name email");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};


// Get post by ID
export const getPostById = async (req, res) => {
  try {
  const post = await Post.findById(req.params.id).populate("creator", "name email");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ message: "Server error while fetching post" });
  }
};


export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.creator.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this post" });
    }

    await post.deleteOne();
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Server error while deleting post" });
  }
};

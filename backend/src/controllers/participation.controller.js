import Participation from "../models/participation.model.js";
import Post from "../models/post.model.js";

// Join or show interest
export const joinPost = async (req, res) => {
  try {
    const { id } = req.params; // post id
    const userId = req.user._id;
    const { description } = req.body; // 👈 added this line

    // validate description
    if (!description || description.trim() === "") {
      return res.status(400).json({ message: "Description is required to join the post!" });
    }

    // check if post exists
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found!" });
    }

    // check if already joined
    const existing = await Participation.findOne({ user: userId, post: id });
    if (existing) {
      return res.status(400).json({ message: "Already joined this post!" });
    }

    // create new participation with description
    const participation = new Participation({
      user: userId,
      post: id,
      description, //  save user's message
      status: "INTERESTED",
    });

    await participation.save();

    res.status(201).json({
      message: "Joined successfully!",
      participation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error joining post!",
      error: error.message,
    });
  }
};


// Leave post
export const leavePost = async (req, res) => {
  try {
    const { id } = req.params; // post id
    const userId = req.user._id;

    const participation = await Participation.findOneAndDelete({
      user: userId,
      post: id,
    });

    if (!participation) {
      return res.status(404).json({ message: "You were not part of this post" });
    }

    res.json({ message: "Left the post successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error leaving post", error: error.message });
  }
};

// Get participants of a post
export const getParticipants = async (req, res) => {
  try {
    const { id } = req.params; // post id
    const participants = await Participation.find({ post: id }).populate("user", "name email");
    res.json(participants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching participants", error: error.message });
  }
};

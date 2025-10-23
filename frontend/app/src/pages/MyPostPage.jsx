import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import { api } from "../utils/api";

function MyPostsPage() {
  const [activeTab, setActiveTab] = useState("created");
  const [createdPosts, setCreatedPosts] = useState([]);
  const [joinedPosts, setJoinedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [loadingParticipants, setLoadingParticipants] = useState(false);

  // Fetch user's posts
  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Please log in to view your posts.");
          setLoading(false);
          return;
        }

        const posts = await api.getMyPosts(token);
        setCreatedPosts(posts);
      } catch (err) {
        console.error("Error fetching user's posts:", err);
        setError(err.message || "Failed to fetch your posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchMyPosts();
  }, []);

  const posts = activeTab === "created" ? createdPosts : joinedPosts;

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "text-green-600 bg-green-50";
      case "active":
        return "text-yellow-600 bg-yellow-50";
      case "closed":
        return "text-red-600 bg-red-50";
      case "pending":
        return "text-orange-600 bg-orange-50";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  // Fetch participants when clicking "Responses"
  const openResponses = async (post) => {
    setSelectedPost(post);
    setLoadingParticipants(true);
    try {
      const data = await api.getParticipants(post._id);
      setParticipants(data);
    } catch (err) {
      console.error("Error fetching participants:", err);
      setParticipants([]);
    } finally {
      setLoadingParticipants(false);
    }
  };

  const handleDelete = async (postId) => {
  if (!window.confirm("Are you sure you want to delete this post?")) return;

  try {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to delete a post.");
      return;
    }

    await api.deletePost(token, postId);

    // remove from UI
    setCreatedPosts((prev) => prev.filter((post) => post._id !== postId));

    alert("Post deleted successfully!");
  } catch (err) {
    console.error("Error deleting post:", err);
    alert(err.message || "Failed to delete post.");
  }
};


  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pb-24">
      <Navbar />

      {/* Tabs */}
      <div className="flex mt-4 mx-4 bg-gray-100 rounded-full overflow-hidden">
        <button
          className={`flex-1 py-2 font-medium rounded-full transition ${
            activeTab === "created"
              ? "bg-green-600 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("created")}
        >
          Created by Me
        </button>
        <button
          className={`flex-1 py-2 font-medium rounded-full transition ${
            activeTab === "joined"
              ? "bg-green-600 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("joined")}
        >
          Joined
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 mt-6 space-y-4 px-5">
        {loading ? (
          <p className="text-center text-gray-500">Loading your posts...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts found.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-xl shadow-sm p-4 flex justify-between items-center border border-gray-100 hover:shadow-md transition"
            >
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {post.title}
                </h3>
                <span className="inline-block text-xs mt-1 px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                  {post.type}
                </span>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(post.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(
                    post.status
                  )}`}
                >
                  {post.status || "Active"}
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => openResponses(post)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Responses
                  </button>

                  <button
                    onClick={() => handleDelete(post._id)}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <BottomNav />

      {/* Modal for Responses */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-11/12 max-w-md p-6 relative">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">
              Responses for "{selectedPost.title}"
            </h2>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {loadingParticipants ? (
                <p className="text-sm text-gray-500">Loading participants...</p>
              ) : participants.length === 0 ? (
                <p className="text-sm text-gray-500">No participants yet.</p>
              ) : (
                participants.map((p) => (
                  <div key={p._id} className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">{p.description}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      — {p.user.name}
                    </p>
                  </div>
                ))
              )}
            </div>
            <button
              onClick={() => {
                setSelectedPost(null);
                setParticipants([]);
              }}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyPostsPage;

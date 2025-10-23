import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../utils/api";

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [joinDescription, setJoinDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.getPostById(id);
        setPost(res);
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    };
    fetchPost();
  }, [id]);

  const handleJoinSubmit = async (e) => {
    e.preventDefault();
    if (!joinDescription.trim()) {
      alert("Please describe your needs before joining.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in first!");
        return;
      }

      const result = await api.joinPost(
        id,
        { description: joinDescription },
        token
      );

      alert(result.message || "You’ve successfully joined this order!");
      setJoinDescription("");
      setShowJoinForm(false);
      navigate("/home", { replace: true });
    } catch (err) {
      console.error("Error joining order:", err);
      alert("Server error");
    }
  };

  if (!post)
    return <p className="text-center mt-20 text-gray-500">Loading post...</p>;

  const formatTimeLeft = (expireAt) => {
    const diffMs = new Date(expireAt) - new Date();
    if (diffMs <= 0) return "Expired";

    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;

    // Build readable string dynamically
    const parts = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours > 0) parts.push(`${hours}h`);
    parts.push(`${minutes}m`);

    return parts.join(" ") + " left";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 text-white">
          <h1 className="text-xl font-semibold">Group Order</h1>
        </div>

        <div className="p-6 space-y-6">
          {/* Title + Creator */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {post.title}
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center justify-center text-gray-800 font-semibold shadow-sm">
                {post.creator?.name ? post.creator.name[0].toUpperCase() : "?"}
              </div>
              <div>
                <p className="font-semibold text-gray-700">
                  {post.creator?.name || "Unknown"}
                </p>
                <p className="text-sm text-gray-500">
                  Posted {new Date(post.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Order Info */}
          {/* Order Info */}
          <div className="bg-pink-50 p-5 rounded-2xl shadow-sm border border-pink-100">
            <h3 className="text-lg font-semibold text-pink-700 mb-3">
              📦 Order Details
            </h3>

            <div className="flex flex-wrap gap-2">
              {/* Type */}
              <span className="inline-block bg-pink-200 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">
                {post.type}
              </span>

              {/* Description */}
              {post.description && (
                <span className="inline-block bg-white text-gray-700 text-sm px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                  {post.description}
                </span>
              )}

              {/* Min Amount (only show if exists) */}
              {post.minAmount && (
                <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                  💰 Min ₹{post.minAmount}
                </span>
              )}

              {/* Time Left */}
              <span className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">
                🕒 {formatTimeLeft(post.expireAt)}
              </span>
            </div>
          </div>

          {/* Participants */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">
              Participants Joined
            </h4>
            <div className="flex -space-x-2">
              {post.participants?.slice(0, 5).map((p, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"
                  title={p.name || "User"}
                ></div>
              ))}
              {post.participants?.length > 5 && (
                <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full border-2 border-white text-xs text-gray-600">
                  +{post.participants.length - 5}
                </div>
              )}
            </div>
          </div>

          {/* Join Order Button */}
          {!showJoinForm ? (
            <button
              onClick={() => setShowJoinForm(true)}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
            >
              + Join Order
            </button>
          ) : (
            <form
              onSubmit={handleJoinSubmit}
              className="bg-gray-50 p-4 rounded-lg border"
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Describe your request:
              </label>
              <textarea
                className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
                rows={3}
                placeholder="e.g. I’ll take one Margherita 🍕 with no onions"
                value={joinDescription}
                onChange={(e) => setJoinDescription(e.target.value)}
                required
              />
              <div className="flex gap-3 mt-3">
                <button
                  type="submit"
                  className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowJoinForm(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostDetailPage;

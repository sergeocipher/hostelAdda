function PostCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* User Info */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div> {/* Avatar placeholder */}
        <div>
          <h3 className="font-semibold">{post.user.name}</h3>
          <p className="text-sm text-gray-500">{post.user.dept}</p>
        </div>
        <span className="ml-auto text-xs text-gray-400">{post.time}</span>
      </div>

      {/* Title & Description */}
      <h2 className="text-lg font-bold mb-1">{post.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{post.description}</p>

      {/* Tags & Joined */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-1 text-xs rounded ${
              post.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
            }`}
          >
            {post.status}
          </span>
          <span className="text-xs text-gray-500">{post.joined} joined</span>
        </div>
        <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
}

export default PostCard;

function PostCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* User Info */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
          {post.creator?.name ? post.creator.name[0].toUpperCase() : "?"}
        </div>

        <div>
          <h3 className="font-semibold">{post.creator?.name || "Unknown User"}</h3>
          <p className="text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleString()}
          </p>
        </div>

        <span className="ml-auto text-xs text-gray-400 uppercase">
          {post.status}
        </span>
      </div>

      {/* Title & Description */}
      <h2 className="text-lg font-bold mb-1">{post.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{post.description}</p>

      {/* Type & Platform */}
      <div className="flex items-center justify-between">
        <span
          className={`px-2 py-1 text-xs rounded ${
            post.status === "OPEN"
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {post.type}
        </span>

        {post.platform && (
          <a
            href={post.externalUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-xs"
          >
            {post.platform}
          </a>
        )}
      </div>
    </div>
  );
}

export default PostCard;

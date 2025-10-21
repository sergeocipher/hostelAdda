import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import BottomNav from "../components/BottomNav";
import FloatingButton from "../components/FloatingButton";
import { api } from "../utils/api.js";
import { useEffect, useState } from "react";

function HomeFeed() {
  // dummy data later from backend
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.getAllPosts(); // this should call /api/posts
        setPosts(res);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col  min-h-screen">
      <Navbar />

      {/* Main Feed */}
      <main className="flex-1 p-10 space-y-8 mb-10">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts yet.</p>
        ) : (
          posts.map((post) => <PostCard key={post._id} post={post} />)
        )}
      </main>

      <BottomNav />
      <FloatingButton />
    </div>
  );
}

export default HomeFeed;

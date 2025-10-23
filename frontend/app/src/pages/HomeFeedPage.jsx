// HomeFeedPage.jsx
import { useEffect, useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import BottomNav from "../components/BottomNav";
import FloatingButton from "../components/FloatingButton";
import { api } from "../utils/api.js";

function HomeFeedPage() {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL"); // default "All"

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.getAllPosts();
        setPosts(res);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []); // fetch once

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "ALL") return posts;
    return posts.filter((post) => post.type === selectedCategory);
  }, [posts, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar with category selection */}
      <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      {/* Main Feed */}
      <main className="flex-1 p-10 space-y-8 mb-10">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-500">No posts yet.</p>
        ) : (
          filteredPosts.map((post) => <PostCard key={post._id} post={post} />)
        )}
      </main>

      <BottomNav />
      <FloatingButton />
    </div>
  );
}

export default HomeFeedPage;

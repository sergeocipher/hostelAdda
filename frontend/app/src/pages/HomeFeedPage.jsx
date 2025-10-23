import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import BottomNav from "../components/BottomNav";
import FloatingButton from "../components/FloatingButton";
import { api } from "../utils/api.js";
import { useEffect, useState  } from "react";

function HomeFeed() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.getAllPosts();
        setPosts(res);
        setFilteredPosts(res); // initial display
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
    fetchPosts();
  }, []);

  // Filter posts when category changes
  useEffect(() => {
    if (selectedCategory === "ALL") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((p) => p.type === selectedCategory);
      setFilteredPosts(filtered);
    }
  }, [selectedCategory, posts]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

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

export default HomeFeed;

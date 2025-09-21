import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import BottomNav from "../components/BottomNav";
import FloatingButton from "../components/FloatingButton";

function HomeFeed() {
    // dummy data later from backend 
  const posts = [
    {
      id: 1,
      user: { name: "Rahul Sharma", dept: "Computer Science" },
      title: "Dominos Order at 8 PM",
      description: "Looking for people to join pizza order. Minimum 3 people needed for free delivery. Let’s save on delivery charges!",
      tag: "Orders",
      status: "Active",
      joined: 12,
      time: "2h ago",
    },
    {
      id: 2,
      user: { name: "Priya Patel", dept: "Business Studies" },
      title: "Bulk Grocery Shopping",
      description: "Organizing bulk purchase of rice, dal, and oil. Save 30% on wholesale rates! Perfect for monthly supplies.",
      tag: "Bulk Offers",
      status: "Urgent",
      joined: 8,
      time: "4h ago",
    },
  ];

  return (
    <div className="flex flex-col  min-h-screen">
      <Navbar />

      {/* Main Feed */}
      <main className="flex-1 p-10   space-y-8 mb-10">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>

      <BottomNav />
      <FloatingButton />
    </div>
  );
}

export default HomeFeed;

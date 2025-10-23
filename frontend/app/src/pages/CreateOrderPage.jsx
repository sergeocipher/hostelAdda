import { useState } from "react";
import OrderTitleInput from "../components/OrderTitleInput";
import CategorySelect from "../components/CategorySelect";
import OrderDescription from "../components/OrderDescription";
import OrderDeadline from "../components/OrderDeadline";
import MinOrderAmount from "../components/MinOrderAmount";
import { api } from "../utils/api";

const CreateOrderPage = () => {
  const [orderTitle, setOrderTitle] = useState("");
  const [category, setCategory] = useState(""); // maps to 'type' in backend
  const [description, setDescription] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [deadlineTime, setDeadlineTime] = useState("");
  const [minAmount, setMinAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please log in first!");
        return;
      }

      // Construct expireAt as a full Date object
      const expireAt = new Date(`${deadlineDate}T${deadlineTime}`);

      // Construct payload exactly like backend expects
      const postData = {
        title: orderTitle,
        type: category, // 'category' in frontend = 'type' in backend
        description,
        expireAt,
        minAmount: Number(minAmount) || 0,
      };

      const res = await api.createPost(token, postData);

      if (res._id) {
        alert("Post created successfully!");
        setOrderTitle("");
        setCategory("");
        setDescription("");
        setDeadlineDate("");
        setDeadlineTime("");
        setMinAmount("");
      } else {
        alert(res.message || "Error creating post");
      }
    } catch (err) {
      console.error("Error creating post:", err);
      alert("Server error!");
    }
  };

  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-white py-10">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-lg p-8 space-y-6 bg-white rounded-2xl shadow-xl border border-gray-100"
  >
    {/* Header */}
    <div className="flex flex-col items-center gap-3 mb-6">
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-full shadow-lg">
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3v1a1 1 0 001 1h13a1 1 0 001-1V3M3 7v11a1 1 0 001 1h13a1 1 0 001-1V7m-5 4h6"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800">Create a Request</h2>
      <p className="text-center text-gray-500 text-sm px-4">
        Organize orders with your friends, save on delivery, and keep track of all your group orders.
      </p>
    </div>

    {/* Form Fields */}
    <div className="space-y-4">
      <OrderTitleInput value={orderTitle} onChange={setOrderTitle} />
      <CategorySelect value={category} onChange={setCategory} />
      <OrderDescription value={description} onChange={setDescription} />
      <OrderDeadline
        date={deadlineDate}
        setDate={setDeadlineDate}
        time={deadlineTime}
        setTime={setDeadlineTime}
      />
      <MinOrderAmount value={minAmount} onChange={setMinAmount} />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 hover:scale-105"
    >
      Create Order
    </button>
  </form>
</div>

  );
};

export default CreateOrderPage;

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-xl"
      >
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <svg
              className="w-8 h-8 text-blue-600"
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
          <h2 className="text-xl font-semibold text-gray-800">
            Create a Request
          </h2>
          <span className="text-sm text-gray-500">
            Organize orders with your friends and save on delivery
          </span>
        </div>

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

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold mt-6"
        >
          Create Order
        </button>
      </form>
    </div>
  );
};

export default CreateOrderPage;

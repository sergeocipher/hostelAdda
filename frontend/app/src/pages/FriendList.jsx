import { useEffect, useState } from "react";
import { api } from "../utils/api";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

function FriendList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const data = await api.getAllUsers(token);
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar title="Friends" />
      <main className="flex-1 p-8 space-y-4 mb-10">
        {error && <p className="text-red-500">{error}</p>}
        {users.length === 0 ? (
          <p className="text-center text-gray-500">No users found.</p>
        ) : (
          users.map((user) => (
            <div
              key={user._id}
              className="bg-white shadow rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <p className="font-semibold text-gray-800">{user.name}</p>
              </div>
              
            </div>
          ))
        )}
      </main>
      <BottomNav />
    </div>
  );
}

export default FriendList;

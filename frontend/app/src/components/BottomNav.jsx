import { useNavigate } from "react-router-dom";

function BottomNav() {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-7 left-0 right-0 bg-white shadow-inner border-t border-gray-200 rounded-t-2xl">
      <div className="flex justify-around py-2 text-gray-600">
        <button
          onClick={() => navigate("/home")}
          className="flex flex-col items-center hover:text-blue-600"
        >
          <span>🏠</span>
          <span className="text-xs">Home</span>
        </button>

        <button
          onClick={() => navigate("/myposts")}
          className="flex flex-col items-center hover:text-blue-600"
        >
          <span>📝</span>
          <span className="text-xs">My Posts</span>
        </button>

        
      </div>
    </nav>
  );
}

export default BottomNav;

import { useNavigate } from "react-router-dom";

function FloatingButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/create-order")}
      className="fixed bottom-20 right-6 w-14 h-14 rounded-full bg-blue-500 text-white text-3xl shadow-lg hover:bg-blue-600"
    >
      +
    </button>
  );
}

export default FloatingButton;

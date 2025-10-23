function BottomNav() {
  return (
    <nav className="fixed bottom-7 left-0 right-0 bg-white shadow-inner border-t border-gray-200">
      <div className="flex justify-around py-2 text-gray-600">
        <button className="flex flex-col items-center hover:text-blue-600">
          <span>🏠</span>
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center hover:text-blue-600">
          <span>📝</span>
          <span className="text-xs">My Posts</span>
        </button>
        {/* <button className="flex flex-col items-center hover:text-blue-600">
          <span>🔔</span>
          <span className="text-xs">Notifications</span>
        </button> */}
        <button className="flex flex-col items-center hover:text-blue-600">
          <span>👤</span>
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </nav>
  );
}

export default BottomNav;

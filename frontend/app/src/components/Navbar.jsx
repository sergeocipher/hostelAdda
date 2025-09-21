function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-5 py-5">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">HostelAdda</h1>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-blue-600">🔔</button>
          <button className="text-gray-600 hover:text-blue-600">🔍</button>
          <button className="w-8 h-8 rounded-full bg-gray-300"></button> {/* profile placeholder */}
        </div>
      </div>

      {/* Tabs */}
      <nav className="flex gap-4 px-4 py-2 text-sm border-t border-gray-100">
        <button className="text-blue-600 font-semibold">All</button>
        <button className="text-gray-600 hover:text-blue-600">Orders</button>
        <button className="text-gray-600 hover:text-blue-600">Bulk Offers</button>
        <button className="text-gray-600 hover:text-blue-600">Borrow</button>
        <button className="text-gray-600 hover:text-blue-600">Rooms</button>
      </nav>
    </header>
  );
}

export default Navbar;

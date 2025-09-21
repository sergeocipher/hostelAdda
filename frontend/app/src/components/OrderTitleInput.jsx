const OrderTitleInput = ({ value, onChange }) => (
  <div>
    <label className="block text-blue-700 text-sm font-medium mb-1">Order Title</label>
    <input
      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      type="text"
      placeholder="e.g., Pizza Night - Room 204"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default OrderTitleInput;

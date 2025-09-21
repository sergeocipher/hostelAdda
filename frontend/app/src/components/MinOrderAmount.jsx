const MinOrderAmount = ({ value, onChange }) => (
  <div>
    <label className="block text-purple-700 text-sm font-medium mb-1">Minimum Order Amount (Optional)</label>
    <input
      type="number"
      min="0"
      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
      placeholder="0"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default MinOrderAmount;

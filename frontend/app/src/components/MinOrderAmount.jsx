const MinOrderAmount = ({ value, onChange }) => (
  <div>
    <label className="block text-purple-700 text-sm font-medium mb-1">
      Minimum Order Amount (Optional)
    </label>
    <input
      type="text" // use text to remove spinner buttons
      inputMode="numeric" // mobile keyboard shows numbers
      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
      placeholder="0"
      value={value}
      onChange={(e) => {
        const val = e.target.value;
        // allow only digits (and allow empty for clearing)
        if (/^\d*$/.test(val)) {
          onChange(val);
        }
      }}
    />
  </div>
);

export default MinOrderAmount;

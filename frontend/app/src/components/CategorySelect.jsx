const CategorySelect = ({ value, onChange }) => (
  <div>
    <label className="block text-orange-700 text-sm font-medium mb-1">What are you ordering?</label>
    <select
      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select category...</option>
      <option value="food">Food</option>
      <option value="groceries">Groceries</option>
      <option value="supplies">Supplies</option>
    </select>
  </div>
);

export default CategorySelect;

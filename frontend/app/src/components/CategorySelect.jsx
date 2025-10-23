const CategorySelect = ({ value, onChange }) => (
  <div>
    <label className="block text-orange-700 text-sm font-medium mb-1">What are you ordering?</label>
    <select
      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select category...</option>
      <option value="BULK_OFFER">BULK_OFFER</option>
      <option value="BORROW">BORROW</option>
      <option value="ORDER">ORDER</option>
    </select>
  </div>
);

export default CategorySelect;

//const PostType = ["ORDER", "BULK_OFFER", "BORROW"];
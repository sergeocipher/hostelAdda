const OrderDescription = ({ value, onChange }) => (
  <div>
    <label className="block text-green-700 text-sm font-medium mb-1">Description</label>
    <textarea
      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
      placeholder="Add details about the order, store name, special instructions..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default OrderDescription;

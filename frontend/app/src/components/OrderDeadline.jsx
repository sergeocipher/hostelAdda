const OrderDeadline = ({ date, setDate, time, setTime }) => (
  <div>
    <label className="block text-red-700 text-sm font-medium mb-1">Order Deadline</label>
    <div className="flex gap-2">
      <input
        type="date"
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
    </div>
  </div>
);

export default OrderDeadline;

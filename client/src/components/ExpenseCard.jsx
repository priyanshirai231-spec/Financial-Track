export default function ExpenseCard({ expense }) {
  return (
    <div className="bg-white shadow p-4 rounded mb-3">
      <h3 className="font-semibold">{expense.title}</h3>
      <p className="text-gray-600">₹ {expense.amount}</p>
      <p className="text-sm text-gray-400">{expense.category}</p>
    </div>
  );
}
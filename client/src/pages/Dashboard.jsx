import { useEffect, useState } from "react";
import API from "../Services/api";
import ExpenseCard from "../components/ExpenseCard";
import ExpenseForm from "../components/ExpenseForm";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const res = await API.get("/expenses");
      setExpenses(res.data);
    };
    fetchExpenses();
  }, []);

  const handleAdd = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <ExpenseForm onAdd={handleAdd} />

      {expenses.map((exp) => (
        <ExpenseCard key={exp._id} expense={exp} />
      ))}
    </div>
  );
}
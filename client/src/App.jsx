import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <h1 className="text-5xl font-bold text-green-400">
        Tailwind Working 🚀
      </h1>
    </div>
  )
}

export default App
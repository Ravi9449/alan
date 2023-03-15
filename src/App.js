import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Alan from "./components/Alan/Alan";
import Dashboard from "./components/Dashboard/Dashboard";
import Expense from "./components/Expense/Expense";
import History from "./components/History/History";
import Tracker from "./components/Tracker/Tracker";

function App() {
  const [amount, setAmount] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [date, setDate] = React.useState("");

  const getExpenseData = (amount, category) => {
    setAmount(amount);
    setCategory(category);
  };

  return (
    <div>
      <Alan sendExpenseData={getExpenseData} />
      <h1>Welcome to Expense Tracker</h1>
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/tracker">Tracker</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route
          path="/expense"
          element={<Expense amount={amount} category={category} />}
        />
      </Routes>
    </div>
  );
}

export default App;

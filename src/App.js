import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Alan from "./components/Alan/Alan";
import Dashboard from "./components/Dashboard/Dashboard";
import Expense from "./components/Expense/Expense";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
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
      <div>
        <Header />
      </div>
      <Alan sendExpenseData={getExpenseData} />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

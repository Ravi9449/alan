import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Expense from "../Expense/Expense";
import History from "../History/History";
import Tracker from "../Tracker/Tracker";

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/tracker">Tracker</NavLink>
      </nav>
      {/* <h1>Welcome to Expense Tracker</h1> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </div>
  );
};

export default Header;

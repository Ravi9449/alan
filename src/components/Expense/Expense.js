import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Expense = (props) => {
  const [amount, setAmount] = useState(props.amount);
  const [category, setCategory] = useState(props.category);
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  //   const handleSave = (event) => {
  //     event.preventDefault();
  //     const expense = {
  //       amount: amount,
  //       category: category,
  //       notes: notes,
  //       date: date,
  //     };
  //     // onSave(expense);
  //     setAmount("");
  //     setCategory("");
  //     setNotes("");
  //     setDate("");
  //   };

  let navigate = useNavigate();
  const routeDashboard = () => {
    navigate("/");
  };

  return (
    <div>
      <label>
        Amount:
        <input
          type="number"
          value={props.amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          value={props.category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <br />
      <label>
        Notes:
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      {/* <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button> */}
      <br />
      <button onClick={routeDashboard}>back</button>
    </div>
  );
};

export default Expense;

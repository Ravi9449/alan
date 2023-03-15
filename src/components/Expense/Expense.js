import React, { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const Expense = (props) => {
  const location = useLocation()

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));


   useEffect(()=>{
     if(location?.state?.amount === undefined){
        setAmount('')
        setCategory('')
     }else{
      setAmount(location.state.amount)
      setCategory(location.state.category)
     }
   },[])
   
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
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          value={category}
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

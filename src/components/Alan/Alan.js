import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useNavigate } from "react-router-dom";

function Alan(props) {
  const navigate = useNavigate();
  function handleNavigate(page) {
    if (page == "dashboard") {
      navigate(`/`);
    } else {
      navigate(`/${page}`);
    }
  }

  function handleExpense(amount, category) {
    navigate("/expense");
  }

  useEffect(() => {
    alanBtn({
      key: "858bf2b6e18afaff49ee2059edbc615d2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "test") {
          console.log("Welcome to the world");
        } else if (commandData.command === "navigate") {
          console.log(commandData.page);
          handleNavigate(commandData.page);
        } else if (commandData.command === "expense") {
          console.log(commandData.amount);
          console.log(commandData.category);
          props.sendExpenseData(commandData.amount, commandData.category);
          handleExpense(commandData.amount, commandData.category);
        }
      },
    });
  }, []);
  return <div></div>;
}

export default Alan;

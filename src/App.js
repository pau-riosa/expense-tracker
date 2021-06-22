import React, { useState } from "react";
import "./App.css";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    amount: "1000000",
    date: new Date(2022, 5, 19),
  },
  {
    title: "House Insurance",
    amount: "1000000",
    date: new Date(2021, 6, 19),
  },
  {
    title: "House Insurance",
    amount: "1000000",
    date: new Date(2020, 6, 19),
  },
  {
    title: "Computer Insurance",
    amount: "1000000",
    date: new Date(2019, 7, 19),
  },
  {
    title: "Phone Insurance",
    amount: "1000000",
    date: new Date(2021, 8, 19),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;

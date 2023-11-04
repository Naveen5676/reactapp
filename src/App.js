import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Dharwad",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Hubli",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Gadag",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Udapi",
    },
  ]);

  const addExpenseHandler = (expenseData) => {
    // Create a new expense object with a unique ID and the provided data
    const newExpense = {
      id: Math.random().toString(), 
      ...expenseData,
    };

    // Update the expenses state with the new expense
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;

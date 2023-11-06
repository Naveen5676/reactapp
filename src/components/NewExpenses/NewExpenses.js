import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";
import { useState } from "react";

const NewExpenses = (props) => {
  const SaveExpenseDataHandler = (enteredExpensdeData) => {
    const expenseData = {
      ...enteredExpensdeData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };

  const [isEditing, setisEditing] = useState(false);

  const startEditingHandler = () => {
    setisEditing(true);
  };

  const stopEditingHandler = () => {
    setisEditing(false);
  };

  return (
    <div className="new-expense ">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add Expenses</button>
      )}
      {isEditing && (
        <ExpensesForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;

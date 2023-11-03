import "./ExpensesForm.css";
import { useState } from "react";

const ExpensesForm = () => {
  const [enteredtitle, setenteredtitle] = useState();
  const [enteredamount, setenteredamount] = useState();
  const [enteredlocation, setenteredlocation] = useState();
  const [entereddate, setentereddate] = useState();

  function titlechangeHandler(event) {
    setenteredtitle(event.target.value);
  }

  function amountchangehandler(event) {
    setenteredamount(event.target.value);
  }

  function locationchangeHandler(event) {
    setenteredlocation(event.target.value);
  }

  function datechangeHandler(event) {
    setentereddate(event.target.value);
  }

  return (
    <form>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            onChange={titlechangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            type="number"
            placeholder="Enter Amount"
            min="0.01"
            step="0.01"
            onChange={amountchangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Location</label>
          <input
            type="text"
            placeholder="Enter Location"
            onChange={locationchangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={datechangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpensesForm;

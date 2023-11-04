import "./ExpensesForm.css";
import { useState } from "react";

const ExpensesForm = (props) => {
  const [enteredtitle, setenteredtitle] = useState('');
  const [enteredamount, setenteredamount] = useState('');
  const [enteredlocation, setenteredlocation] = useState('');
  const [entereddate, setentereddate] = useState('');

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


  const formsubmitHandler = (event)=>{
    event.preventDefault();

    const expenseData = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
      location: enteredlocation,
    };

    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setenteredtitle("");
    setenteredamount("");
    setenteredlocation("");
    setentereddate("");
  }

  return (
    <form onSubmit={formsubmitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            value={enteredtitle}
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
            value={enteredamount}
            onChange={amountchangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Location</label>
          <input
            type="text"
            placeholder="Enter Location"
            value={enteredlocation}
            onChange={locationchangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={entereddate}
            onChange={datechangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpensesForm;

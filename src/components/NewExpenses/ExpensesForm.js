import "./ExpensesForm.css";
import { useState } from "react";

const ExpensesForm = () => {
//   const [enteredtitle, setenteredtitle] = useState();
//   const [enteredamount, setenteredamount] = useState();
//   const [enteredlocation, setenteredlocation] = useState();
//   const [entereddate, setentereddate] = useState();

const [userInput , setuserInput] = useState({
    enterdtitle:'',
    enterdamount:'',
    enteredlocation:'',
    enterddate:''
});

  function titlechangeHandler(event) {
    //code below for using multiple state for each onChange
    // setenteredtitle(event.target.value);
    // code below for using single useState
    // setuserInput({
    //     ...userInput,
    //     enterdtitle: event.target.value
    // });
    // code below is another method for using single useState 
    setuserInput((prevState)=>{
        return {...prevState , enterdtitle: event.target.value};
    });


  }

  function amountchangehandler(event) {
    //setenteredamount(event.target.value);
    setuserInput({
        ...userInput,
        enterdamount: event.target.value
    });
  }

  function locationchangeHandler(event) {
    //setenteredlocation(event.target.value);
    setuserInput({
        ...userInput,
        enterdlocaton: event.target.value
    });
  }

  function datechangeHandler(event) {
    //setentereddate(event.target.value);
    setuserInput({
        ...userInput,
        enterddate: event.target.value
    });
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

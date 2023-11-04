import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import "./ExpenseItems.css";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const [amount, setAmount] = useState(props.amount);

  // function clickHandler() {
  //   setTitle("Update");
  //   console.log(title);
  // }
  
  // const amountHandler = () => {
  //   setAmount("100");
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetail
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={amountHandler}>Change amount</button>
        <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </Card>
  );
};

export default ExpenseItem;

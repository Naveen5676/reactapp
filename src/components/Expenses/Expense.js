import "./Expense.css";
import ExpenseItem from "./ExpenseItems";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expense = (props)=> {
  const[filterdYear, setfilterdYear] = useState('2020');

  const FileChangeHandler = (selectedYear)=>{
    setfilterdYear(selectedYear);
  };


  return (
    <Card className="expense">
      <ExpenseFilter
        selected={filterdYear}
        onChangeFilter={FileChangeHandler}
      />
      {props.items.filter(data => data.date.getFullYear() === parseInt(filterdYear)).map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          location={expenses.location}
          date={expenses.date}
        />
      ))}
    </Card>
  );
}

export default Expense;

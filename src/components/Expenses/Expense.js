import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";



const Expense = (props) => {
  const [filterdYear, setfilterdYear] = useState("2020");

  const FileChangeHandler = (selectedYear) => {
    setfilterdYear(selectedYear);
  };

  const FilteredExpense = props.items.filter((data) => data.date.getFullYear() === parseInt(filterdYear));



  return (
    <li>
      <Card className="expense">
        <ExpenseFilter
          selected={filterdYear}
          onChangeFilter={FileChangeHandler}
        />
        <ExpensesList items={FilteredExpense} />
      </Card>
    </li>
  );
};

export default Expense;

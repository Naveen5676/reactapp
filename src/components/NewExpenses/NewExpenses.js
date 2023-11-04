import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";
const NewExpenses = (props) => {

  const SaveExpenseDataHandler =(enteredExpensdeData)=>{
    const expenseData = {
      ...enteredExpensdeData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }


  return (
    <div className="new-expense ">
      <ExpensesForm  onSaveExpenseData={SaveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpenses;

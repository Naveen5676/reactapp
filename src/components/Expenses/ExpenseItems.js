import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import "./ExpenseItems.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const clickHandler=()=>{
    alert('clicked!!!!!!!!!!!')
  }

  const deleteHandler = () => {
      alert('deleted')
  };
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
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;

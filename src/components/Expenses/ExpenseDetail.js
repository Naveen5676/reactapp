import "./ExpenseDetail.css";

const ExpenseDetail = (props)=> {
  const amount = props.amount;
  const location = props.location;
  const title = props.title;

  return (
    <div className="expense-detail">
      <div className="expense-detail__title">{title}</div>
      <div className="expense-detail__location">{location}</div>
      <div className="expense-detail__amount">${amount}</div>
    </div>
  );
}

export default ExpenseDetail;

import './ExpenseItems.css';


function ExpenseItem() {
  const expensedate = new Date(2022 , 2 , 28);
  const expensettitle = 'Car Insurense';
  const expenseprice = 236;
  const expenselocation = 'Dharwad'


  return (
    <div className='expense-item'>
      <div>{expensedate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expensettitle}</h2>
        <h2>{expenselocation}</h2>
        <div className='expense-item__price'>${expenseprice}</div>
        
      </div>
    </div>
  );
}

export default ExpenseItem;

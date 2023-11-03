import "./ExpensesForm.css";

const ExpensesForm = () => {

    function titlechangeHandler(event){
        console.log(event.target.value);

    };

  return (
    <form>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input type="text"  placeholder="Enter Title" onChange={titlechangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            type="number"
            placeholder="Enter Amount"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Location</label>
          <input type="text" placeholder="Enter Location" />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" />
        </div>
        <div className="new-expense__actions">
          <button>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpensesForm;

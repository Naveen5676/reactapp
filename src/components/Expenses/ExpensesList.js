import './ExpensesList.css'
import ExpenseItem from './ExpenseItems';

const ExpensesList =(props) =>{

    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>No Expense Found</h2>
    }


return (
    <ul className='expenses-list'>
        {props.items.map((expenses)=>(
             <ExpenseItem
             key={expenses.id}
             title={expenses.title}
             amount={expenses.amount}
             location={expenses.location}
             date={expenses.date}
           />
        ))}

    </ul>
)

}

export default ExpensesList
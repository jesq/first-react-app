import './NewExpense.css'
import ExpenseForm from "./ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (submittedExpenseData) => {
        const expenseData = {
            ...submittedExpenseData,
            id: Date.now().toString()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className={"new-expense"}>
           <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;
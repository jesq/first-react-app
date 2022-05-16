import './NewExpense.css'
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const [isEditiing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (submittedExpenseData) => {
        const expenseData = {
            ...submittedExpenseData,
            id: Date.now().toString()
        };
        props.onAddExpense(expenseData);
    }
    const editingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className={"new-expense"}>
            {!isEditiing &&
                <button
                    onClick={editingHandler}
                >
                    Add New Expense
                </button>
            }
            {isEditiing &&
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            }
        </div>
    )
}

export default NewExpense;
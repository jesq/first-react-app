import './Expenses.css';
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filteredExpenses = props.expenses.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear);
    const yearFilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <li>
            <Card className={ "expenses" }>
                <ExpensesFilter
                    selectedYearFilter = {filteredYear}
                    onYearFilterChange={yearFilterChangeHandler}
                />
                <ExpensesList
                    expenses = {filteredExpenses}
                />
            </Card>
        </li>
    )
}

export default Expenses;
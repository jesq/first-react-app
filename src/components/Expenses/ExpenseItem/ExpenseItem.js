import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";
import {useState} from "react";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    return (
        <Card className={"expense-item"}>
            <ExpenseDate
                date={ props.date }
            />
            <div className={"expense-item__description"}>
                <h2>
                    { title }
                </h2>
                <div className={"expense-item__price"}>
                    ${ props.amount }
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;

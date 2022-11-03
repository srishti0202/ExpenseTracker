import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';


const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const editingHandler = () => {
        setIsEditing(true)
    }

    const closeHandler = () => {
        setIsEditing(false);
    }
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString(),
           
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData)
        setIsEditing(false);
    }
    return (
        <div className='new-expense'>
            { !isEditing && <button onClick = {editingHandler}>Add new expense</button>}
            { isEditing && <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler} onCancel = {closeHandler}/>}
        </div>
    )
}

export default NewExpense;
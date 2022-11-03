import './ExpenseForm.css';
import { useState } from 'react';
const ExpenseForm = (props) => {
 
    //we are able to gather the user data and combine it into an input, but we don't need this in ExpenseForm 
    //instead this we will need in App.js so that we can combine it with other expense item . But till now we learnt
    //only how to pass data from the parent to child component eg - app.js to expenses.js or expenses.js to expenseitem.js
    //now we have to pass the data from the ExpenseForm.js to App.js
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        //console.log(expenseData);
        // enteredTitle = '';
        // enteredAmount = '';
        // enteredDate = '';
    }

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });

    const changeTitleHandler = (event) =>{
        setEnteredTitle(event.target.value);
        //whenever you update the state and depend on the previous state, the function setUserInput takes in a function
        //with prevState as an argument and you should copy the previous state bec it guarantees that is the the most recent
        //prev state
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // });

        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle : event.target.value}
        // });
    };

    const changeAmountHandler = (event) => {
         setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // });
    }

    const changeDateHandler = (event) => {
         setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value
        // })
    }
    return(
            <form onSubmit = {submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type ='text' value = {enteredTitle} onChange = {changeTitleHandler}/>
                    </div>

                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type ='number' min = "0.01" step = "0.01" value = {enteredAmount} onChange = {changeAmountHandler}/>

                    </div>

                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type ='date' min = "2019-01-01" max ="2022-12-31" value={enteredDate} onChange= {changeDateHandler}/>
                    </div>
                </div>

                <div className='new-expense__actions'>
                    <button type = "button" onClick = {props.onCancel} className='new-expense__actions'>Cancel</button>
                    <button type = "submit">Add Expense</button>
                </div>
            </form>
        
    )
}

export default ExpenseForm;
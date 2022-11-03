import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';
const ExpenseItem = (props) => {

    const title = props.title;
    //title is the initial state value 
    //setTitle is the function for changing the state
    //every expense item will recieve it's own state which is seperate from others
    
   
    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            
        </Card>
        </li>
    );
}

export default ExpenseItem;
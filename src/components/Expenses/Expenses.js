import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseChart from './ExpenseChart';
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (changedYear) => {
        setFilteredYear(changedYear);
    }
    const filteredItems = props.items.filter( expenses => {
        return expenses.date.getFullYear().toString() === filteredYear;
    });

    
    return (
    <Card className="expenses">
      <ExpenseFilter selected = {filteredYear} onFilterChange = {filterChangeHandler}></ExpenseFilter>
      <ExpenseChart expenses = {filteredItems}/>
      <ExpensesList items = {filteredItems}/>

      
      
    
        
        </Card>
    )
    }

export default Expenses;


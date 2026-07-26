import {useState} from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function ExpensePage({expenses, onAdd, isAdmin}){
    
    return (
        <div className='page-container'>
            <h1>Expenses</h1>
            <h3>Expense List</h3>
            <ExpenseList expenses={expenses} />
            <br></br>
            <hr></hr>
            {isAdmin && <ExpenseForm onAdd={onAdd} />}
        </div>
    );
}


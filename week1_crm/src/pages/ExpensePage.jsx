import {useState} from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function ExpensePage({expenses, onAdd, isAdmin}){
    
    return (
    <div className="expenses-page">
        <h1>Expenses</h1>
        <div className="expenses-layout">
            {isAdmin && <ExpenseForm onAdd={onAdd} />}
            <ExpenseList expenses={expenses} />
        </div>
    </div>
    );
}


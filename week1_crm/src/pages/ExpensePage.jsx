import {useState} from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function ExpensePage(){
    const [expenses, setExpenses] = useState([]);

    const addExpense = (newExpense) => {
        setExpenses([...expenses, newExpense]);
    };

    return (
        <div>
            <h1>Expenses</h1>
            <ExpenseForm onAdd={addExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    );
}


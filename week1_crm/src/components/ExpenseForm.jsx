import {useState} from 'react';
import '../components.css';

export default function ExpenseForm({onAdd}) {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newExpense = {
            id: Date.now(),
            amount: Number(amount),
            date,
            description,
        }

        onAdd(newExpense);

        setAmount('');
        setDate('');
        setDescription('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="nunmber"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <input 
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}            
            />
            <input
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Expense</button>
        </form>
    );
}

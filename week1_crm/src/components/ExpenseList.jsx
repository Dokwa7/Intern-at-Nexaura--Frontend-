import '../components.css';

export default function ExpenseList({expenses}) {
    const total = expenses.reduce((sum, expenses) => sum + expenses.amount, 0);
    if (expenses.length === 0){
        return <p>No expenses added yet.</p>
    }

    return (
        <div>
            <ul>
                {expenses.map((expenses) => (
                    <li key={expenses.id}>
                        {/* {expenses.date} : {expenses.description} - Rs. {expenses.amount} */}
                        <div className='expense-list'>
                            <p>{expenses.description} <p>{expenses.date} </p> </p>
                            <p>Rs/- {expenses.amount} </p>
                        </div>
                    </li>
                ))}
            </ul>
            <h3>Total: Rs. {total}</h3>
        </div>
    );
}


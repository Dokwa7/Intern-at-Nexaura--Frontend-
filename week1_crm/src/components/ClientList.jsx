import '../components.css';

export default function ClientList({clients, onSelect}) {

    console.log('ClientList received:', clients, 'length:', clients.length);
    
    if (clients.length === 0) {
        return <p>No Clients Yet</p>
    }

    return (
        <div>
            <h3>Clients</h3>
            <ul>
                {clients.map((c) => {
                    return (
                        <li key={c.id} onClick={() => onSelect(c.id)}>
                            {/* {c.name} | {c.projectName} | Rs. {c.totalCost} | {c.status} */}
                            <div className='client-list'>
                                <p>{c.name} <h5>{c.projectName}</h5></p>
                                <p> Rs/- {c.totalCost} <h6>{c.status}</h6></p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
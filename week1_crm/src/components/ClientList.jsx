export default function ClientList({clients, onSelect}) {

    console.log('ClientList received:', clients, 'length:', clients.length);
    
    if (clients.length === 0) {
        return <p>No Clients Yet</p>
    }

    return (
        <ul>
            {clients.map((c) => {
                return (
                    <li key={c.id} onClick={() => onSelect(c.id)}>
                        {c.name} | {c.projectName} | Rs. {c.totalCost} | {c.status}
                    </li>
                );
            })}
        </ul>
    );
}
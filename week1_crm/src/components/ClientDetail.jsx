import {useState} from 'react';

export default function ClientDetail({clients, selectedClientId, onAddMilestone, isAdmin}) {
    const [milestoneName, setMilestoneName] = useState('');
    const [milestoneDate, setMilestoneDate] = useState('');

    const client = clients.find((c) => c.id === selectedClientId);

    if(!client) {
        return null;
    }

    const handleAddMilestone = (e) => {
        e.preventDefault();

        const newMilestone = {
            id: Date.now(),
            name: milestoneName,
            date: milestoneDate,
            status: 'pending',
        };

        onAddMilestone(client.id, newMilestone);

        setMilestoneName('');
        setMilestoneDate('');
    };

    return (
        <div>
            <h2>{client.name}</h2>
            <p>Project: {client.projectName}</p>
            <p>Timeline: {client.startDate} to {client.timelineEnd}</p>
            <p>Cost: Rs. {client.totalCost}</p>
            <p>Status: {client.status}</p>

            <h3>milestones</h3>
            {client.milestone.length === 0 ? (
                <p>No milestone added yet.</p>
            ) : (
                <ul>
                    {client.milestone.map((m) => (
                        <li key={m.id}>
                            {m.name} | due {m.dueDate} | {m.status}
                        </li>
                    ))}
                </ul>
            )}

            {isAdmin && (
                <form onSubmit={handleAddMilestone}>
                    <input 
                        type="text"
                        placeholder="Milestone Name"
                        value={milestoneName}
                        onChange={(e) => setMilestoneName(e.target.value)}
                    />
                    <input
                        type="date"
                        value={milestoneDate}
                        onChange={(e) => setMilestoneDate(e.target.value)}
                    />
                    <button type="submit">Add Milestone</button>
                </form>
            )}
        </div>
    );
}
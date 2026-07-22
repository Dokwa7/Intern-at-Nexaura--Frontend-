import {useState} from 'react';

export default function ClientForm({onAdd}) {
    const [name, setName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [timelineEnd, setTimelineEnd] = useState('');
    const [totalCost, setTotalCost] = useState('');
    const [status, setStatus] =useState('active');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newClient = {
            id: Date.now(),
            name,
            projectName,
            startDate,
            timelineEnd,
            totalCost: Number(totalCost),
            status,
            milestone: [],
        };

        onAdd(newClient);

        setName('');
        setProjectName('');
        setStartDate('');
        setTimelineEnd('');
        setTotalCost('');
        setStatus('active');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Client Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
            />
            <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <input
                type="date"
                value={timelineEnd}
                onChange={(e) => setTimelineEnd(e.target.value)}
            />
            <input
                type="number"
                placeholder="Total Cost"
                value={totalCost}
                onChange={(e) => setTotalCost(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="on hold">On Hold</option>
            </select>
            <button type="submit">Add Client</button>
        </form>
    );
}
import {useState} from 'react';
import ClientForm from '../components/ClientForm';
import ClientList from '../components/ClientList';
import ClientDetail from '../components/ClientDetail';

export default function ClientsPage() {
    const [clients, setClients] = useState([]);
    const [selectedClientId, setSelectedClientId] = useState(null);

    const addClients = (newClients) => {
        setClients([...clients, newClients]);
    };

    const addMilestone = (clientsId, newMilestone) => {
        const updateClients = clients.map((clients) => {
            if(clients.id !== clientsId) {
                return clients;
            }
            return {
                ...clients,
                milestone: [...clients.milestone, newMilestone],
            };
        });
        setClients(updateClients);
    };

    console.log('current clients:', clients);

    return (
        <div>
            <h1>Clients</h1>
            <ClientForm onAdd={addClients} />
            <ClientList clients={clients} onSelect={setSelectedClientId} />
            {selectedClientId && (
                 <ClientDetail
                  clients={clients}
                  selectedClientId={selectedClientId}
                  onAddMilestone={addMilestone}
                 />
            )}
        </div>
    );

}
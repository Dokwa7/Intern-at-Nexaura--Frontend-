import {useState} from 'react';
import ClientForm from '../components/ClientForm';
import ClientList from '../components/ClientList';
import ClientDetail from '../components/ClientDetail';

export default function ClientsPage({clients, onAddClients, onAddMilestone, isAdmin}) {
    const [selectedClientId, setSelectedClientId] = useState(null);
    return (
        <div>
            <h1>Clients</h1>
            {isAdmin && <ClientForm onAdd={onAddClients} />}
            <ClientList clients={clients} onSelect={setSelectedClientId} />
            {selectedClientId && (
                 <ClientDetail
                  clients={clients}
                  selectedClientId={selectedClientId}
                  onAddMilestone={onAddMilestone}
                  isAdmin={isAdmin}
                 />
            )}
        </div>
    );

}
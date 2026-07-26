import {useState} from 'react';
import ClientForm from '../components/ClientForm';
import ClientList from '../components/ClientList';
import ClientDetail from '../components/ClientDetail';
import '../clientspage.css'

export default function ClientsPage({clients, onAddClients, onAddMilestone, isAdmin}) {
    const [selectedClientId, setSelectedClientId] = useState(null);
    return (
        <div className='clients-page'>
            <h1>Clients</h1>
            <div className='inner-container'>
                <div className='left-side-content'>
                    {isAdmin && <ClientForm onAdd={onAddClients} />}
                    <ClientList clients={clients} onSelect={setSelectedClientId} />
                </div>
                
                    <div className='right-side-content' >
                        <h3>Client Details</h3>
                        <ClientDetail
                            clients={clients}
                            selectedClientId={selectedClientId}
                            onAddMilestone={onAddMilestone}
                            isAdmin={isAdmin}
                        />
                    </div>
            </div>
        </div>
    );

}
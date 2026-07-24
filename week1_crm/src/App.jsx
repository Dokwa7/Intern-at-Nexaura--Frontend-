import {useState} from 'react';
import ClientsPage from './pages/ClientsPage';
import ExpensePage from './pages/ExpensePage';
import PartnerShare from './pages/PartnerShare';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [clients, setClients] = useState([]);
  const [currentPage, setCurrentPage] = useState('clients');
  const [isAdmin, setIsAdmin] = useState(true);

  const addExpenses = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  }

  const addClients = (newClient) => {
    setClients([...clients, newClient]);
  }

  const addMilestone = (clientId, newMilestone) => {
    const updateClients = clients.map((c) => {
      if (c.id !== clientId) {
        return c;
      }
      return {
        ...c,
        milestone: [...c.milestone, newMilestone],
      };
    });
    setClients(updateClients);
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('expenses')} >Expenses</button>
        <button onClick={() => setCurrentPage('clients')} >Clients</button>
        <button onClick={() => setCurrentPage('shares')} >Partner Share</button>

        <button onClick={() => setIsAdmin(!isAdmin)}>
          Switch to {isAdmin ? 'User' : 'Admin'}View
        </button>
        <span> Current role: {isAdmin ? 'User' : 'Admin'}</span>

      </nav>


      {currentPage === 'expenses' && (
        <ExpensePage expenses={expenses} onAdd={addExpenses} isAdmin={isAdmin} />
      )}

      {currentPage === 'clients' && (
        <ClientsPage clients={clients} onAddClients={addClients} onAddMilestone={addMilestone} isAdmin={isAdmin} />
      )}

      {currentPage === 'shares' && (
        <PartnerShare expenses={expenses} clients={clients}/>
      )}
    </div>
  );

}


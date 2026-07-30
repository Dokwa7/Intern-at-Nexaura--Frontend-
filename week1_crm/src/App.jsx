import {useState, useEffect} from 'react';
import ClientsPage from './pages/ClientsPage';
import ExpensePage from './pages/ExpensePage';
import PartnerShare from './pages/PartnerShare';
import './App.css';

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('crm-expenses');
    return saved ? JSON.parse(saved) : [];
  });

  const [clients, setClients] = useState(() => {
    const saved = localStorage.getItem('crm-clients');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentPage, setCurrentPage] = useState('clients');
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    localStorage.setItem('crm-expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('crm-clients', JSON.stringify(clients));
  }, [clients]);


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
    <div className="app-shell">
      <nav className="sidebar">
        <div className="sidebar-links">
          <button onClick={() => setCurrentPage('expenses')}>Expenses</button>
          <button onClick={() => setCurrentPage('clients')}>Clients</button>
          <button onClick={() => setCurrentPage('shares')}>Partner Share</button>
        </div>
        <div className="sidebar-footer">
          <button onClick={() => setIsAdmin(!isAdmin)}>
            Switch to {isAdmin ? 'User' : 'Admin'} View
          </button>
          <span>Current role: {isAdmin ? 'Admin' : 'User'}</span>
        </div>
      </nav>

      <main className="main-content">
        {currentPage === 'expenses' && (
          <ExpensePage expenses={expenses} onAdd={addExpenses} isAdmin={isAdmin} />
        )}
        {currentPage === 'clients' && (
          <ClientsPage
            clients={clients}
            onAddClients={addClients}
            onAddMilestone={addMilestone}
            isAdmin={isAdmin}
          />
        )}
        {currentPage === 'shares' && (
          <PartnerShare expenses={expenses} clients={clients}/>
        )}
      </main>
    </div>
  );

}


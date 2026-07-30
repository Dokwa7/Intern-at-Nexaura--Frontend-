function PartnerShare({expenses, clients}) {
    const totalRevenue = clients.reduce((sum, client) => sum + client.totalCost, 0);
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const netProfit = totalRevenue - totalExpenses;
    const partnerShare = netProfit / 5;

    const partners = [
        { name: 'Pomni', share: 0.05*netProfit },
        { name: 'Jax', share: 0.03*netProfit },
        { name: 'Queenie', share: 0.06*netProfit },
        { name: 'Kinger', share: 0.07*netProfit },
        { name: 'Ribbit', share: 0.02*netProfit },
    ];

    return (
        <div className="page-container">
            <h1>PartnerShares</h1>

            <div className="stat-cards">
                <div className="stat-card">
                    <span className="stat-label">Total Revenue</span>
                    <span className="stat-value">${totalRevenue.toFixed(2)}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Total Expenses</span>
                    <span className="stat-value">${totalExpenses.toFixed(2)}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Net Profit</span>
                    <span className="stat-value">${netProfit.toFixed(2)}</span>
                </div>
            </div>

            <div className="parts">
            {partners.map((p) => (
                <div key={p.name} className="partner-list">
                    <h3>{p.name}</h3>
                    <p>Share: Rs. {p.share.toFixed(2)}</p>
                </div>
            ))}
            </div>
            
        </div>
    );

}

export default PartnerShare;
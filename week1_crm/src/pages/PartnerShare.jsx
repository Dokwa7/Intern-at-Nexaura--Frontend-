function PartnerShare({expenses, clients}) {
    const totalRevenue = clients.reduce((sum, client) => sum + client.totalCost, 0);
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const netProfit = totalRevenue - totalExpenses;
    const partnerShare = netProfit / 5;

    const partners = [
        { name: 'Pomni', share: partnerShare },
        { name: 'Jax', share: partnerShare },
        { name: 'Queenie', share: partnerShare },
        { name: 'Kinger', share: partnerShare },
        { name: 'Ribbit', share: partnerShare },
    ];

    return (
        <div>
            <h1>PartnerShares</h1>

            <div>
                <h2>Total Revenue: ${totalRevenue.toFixed(2)}</h2>
                <h2>Total Expenses: ${totalExpenses.toFixed(2)}</h2>
                <h2>Net Profit: ${netProfit.toFixed(2)}</h2>
            </div>

            <div>
                {partners.map((p) => (
                    <div key={p.name}>
                        <h3>{p.name}</h3>
                        <p>Share: ${p.share.toFixed(2)}</p>
                    </div>
                ))}
            </div>

        </div>
    );

}

export default PartnerShare;
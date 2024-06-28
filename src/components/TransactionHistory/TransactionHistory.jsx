import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead className={css.tableHead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr className={css.tableRow} key={item.id}>
                        <td className={css.transactionType}>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                     </tr>
                ))}
            </tbody>

        </table>
    )
}

export default TransactionHistory;
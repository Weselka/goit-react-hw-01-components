import { Transaction } from './Transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr class="item" key={item.id}>
              <Transaction item={item} />
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

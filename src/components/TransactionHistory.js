import { Transaction } from './Transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <div
      style={{
        // display: table,
        padding: 2,
        borderRadius: 5,
        border: '1px solid #999',
      }}
    >
      <table
        class="transaction-history"
        style={{
          // borderCollapse: collapse,
          padding: 10,
          border: '1px solid #2a2a2a',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: 10,
                border: '1px solid #2a2a2a',
              }}
            >
              Type
            </th>
            <th
              style={{
                padding: 10,
                border: '1px solid #2a2a2a',
              }}
            >
              Amount
            </th>
            <th
              style={{
                padding: 10,
                border: '1px solid #2a2a2a',
              }}
            >
              Currency
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr class="item" key={item.id}>
              <Transaction item={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

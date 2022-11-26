export const Transaction = ({ item: { type, amount, currency } }) => {
  return (
    <div>
      <td
        style={{
          padding: 10,
          border: '1px solid #2a2a2a',
        }}
      >
        {type}
      </td>
      <td
        style={{
          padding: 10,
          border: '1px solid #2a2a2a',
        }}
      >
        {amount}
      </td>
      <td
        style={{
          padding: 10,
          border: '1px solid #2a2a2a',
        }}
      >
        {currency}
      </td>
    </div>
  );
};
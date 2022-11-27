import PropTypes from 'prop-types';

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

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
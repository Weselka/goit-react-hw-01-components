import PropTypes from 'prop-types';

export const Statistics = ({ stats: { label, percentage } }) => {
  return (
    <div>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </div>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
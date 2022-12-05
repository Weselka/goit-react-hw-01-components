import PropTypes from 'prop-types';
import {
  StatisticBox,
  StatisticLabel,
  StatisticPercentage,
} from './StatisticItem.styled';

export const StatisticItem = ({ stats: { label, percentage } }) => {
  return (
    <StatisticBox>
      <StatisticLabel>{label}</StatisticLabel>
      <StatisticPercentage>{percentage}%</StatisticPercentage>
    </StatisticBox>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
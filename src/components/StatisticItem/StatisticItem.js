import PropTypes from 'prop-types';
import {
  StatisticBox,
  StatisticLabel,
  StatisticPercentage,
} from './StatisticItem.styled';
import { getRandomHexColor } from '../helpers'

export const StatisticItem = ({ stats: { label, percentage } }) => {
  return (
    <StatisticBox backgroundColor={getRandomHexColor()}>
      <StatisticLabel>{label}</StatisticLabel>
      <StatisticPercentage>{percentage}%</StatisticPercentage>
    </StatisticBox>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
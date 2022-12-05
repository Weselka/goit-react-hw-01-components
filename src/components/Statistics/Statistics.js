import PropTypes from 'prop-types';
import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(stat => (
          <StatisticItem key={stat.id} stats={stat}>
          </StatisticItem>
        ))}
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
};

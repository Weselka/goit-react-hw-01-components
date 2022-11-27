import PropTypes from 'prop-types';
import { Statistics } from './Statistics';

export const StatisticsList = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      <ul class="stat-list">
        {stats.map(stat => (
          <li class="item" key={stat.id}>
            <Statistics stats={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Profile.propTypes = {
  id: PropTypes.string.isRequired,
};
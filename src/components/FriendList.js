import PropTypes from 'prop-types';
import { Friend } from './Friend';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li class="item" key={friend.id}>
          <Friend friend={friend} />
        </li>
      ))}
    </ul>
  );
};

Profile.propTypes = {
  id: PropTypes.number.isRequired,
};
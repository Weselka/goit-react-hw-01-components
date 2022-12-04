import PropTypes from 'prop-types';
import { FriendListItem } from 'components';
import { LeaderBoardProfiles } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <LeaderBoardProfiles>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend}></FriendListItem>
      ))}
    </LeaderBoardProfiles>
  );
}

FriendList.propTypes = {
  id: PropTypes.number.isRequired,
};

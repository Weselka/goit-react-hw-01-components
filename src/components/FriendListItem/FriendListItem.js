import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import { FriendsItem, Status, Avatar, Name } from './FriendListItem.styled';

import { theme } from 'styles/theme';


export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendsItem>
      <Status>
        {isOnline ? (
          <BsFillCircleFill fill={theme.fills.green} />
        ) : (
          <BsFillCircleFill fill={theme.fills.red} />
        )}
      </Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendsItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
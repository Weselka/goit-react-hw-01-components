import PropTypes from 'prop-types';
import {
  Card,
  Avatar,
  UserInfo,
  UserName,
  Tag,
  CardText,
  UserBox,
  StatsBox,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  profile: { username, tag, location, avatar, stats },
}) => {
  return (
    <Card>
      <UserInfo>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <CardText>{location}</CardText>
      </UserInfo>
      <UserBox>
        <StatsBox>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsBox>
        <StatsBox>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsBox>
        <StatsBox>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsBox>
      </UserBox>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
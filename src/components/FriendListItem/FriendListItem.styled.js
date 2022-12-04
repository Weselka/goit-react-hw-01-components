import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  display: flex;
//   grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  justify-content: start;
//   margin-left: 0;
  padding: 10px 30px 10px 10px;
  width: 400px;
  box-shadow: ${props => props.theme.shadows.medium};
//   cursor: pointer;
  background-color: ${props => props.theme.colors.white};
`;

export const Status = styled.span`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.colors.accent};
  font-weight: 700;
  font-size: ${props => props.theme.spacing(6)};
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 10%;
  box-shadow: ${props => props.theme.shadows.medium};
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.dark};
  font-weight: 900;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};
  margin-left: ${props => props.theme.spacing(2)};
  margin-bottom: 0;
`;
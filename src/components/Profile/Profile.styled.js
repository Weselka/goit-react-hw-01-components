import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.spacing(100)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: ${props => props.theme.spacing(4)};
  background: ${props => props.theme.colors.white};
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-top: 20px;
`;

export const UserInfo = styled.div`
  text-align: center;
`;

export const UserBox = styled.ul`
  display: flex;
  justify-content: center;
`;

export const UserName = styled.h2`
  font-size: ${props => props.theme.spacing(6)};
  text-transform: capitalize;
`;

export const Tag = styled.span`
  align-self: flex-start;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(3)};
  border-radius: ${props => props.theme.spacing(4)};
  font-size: ${props => props.theme.spacing(3)};
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.tagBackground};
`;

export const CardText = styled.p`
  letter-spacing: ${props => props.theme.spacing(0.2)};
  margin-top: 20px;
`;

export const StatsBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};
  background: ${props => props.theme.colors.light};
  padding-top: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(10)};
`;

export const StatsQuantity = styled.span`
  //   font-size: ${props => props.theme.spacing(8)};
  font-weight: 900;
  //   color: ${props => props.theme.colors.accent};
`;

export const StatsLabel = styled.span`
    font-size: ${props => props.theme.spacing(4)};
    color: ${props => props.theme.colors.grey};
`;
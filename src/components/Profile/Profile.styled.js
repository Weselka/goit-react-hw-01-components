import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.spacing(100)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.regular};
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
  justify-content: space-between;
`;

export const UserName = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: ${props => props.theme.spacing(6)};
  text-transform: capitalize;
`;

export const Tag = styled.span`
  align-self: flex-start;
  color: ${props => props.theme.colors.gray};
`;

export const CardText = styled.p`
  color: ${props => props.theme.colors.gray};
  letter-spacing: ${props => props.theme.spacing(0.2)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-top: ${props => props.theme.spacing(5)};
`;

export const StatsBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  border: 1px solid ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.light};
  padding-top: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(10)};
`;

export const StatsQuantity = styled.span`
  font-weight: 900;
`;

export const StatsLabel = styled.span`
  font-size: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.gray};
`;
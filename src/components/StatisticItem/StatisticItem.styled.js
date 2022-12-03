import styled from '@emotion/styled';

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;  
  background: ${props => props.theme.colors.dark};
  box-shadow: ${props => props.theme.shadows.small};
  padding-top: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(10)};
`;

export const StatisticLabel = styled.span`
  margin-bottom: 0;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 300;
`;

export const StatisticPercentage = styled.span`
  font-size: ${props => props.theme.spacing(8)};
  color: ${props => props.theme.colors.white};
`;
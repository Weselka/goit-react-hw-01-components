import styled from '@emotion/styled';

export const StatisticTitle = styled.h2`
  padding-top: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(10)};
  font-size: ${props => props.theme.spacing(8)};
  font-weight: 700;
  text-transform: uppercase;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.dark};
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

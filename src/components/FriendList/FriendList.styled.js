import styled from '@emotion/styled';


export const LeaderBoardProfiles = styled.ul`
  width: ${props => props.theme.spacing(120)};
  border-radius: ${props => props.theme.spacing(3)};
  margin: 0 auto;
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};
  display: grid;
  row-gap: ${props => props.theme.spacing(2)};
`;


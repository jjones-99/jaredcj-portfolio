import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  height: ${props => props.theme.headerHeight};
`;
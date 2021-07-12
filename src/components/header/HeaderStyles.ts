import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  height: ${props => props.theme.headerHeight};
  font: ${(props) => props.theme.fontText}
`;
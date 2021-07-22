import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  height: ${({ theme }) => theme.headerHeight};
  font: ${({ theme }) => theme.fontText}
`;
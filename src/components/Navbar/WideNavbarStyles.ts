import styled from "styled-components"

export const WideNavbarNav = styled.nav`
`;

export const WideNavbarItem = styled.a`
  padding-right: 0.5rem;
  font: ${({ theme }) => theme.fontText};
  color: black;
  text-decoration: none;
  font-weight: 500;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;
import styled from "styled-components";

export const WideNavbarNav = styled.nav``;

export const WideNavbarItem = styled.a`
  font: ${({ theme }) => theme.fontText};
  color: black;
  text-decoration: none;
  font-weight: 500;
  margin-right: 1.5rem;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colorPrimary};
  }
`;

import styled from "styled-components";

export const ThinNavbarButton = styled.button`
  border: none;
  background: none;
`;

export const ThinNavbarMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  height: 100vh;
`;

export const ThinNavbarHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem;
  height: 10%;
`;

export const ThinNavbarNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  padding: 30% 30px 60% 30px;
`;

export const ThinNavbarItem = styled.a`
  padding-right: 0.5rem;
  font: ${({ theme }) => theme.fontText};
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 3rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

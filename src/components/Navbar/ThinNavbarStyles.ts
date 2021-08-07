import styled from "styled-components";

export const ThinNavbarButton = styled.button`
  border: none;
  background: none;
  font-size: 2em;
`;

export const ThinNavbarMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colorMenuBackground};
  height: 100vh;
`;

export const ThinNavbarHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem 3rem 0.75rem 0.75rem;
  height: 8%;
`;

export const ThinNavbarNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 78%;
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

export const ThinNavbarSocials = styled.ul`
  list-style: none;
  height: 16%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0 6rem;
`;

export const ThinNavbarSocial = styled.li`
  font-size: 2rem;
  a {
    text-decoration: none;
    color: black;
  }
`;

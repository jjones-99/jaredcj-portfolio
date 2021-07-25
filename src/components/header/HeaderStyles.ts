import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.75rem 2rem 0.75rem 0.75rem;
  background: white;
  border-bottom: 1px solid black;

  display: flex;
  justify-content: space-between;
  align-items: baseline;

  font: ${({ theme }) => theme.fontText};
  z-index: 10;
`;

export const HeaderHome = styled.a`
  font: ${({ theme }) => theme.fontTitle};
  color: black;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.5rem;
`;

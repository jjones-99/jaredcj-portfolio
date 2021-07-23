import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.headerHeight};
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font: ${({ theme }) => theme.fontText};
`;

export const HeaderHome = styled.a`
`;
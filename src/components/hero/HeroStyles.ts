import styled from "styled-components";

export const HeroContainer = styled.section`
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LandingTitle = styled.h1`
  font: ${({ theme }) => theme.fontTitle};
  font-size: 3rem;
`;

export const LandingSubtitle = styled.p`
  font: ${({ theme }) => theme.fontSubtitle}
`;

import styled from "styled-components";

export const HeroContainer = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colorBackgroundDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LandingTitle = styled.h1`
  font: ${({ theme }) => theme.fontDecor};
  font-size: 10rem;
  color: white;
  margin-left: 10%;
  text-shadow: ${({ theme }) => theme.textShadow};
`;

export const LandingSubtitle = styled.p`
  font: ${({ theme }) => theme.fontSubtitle};
  color: white;
`;

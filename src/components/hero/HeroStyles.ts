import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  /* background-color: ${({ theme }) => theme.colorBackgroundDark}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LandingTitle = styled.h1`
  font: ${({ theme }) => theme.fontDecor};
  font-size: 5rem;
  color: black;
  margin-left: 10%;
  text-shadow: ${({ theme }) => theme.textShadow};

  @media only screen and (min-width: 768px) {
    font-size: 7rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 10rem;
  }
`;

export const LandingSubtitle = styled.p`
  font: ${({ theme }) => theme.fontSubtitle};
  color: white;
`;

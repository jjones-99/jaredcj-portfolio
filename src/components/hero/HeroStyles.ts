import styled from "styled-components";
import titleMesh from "../../assets/gradients/mesh-2.png";

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
  font-weight: 600;
  font-size: 5rem;
  color: transparent;
  margin-left: 10%;
  /* text-shadow: ${({ theme }) => theme.textShadow}; */

  @media only screen and (min-width: 768px) {
    font-size: 7rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 10rem;
  }

  // Background animated mesh gradient.
  background-image: url(${titleMesh});
  background-repeat: no-repeat;
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;

  animation: titleMeshAnim 10s cubic-bezier(0.77, 0, 0.175, 1) 2s infinite;

  @keyframes titleMeshAnim {
    0% {
      background-position: 5% 5%;
    }
    25% {
      background-position: 5% 95%;
      background-size: 250%;
    }
    50% {
      background-position: 95% 95%;
      background-size: 150%;
    }
    75% {
      background-position: 5% 95%;
    }
    100% {
      background-position: 5% 5%;
    }
  }
`;

export const LandingSubtitle = styled.p`
  font: ${({ theme }) => theme.fontSubtitle};
  color: white;
`;

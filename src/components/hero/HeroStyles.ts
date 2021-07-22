import styled from "styled-components";

export const HeroContainer = styled.section`
  height: calc(100vh - ${(props) => props.theme.headerHeight});
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LandingTitle = styled.h1`
  font: ${(props) => props.theme.fontTitle};
  font-size: 3rem;
`;

export const LandingSubtitle = styled.p`
  font: ${(props) => props.theme.fontSubtitle}
`;

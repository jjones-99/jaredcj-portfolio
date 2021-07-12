import styled from "styled-components";

export const HeroWrapper = styled.div`
  height: calc(100vh - ${(props) => props.theme.headerHeight});
`;

export const LandingTitle = styled.h1`
  font: ${(props) => props.theme.fontTitle};
  font-size: 3rem;
`;

export const LandingSubtitle = styled.p`
  font: ${(props) => props.theme.fontSubtitle}
`;

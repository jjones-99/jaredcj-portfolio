import styled from "styled-components";

const PLAYGROUND_CARD_BORDER_RADIUS = "3rem";

export const PlaygroundContainer = styled.section`
  margin-bottom: ${({ theme }) => theme.sectionSpacerHeight};
`;

export const PlaygroundGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media only screen and (min-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 10vw;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20vw;
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 10vw;
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

/* ================================================================
 * Playground Cards
 */

export const PlaygroundCard = styled.article<{ imageSrc: string }>`
  position: relative;
  margin: 0 3rem 3rem 3rem;
  aspect-ratio: 1 / 1;
  border-radius: ${PLAYGROUND_CARD_BORDER_RADIUS};

  background-image: url(${({ imageSrc }) => imageSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  box-shadow: ${({ theme }) => theme.boxShadow};
  color: white;
`;

export const PlaygroundCardBackgroundMask = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 25%);
  border-radius: ${PLAYGROUND_CARD_BORDER_RADIUS};
`;

export const PlaygroundCardHeader = styled.header`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 2rem;
`;

export const PlaygroundCardTitle = styled.h3`
  font: ${({ theme }) => theme.fontSubtitle};
  text-transform: uppercase;
  font-size: 2rem;
`;

export const PlaygroundCardLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
`;

export const PlaygroundCardLink = styled.li`
  display: inline-block;
  margin-right: 1rem;
  text-decoration: none;
  font-size: 2.5rem;
  transition: font-size 100ms;
  vertical-align: top;

  & a {
    color: white;
  }

  @media only screen and (hover: hover) {
    &:hover {
      font-size: 3rem;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;

import styled from "styled-components";

export const PlaygroundContainer = styled.section`
  /* background-color: ${({ theme }) => theme.colorBackgroundDark}; */
`;

export const PlaygroundGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media only screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const PlaygroundCell = styled.article`
  position: relative;
  aspect-ratio: 5 / 4;
  box-shadow: 0 20px 60px 0 rgb(0 0 0 / 15%);
  background-color: ${({ theme }) => theme.colorBackgroundLight};
  overflow: hidden;

  @media only screen and (min-width: 480px) {
    aspect-ratio: 5 / 5;
  }

  @media only screen and (min-width: 768px) {
    aspect-ratio: 3 / 5;
  }

  @media only screen and (min-width: 1024px) {
    aspect-ratio: 4 / 5;
  }

  @media only screen and (min-width: 1200px) {
    aspect-ratio: 5 / 5;
  }
`;

export const PlaygroundCellContent = styled.div`
  position: absolute;
  width: 80%;
  left: 10%;
  bottom: 10%;
`;

export const PlaygroundCellHeader = styled.header``;

export const PlaygroundCellTitle = styled.h3`
  font: ${({ theme }) => theme.fontTitle};
  font-size: 1rem;

  @media only screen and (min-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const PlaygroundCellBody = styled.p`
  font: ${({ theme }) => theme.fontSubtitle};
  font-size: 0.8rem;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

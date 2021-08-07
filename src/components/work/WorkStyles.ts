import styled from "styled-components";

export const WorkContainer = styled.section`
  margin-bottom: ${({ theme }) => theme.sectionSpacerHeight};
`;

export const WorkCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 0 5%;

  @media only screen and (min-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 5%;
  }

  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1200px) {
    padding: 0 20%;
  }
`;

export const WorkCardContainer = styled.article<{ imageSrc: string }>`
  position: relative;
  margin: 0 1.5rem 1.5rem 1.5rem;
  aspect-ratio: 4 / 3;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colorCardBackground};
  background-image: url(${({ imageSrc }) => imageSrc});
  background-size: cover;
  background-position: center;

  box-shadow: ${({ theme }) => theme.boxShadow};

  &::before {
    content: "";
    background: ${({ theme }) => theme.colorPrimary};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  & > * {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  &:hover {
    &::before,
    & > * {
      opacity: 1;
    }
  }
`;

export const WorkCardCorner = styled.div`
  /* display: none; */
  position: absolute;
  top: -0.3rem;
  left: -0.5rem;
  font: ${({ theme }) => theme.fontDecor};
  color: white;
  font-size: 1rem;
  text-shadow: ${({ theme }) => theme.textShadow};

  @media only screen and (min-width: 480px) {
    display: block;
    top: -0.2em;
    left: -0.5em;
    font-size: 1rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const WorkCardContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4em 4em;

  color: white;
`;

export const WorkCardHeader = styled.header`
  font: ${({ theme }) => theme.fontSubtitle};
  text-align: center;
`;

export const WorkCardTitle = styled.h3`
  font: ${({ theme }) => theme.fontTitle};
  font-size: 1rem;
  text-align: right;

  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const WorkCardBody = styled.p`
  font: ${({ theme }) => theme.fontSubtitle};
  font-size: 1.2rem;
  text-align: center;
`;

export const WorkDetailsCard = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  background-color: ${({ theme }) => theme.colorCardBackground};
  border-radius: 0.5rem;
  margin: 20vh 10vw;
  padding: 1rem 2rem;

  overflow-y: scroll;

  color: white;

  @media only screen and (min-width: 768px) {
    margin: 20vh 15vw;
  }

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.5em;
  }
`;

export const WorkDetailsHeader = styled.header`
  width: 100%;
  align-items: top;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const WorkDetailsTitle = styled.h3`
  font: ${({ theme }) => theme.fontTitle};
  font-size: 1.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const WorkDetailsBody = styled.p`
  font: ${({ theme }) => theme.fontSubtitle};
  font-size: 1rem;
  white-space: pre-wrap;
`;

import styled from "styled-components";

export const WorkContainer = styled.section`
  margin-top: 8rem;
  margin-bottom: 8rem;
`;

export const WorkCardList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const WorkCardListItem = styled.li`
  margin-bottom: 7rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const WorkCardContainer = styled.article<{ imageSrc: string; autoHeight: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme.colorCardBackground};
  background-image: url(${({ imageSrc }) => imageSrc});
  background-size: cover;
  aspect-ratio: ${({ autoHeight }) => (autoHeight ? "" : "3 / 3")};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.5rem;
  margin: 0 auto;

  width: 80%;
  @media only screen and (min-width: 480px) {
    font-size: 4rem;
    aspect-ratio: 3 / 2;
  }

  @media only screen and (min-width: 1024px) {
    aspect-ratio: 5 / 3;
  }

  &::before {
    content: "";
    background: rgb(0 0 0 / 60%);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
  }
`;

export const WorkCardCorner = styled.div`
  /* display: none; */
  position: absolute;
  top: -0.3rem;
  left: -0.5rem;
  font: ${({ theme }) => theme.fontDecor};
  color: white;
  font-size: 1.5rem;
  text-shadow: ${({ theme }) => theme.textShadow};

  @media only screen and (min-width: 480px) {
    display: block;
    top: -0.2em;
    left: -0.5em;
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const WorkCardContent = styled.div<{ alignX: string; alignY: string }>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignX }) => alignX};
  justify-content: ${({ alignY }) => alignY};
  padding: 2rem 1rem;

  // Text
  color: white;

  @media only screen and (min-width: 768px) {
    padding: 5rem 5rem;
  }
`;

export const WorkCardHeader = styled.header``;

export const WorkCardTitle = styled.h3`
  font: ${({ theme }) => theme.fontTitle};
  font-size: 1.5rem;
  float: right;
  text-align: right;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const WorkCardBody = styled.p`
  font: ${({ theme }) => theme.fontSubtitle};
  font-size: 0.75rem;
  float: right;
  text-align: right;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const WorkCardButton = styled.button`
  font: ${({ theme }) => theme.fontButton};
  font-size: 0.75rem;
  padding: 0.8em 1.8em;
  background: ${({ theme }) => theme.colorPrimaryLight};
  border: none;
  text-align: center;
  line-height: normal;
  color: white;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const WorkCardBackHeader = styled.header`
  width: 100%;
  align-items: top;
`;

export const WorkCardBackTitle = styled.h3`
  font: ${({ theme }) => theme.fontTitle};
  font-size: 1.5rem;
  float: left;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const WorkCardBackClose = styled.button`
  background: none;
  border: none;
  color: white;
  float: right;
  font-size: 1.5rem;
  margin-top: -0.25rem;
`;

export const WorkCardBackBody = styled.p`
  font: ${({ theme }) => theme.fontSubtitle};
  font-size: 0.75rem;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

import styled from "styled-components";

export const WorkContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WorkCardContainer = styled.article<{ imageSrc: string }>`
  position: relative;
  background-image: url(${(props) => props.imageSrc});
  background-size: cover;
  width: 80%; // TODO: Responsive
  aspect-ratio: 3 / 2.5;
  margin-bottom: 7rem;
  box-shadow: 0 1.3rem 5rem 0 rgb(0 0 0 / 35%);
  border-radius: 0.5rem;
`;

export const WorkCardMask = styled.div`
  content: "";
  background: rgb(0 0 0 / 60%);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
`;

export const WorkCardCorner = styled.div`
  /* display: none; */
  position: absolute;
  top: -0.3rem;
  left: -0.5rem;
  font: ${(props) => props.theme.fontDecor};
  color: white;
  font-size: 1.7rem;
  text-shadow: 5px 5px 11px rgb(74 74 74 / 70%);

  @media only screen and (min-width: 768px) {
    display: block;
    top: -1rem;
    left: -2rem;
    font-size: 4rem;
  }
`;

export const WorkCardContent = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 2rem 1rem;

  // Text
  color: white;

  @media only screen and (min-width: 768px) {
    padding: 5rem 5rem;
  }
`;

export const WorkCardHeader = styled.header``;

export const WorkCardTitle = styled.h3`
  font: ${(props) => props.theme.fontTitle};
  font-size: 1.5rem;
  float: right;
  text-align: right;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const WorkCardBody = styled.p`
  font: ${(props) => props.theme.fontSubtitle};
  font-size: 0.75rem;
  float: right;
  text-align: right;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const WorkCardButton = styled.button`
  font: ${(props) => props.theme.fontButton};
  font-size: 0.75rem;
  padding: 0.8em 1.8em;
  background: ${(props) => props.theme.colorPrimaryLight};
  border: none;
  text-align: center;
  line-height: normal;
  color: white;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;
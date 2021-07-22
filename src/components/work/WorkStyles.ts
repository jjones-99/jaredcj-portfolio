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
  aspect-ratio: 3 / 2;
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
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: -1rem;
    left: -2rem;
    font: ${(props) => props.theme.fontDecor};
    color: white;
    font-size: 4rem;
    text-shadow: 5px 5px 11px rgb(74 74 74 / 50%);
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
  padding: 5rem 5rem;

  // Text
  color: white;
`;

export const WorkCardHeader = styled.header``;

export const WorkCardTitle = styled.h3`
  font: ${(props) => props.theme.fontTitle};
  font-size: 2rem;
  float: right;
  text-align: right;
`;

export const WorkCardBody = styled.p`
  font: ${(props) => props.theme.fontSubtitle};
  font-size: 1rem;
  float: right;
  text-align: right;
`;

export const WorkCardButton = styled.button`
  font: ${(props) => props.theme.fontButton};
  font-size: 1rem;
  padding: 0.8rem 1.8rem;
  background: ${(props) => props.theme.colorPrimary};
  border: none;
  text-align: center;
  line-height: normal;
`;

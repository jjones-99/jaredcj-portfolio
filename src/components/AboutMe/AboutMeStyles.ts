import styled from "styled-components";

export const AboutMeContainer = styled.section`
  min-height: 40vh;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({theme}) => theme.sectionSpacerHeight};
`;

export const AboutMeMain = styled.article`
  width: 80%;
  background-color: white;
  border-radius: 2rem;
  font: ${({ theme }) => theme.fontText};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media only screen and (min-width: 480px) {
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1024px) {
    width: 90%;
  }

  @media only screen and (min-width: 1200px) {
  }
`;

export const AboutMeBody = styled.section`
  padding: 2rem;
  border-radius: 2rem 2rem 0 0;
  background-color: ${({ theme }) => theme.colorPrimary};
  text-align: center;
  color: white;
`;

export const AboutMeSections = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AboutMeSection = styled.section`
  position: relative;
  padding: 2rem;
  text-align: center;
  width: 100%;

  &:before {
    --border-width: 50%;
    content: "";
    position: absolute;
    left: calc(var(--border-width) / 2);
    bottom: 0;
    height: 1px;
    width: var(--border-width);
    border-bottom: 2px solid lightgray;
  }

  &:last-child:before {
    border-bottom: none;
  }

  @media only screen and (min-width: 1024px) {
    width: calc(100% / 3);

    &:before {
      border-bottom: none;
    }

    &:after {
      --border-width: 50%;
      content: "";
      position: absolute;
      top: calc(var(--border-width) / 2);
      right: 0;
      width: 1px;
      height: var(--border-width);
      border-right: 2px solid lightgray;
    }

    &:last-child:after {
      border-right: none;
    }
  }
`;

export const AboutMeHeader = styled.h5``;

export const AboutMeTopic = styled.h6`
  font-weight: 500;
`;

export const AboutMeInfo = styled.p``;

export const AboutMeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const AboutMeListItem = styled.li``;

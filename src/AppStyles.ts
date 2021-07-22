import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 95%;
  margin: 0 auto;

  @media only screen and (min-width: 480px) {
    width: 95%;
  }

  @media only screen and (min-width: 768px) {
    width: 90%;
  }

  @media only screen and (min-width: 1024px) {
    width: 1000px;
  }

  @media only screen and (min-width: 1200px) {
    width: 1170px;
  }
`;

// Merely for copying common breakpoints.
const Breakpoints = styled.div`
  @media only screen and (min-width: 480px) {
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`;

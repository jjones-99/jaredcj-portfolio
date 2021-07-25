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

export const SectionHeader = styled.header`
  place-items: center;
  text-align: center;
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font: ${({ theme }) => theme.fontTitle};
  font-weight: 600;
  font-size: 1.5rem;
`;

export const SectionSubtitle = styled.h6`
  font: ${({ theme }) => theme.fontSubtitle};
  font-size: 0.75rem;
  text-transform: uppercase;
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

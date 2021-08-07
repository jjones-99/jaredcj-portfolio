import styled from "styled-components";

/**
 * Reusable styles for the entire app.
 */

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

export const ScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: black;
  opacity: 0;
  pointer-events: none;

  transition: opacity 500ms ease-in-out;
`;

export const SectionHeader = styled.header`
  place-items: center;
  text-align: center;
  padding-top: 3rem;
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

export const PrimaryButtonLink = styled.a<{ light?: boolean }>`
  font: ${({ theme }) => theme.fontText};
  font-size: 1em;
  font-weight: 500;
  line-height: calc(1em * 2);
  text-decoration: none;
  color: ${({ light, theme }) => (light ? theme.colorPrimary : "white")};

  padding: 0.7em 2em;
  border-radius: 100000px;
  border: none;
  background-color: ${({ light, theme }) => (light ? "white" : theme.colorPrimary)};

  cursor: pointer;

  &:hover {
    color: ${({ light, theme }) => (light ? theme.colorPrimary : "white")};
    filter: brightness(85%);
  }
`;

export const PrimaryButton = styled.button<{ light?: boolean }>`
  font: ${({ theme }) => theme.fontText};
  font-size: 1em;
  font-weight: 500;
  line-height: calc(1em * 2);
  color: ${({ light, theme }) => (light ? theme.colorPrimary : "white")};

  padding: 0.2em 2em;
  border-radius: 100000px;
  border: none;
  background-color: ${({ light, theme }) => (light ? "" : theme.colorPrimary)};

  cursor: pointer;

  &:hover {
    color: ${({ light, theme }) => (light ? theme.colorPrimary : "white")};
    filter: brightness(85%);
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 2em;
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

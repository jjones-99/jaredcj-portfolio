import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colorBackgroundDark};
  color: white;
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterTopContainer = styled.div`
  margin-bottom: 2rem;

  @media only screen and (min-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const FooterTop = styled.a`
  text-decoration: none;
  color: white;
  font: ${({ theme }) => theme.fontSubtitle};
  font-size: 1.5rem;

  &:active,
  &:hover {
    color: white;
  }
`;

export const FooterSocials = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
`;

export const FooterSocial = styled.li`
  margin-bottom: 1rem;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 480px) {
    display: inline-block;
    margin-right: 4rem;
    margin-bottom: 0;
  }
`;

export const FooterSocialLink = styled.a`
  font: ${({ theme }) => theme.fontSubtitle};
  font-weight: 600;
  text-decoration: none;
  color: white;
  text-align: center;

  &:active,
  &:hover {
    color: white;
  }
`;

export const FooterCopy = styled.div`
  font: ${({ theme }) => theme.fontAside};
  font-size: 0.8rem;
`;

export const FooterCredits = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FooterCredit = styled.li`
  font: ${({ theme }) => theme.fontAside};
  font-size: 0.65rem;
  font-style: italic;
  margin-bottom: 1rem;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 480px) {
    display: inline-block;
    margin-right: 4rem;
    margin-bottom: 0;
  }

  & a {
    color: white;
  }
`;
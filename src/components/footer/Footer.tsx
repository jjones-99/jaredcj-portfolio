import React from "react";
import { URL_CODEPEN, URL_GITHUB, URL_LINKEDIN } from "../../utils/constants";
import {
  FooterContainer,
  FooterCopy,
  FooterCredit,
  FooterCredits,
  FooterSocial,
  FooterSocialLink,
  FooterSocials,
  FooterTop,
  FooterTopContainer,
} from "./FooterStyles";

/**
 * Represents the footer of the portfolio.
 */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterTopContainer>
        <FooterTop href="#top">Jared Jones</FooterTop>
      </FooterTopContainer>
      <FooterSocials>
        <FooterSocial>
          <FooterSocialLink href={URL_LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </FooterSocialLink>
        </FooterSocial>
        <FooterSocial>
          <FooterSocialLink href={URL_GITHUB} target="_blank" rel="noreferrer">
            GitHub
          </FooterSocialLink>
        </FooterSocial>
        <FooterSocial>
          <FooterSocialLink href={URL_CODEPEN} target="_blank" rel="noreferrer">
            CodePen
          </FooterSocialLink>
        </FooterSocial>
      </FooterSocials>
      <FooterCopy>© {year} Jared Jones</FooterCopy>
      <FooterCredits>
        <FooterCredit>
          Icons by{" "}
          <a href="https://fontawesome.com" target="_blank" rel="noreferrer">
            Font Awesome
          </a>{" "}
          and Mario from{" "}
          <a
            href="https://mariodelvalle.github.io/CaptainIconWeb/"
            target="_blank"
            rel="noreferrer"
          >
            Captain Icon
          </a>
        </FooterCredit>
      </FooterCredits>
    </FooterContainer>
  );
};

export default Footer;

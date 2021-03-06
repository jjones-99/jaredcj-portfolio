import React from "react";
import { URL_CODEPEN, URL_GITHUB, URL_LINKEDIN, URL_RESUME } from "../../utils/constants";
import {
  FooterContainer,
  FooterCopy,
  FooterCredit,
  FooterCredits,
  FooterSocial,
  FooterLink,
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
      <FooterCopy>
        <FooterLink href={URL_RESUME} target="_blank">
          View my resume
        </FooterLink>
      </FooterCopy>
      <FooterSocials>
        <FooterSocial>
          <FooterLink href={URL_LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </FooterLink>
        </FooterSocial>
        <FooterSocial>
          <FooterLink href={URL_GITHUB} target="_blank" rel="noreferrer">
            GitHub
          </FooterLink>
        </FooterSocial>
        <FooterSocial>
          <FooterLink href={URL_CODEPEN} target="_blank" rel="noreferrer">
            CodePen
          </FooterLink>
        </FooterSocial>
      </FooterSocials>
      <FooterCopy>© {year} Jared Jones - WIP</FooterCopy>
      <FooterCredits>
        <FooterCredit>
          Icons by{" "}
          <a href="https://fontawesome.com" target="_blank" rel="noreferrer">
            Font Awesome
          </a>{" "}
        </FooterCredit>
      </FooterCredits>
    </FooterContainer>
  );
};

export default Footer;

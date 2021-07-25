import React, { useEffect, useState } from "react";
import {
  ThinNavbarButton,
  ThinNavbarHeader,
  ThinNavbarItem,
  ThinNavbarMenu,
  ThinNavbarNav,
  ThinNavbarSocial,
  ThinNavbarSocials,
} from "./ThinNavbarStyles";
import cancel from "../../assets/cancel.svg";
import hamburger from "../../assets/hamburger.svg";
import { URL_LINKEDIN, URL_GITHUB, URL_CODEPEN } from "../../utils/constants";

/**
 * Represents site navigation for the portfolio.
 */
const ThinNavbar: React.FC = () => {
  const [renderMenu, setRenderMenu] = useState(false);

  useEffect(() => {
    const element = document.querySelector("html");
    if (!element) return;
    if (renderMenu) {
      element.classList.add("disabled-scrolling");
    } else {
      element.classList.remove("disabled-scrolling");
    }
  }, [renderMenu]);

  return (
    <>
      <ThinNavbarButton onClick={() => setRenderMenu(true)}>
        <img src={hamburger} title="Open menu" />
      </ThinNavbarButton>
      {renderMenu && (
        <ThinNavbarMenu>
          <ThinNavbarHeader>
            <ThinNavbarButton onClick={() => setRenderMenu(false)}>
              <img src={cancel} title="Close menu" />
            </ThinNavbarButton>
          </ThinNavbarHeader>
          <ThinNavbarNav>
            <ThinNavbarItem onClick={() => setRenderMenu(false)} href="#work">
              Work
            </ThinNavbarItem>
            <ThinNavbarItem onClick={() => setRenderMenu(false)} href="#playground">
              Playground
            </ThinNavbarItem>
            <ThinNavbarItem onClick={() => setRenderMenu(false)} href="#contact">
              Contact
            </ThinNavbarItem>
          </ThinNavbarNav>
          <ThinNavbarSocials>
            <ThinNavbarSocial>
              <a href={URL_LINKEDIN} target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin"></i>
              </a>
            </ThinNavbarSocial>
            <ThinNavbarSocial>
              <a href={URL_GITHUB} target="_blank" rel="noreferrer">
                <i className="fa fa-github"></i>
              </a>
            </ThinNavbarSocial>
            <ThinNavbarSocial>
              <a href={URL_CODEPEN} target="_blank" rel="noreferrer">
                <i className="fa fa-codepen"></i>
              </a>
            </ThinNavbarSocial>
          </ThinNavbarSocials>
        </ThinNavbarMenu>
      )}
    </>
  );
};

export default ThinNavbar;

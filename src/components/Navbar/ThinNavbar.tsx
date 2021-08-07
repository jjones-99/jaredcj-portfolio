import React, { useEffect, useState } from "react";
import { AppContext } from "../../App";
import { IconButton } from "../../styles/AppStyles";
import { URL_CODEPEN, URL_GITHUB, URL_LINKEDIN } from "../../utils/constants";
import { toggleBodyScrolling } from "../../utils/helpers";
import {
  ThinNavbarHeader,
  ThinNavbarItem,
  ThinNavbarMenu,
  ThinNavbarNav,
  ThinNavbarSocial,
  ThinNavbarSocials,
} from "./ThinNavbarStyles";

/**
 * Represents site navigation for the portfolio.
 */
const ThinNavbar: React.FC = () => {
  const { setRenderContactForm } = React.useContext(AppContext);
  const [renderMenu, setRenderMenu] = useState(false);

  useEffect(() => {
    toggleBodyScrolling(!renderMenu);
  }, [renderMenu]);

  return (
    <>
      <IconButton onClick={() => setRenderMenu(true)} title="Open menu">
        <i className="fas fa-bars" />
      </IconButton>
      {renderMenu && (
        <ThinNavbarMenu>
          <ThinNavbarHeader>
            <IconButton onClick={() => setRenderMenu(false)} title="Close menu">
              <i className="fas fa-times" />
            </IconButton>
          </ThinNavbarHeader>
          <ThinNavbarNav>
            <ThinNavbarItem onClick={() => setRenderMenu(false)} href="#aboutme">
              About Me
            </ThinNavbarItem>
            <ThinNavbarItem
              className="hide-on-hoverless"
              onClick={() => setRenderMenu(false)}
              href="#work"
            >
              Work
            </ThinNavbarItem>
            <ThinNavbarItem
              className="hide-on-hoverless"
              onClick={() => setRenderMenu(false)}
              href="#playground"
            >
              Playground
            </ThinNavbarItem>
            <ThinNavbarItem
              onClick={() => {
                setRenderMenu(false);
                setRenderContactForm!(true);
              }}
            >
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

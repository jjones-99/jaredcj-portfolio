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
import { URL_LINKEDIN, URL_GITHUB, URL_CODEPEN } from "../../utils/constants";
import { toggleBodyScrolling } from "../../utils/helpers";
import { AppContext } from "../../App";

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
      <ThinNavbarButton onClick={() => setRenderMenu(true)} title="Open menu">
        <i className="fas fa-bars" />
      </ThinNavbarButton>
      {renderMenu && (
        <ThinNavbarMenu>
          <ThinNavbarHeader>
            <ThinNavbarButton onClick={() => setRenderMenu(false)} title="Close menu">
              <i className="fas fa-times" />
            </ThinNavbarButton>
          </ThinNavbarHeader>
          <ThinNavbarNav>
            <ThinNavbarItem onClick={() => setRenderMenu(false)} href="#aboutme">
              About Me
            </ThinNavbarItem>
            <ThinNavbarItem onClick={() => setRenderMenu(false)} href="#work">
              Work
            </ThinNavbarItem>
            <ThinNavbarItem onClick={() => setRenderMenu(false)} href="#playground">
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

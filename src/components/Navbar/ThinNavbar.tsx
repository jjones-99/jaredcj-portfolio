import React, { useState } from "react";
import {
  ThinNavbarButton,
  ThinNavbarHeader,
  ThinNavbarItem,
  ThinNavbarMenu,
  ThinNavbarNav,
} from "./ThinNavbarStyles";
import cancel from "../../assets/cancel.svg";
import hamburger from "../../assets/hamburger.svg";

/**
 * Represents site navigation for the portfolio.
 */
const ThinNavbar: React.FC = () => {
  const [renderMenu, setRenderMenu] = useState(false);

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
        </ThinNavbarMenu>
      )}
    </>
  );
};

export default ThinNavbar;

import React, { useState } from "react";
import {
  ThinNavbarButton,
  ThinNavbarHeader,
  ThinNavbarItem,
  ThinNavbarMenu,
  ThinNavbarNav,
} from "./ThinNavbarStyles";

/**
 * Represents site navigation for the portfolio.
 */
const ThinNavbar: React.FC = () => {
  const [renderMenu, setRenderMenu] = useState(false);

  return (
    <>
      <ThinNavbarButton onClick={() => setRenderMenu(true)}>Menu</ThinNavbarButton>
      {renderMenu && (
        <ThinNavbarMenu>
          <ThinNavbarHeader>
            <ThinNavbarButton onClick={() => setRenderMenu(false)}>Close</ThinNavbarButton>
          </ThinNavbarHeader>
          <ThinNavbarNav>
            <ThinNavbarItem onClick={() => setRenderMenu(false)} href="#work">Work</ThinNavbarItem>
            <ThinNavbarItem onClick={() => setRenderMenu(false)} href="#playground">Playground</ThinNavbarItem>
            <ThinNavbarItem onClick={() => setRenderMenu(false)} href="#contact">Contact</ThinNavbarItem>
          </ThinNavbarNav>
        </ThinNavbarMenu>
      )}
    </>
  );
};

export default ThinNavbar;

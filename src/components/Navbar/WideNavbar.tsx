import React from "react";
import { AppContext } from "../../App";
import { WideNavbarItem, WideNavbarNav } from "./WideNavbarStyles";

/**
 * Represents site navigation for the portfolio.
 */
const WideNavbar: React.FC = () => {
  const { setRenderContactForm } = React.useContext(AppContext);

  return (
    <WideNavbarNav>
      <WideNavbarItem href="#aboutme">About Me</WideNavbarItem>
      <WideNavbarItem href="#work">Work</WideNavbarItem>
      <WideNavbarItem href="#playground">Playground</WideNavbarItem>
      <WideNavbarItem onClick={() => setRenderContactForm!(true)}>Contact</WideNavbarItem>
    </WideNavbarNav>
  );
};

export default WideNavbar;

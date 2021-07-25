import React from "react";
import { WideNavbarItem, WideNavbarNav } from "./WideNavbarStyles";

/**
 * Represents site navigation for the portfolio.
 */
const WideNavbar: React.FC = () => {
  return (
    <WideNavbarNav>
      <WideNavbarItem href="#work">Work</WideNavbarItem>
      <WideNavbarItem href="#playground">Playground</WideNavbarItem>
      <WideNavbarItem href="#contact">Contact</WideNavbarItem>
    </WideNavbarNav>
  );
};

export default WideNavbar;

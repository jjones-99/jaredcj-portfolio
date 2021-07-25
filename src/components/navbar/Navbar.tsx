import React from "react";
import { NavbarItem, NavbarNav } from "./NavbarStyles";

/**
 * Represents site navigation for the portfolio.
 */
const Navbar: React.FC = () => {
  return (
    <NavbarNav>
      <NavbarItem href="#work">Work</NavbarItem>
      <NavbarItem href="#playground">Playground</NavbarItem>
      <NavbarItem href="#contact">Contact</NavbarItem>
    </NavbarNav>
  );
};

export default Navbar;

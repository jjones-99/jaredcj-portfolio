import React from "react";
import { NavbarItem, NavbarNav } from "./NavbarStyles";

interface NavItemProps {
  href: string;
}

/**
 * Represents a single item of the site navigation.
 */
const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <NavbarItem>
      <a href={props.href}>{props.children}</a>
    </NavbarItem>
  );
};

/**
 * Represents site navigation for the portfolio.
 */
const Navbar: React.FC = () => {
  return (
    <NavbarNav>
      <NavItem href="#work">Work</NavItem>
      <NavItem href="#playground">Playground</NavItem>
    </NavbarNav>
  );
};

export default Navbar;

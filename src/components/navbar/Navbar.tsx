import React from "react";
import { NavbarItem, NavbarNav } from "./NavbarStyles";

interface NavItemProps {
  href: string;
}

/**
 * Represents a single item of the site navigation.
 * @param props The properties for the component.
 * @returns The component.
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
 * @returns The component.
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

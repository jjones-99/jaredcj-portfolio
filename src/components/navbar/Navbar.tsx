import React from "react";

interface NavItemProps {
  href: string;
}
const NavItem: React.FC<NavItemProps> = (props) => {
  return <a>{props.children}</a>;
};

const Navbar: React.FC = () => {
  return <div>
    <NavItem href="#work">Work</NavItem>
    <NavItem href="#playground">Playground</NavItem>
  </div>;
};

export default Navbar;

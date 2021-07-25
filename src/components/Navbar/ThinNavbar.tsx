import React from "react";
import { ThinNavbarItem, ThinNavbarNav } from "./ThinNavbarStyles";

/**
 * Represents site navigation for the portfolio.
 */
const ThinNavbar: React.FC = () => {
  return (
    <ThinNavbarNav>
      <ThinNavbarItem href="#work">asdf</ThinNavbarItem>
      <ThinNavbarItem href="#playground">Playground</ThinNavbarItem>
      <ThinNavbarItem href="#contact">Contact</ThinNavbarItem>
    </ThinNavbarNav>
  );
};

export default ThinNavbar;

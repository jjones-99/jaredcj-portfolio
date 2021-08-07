import React from "react";
import { AppContext } from "../../App";
import { PrimaryButton } from "../../styles/AppStyles";
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
      <PrimaryButton onClick={() => setRenderContactForm!(true)}>
        Contact
      </PrimaryButton>
    </WideNavbarNav>
  );
};

export default WideNavbar;

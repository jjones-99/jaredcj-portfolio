import React from "react";
import WideNavbar from "../Navbar/WideNavbar";
import { HeaderContainer, HeaderHome } from "./HeaderStyles";

/**
 * Represents the header of the portfolio.
 */
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderHome href="/">Jared Jones</HeaderHome>
      <WideNavbar />
    </HeaderContainer>
  );
};

export default Header;

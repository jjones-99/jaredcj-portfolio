import React from "react";
import Navbar from "../Navbar/Navbar";
import { HeaderContainer, HeaderHome } from "./HeaderStyles";

/**
 * Represents the header of the portfolio.
 */
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderHome>Jared Jones</HeaderHome>
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;

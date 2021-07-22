import React from "react";
import Navbar from "../Navbar/Navbar";
import { HeaderContainer } from "./HeaderStyles";

/**
 * Represents the header of the portfolio.
 * @returns The component.
 */
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>Jared Jones</h1>
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import ThinNavbar from "../Navbar/ThinNavbar";
import WideNavbar from "../Navbar/WideNavbar";
import { HeaderContainer, HeaderHome } from "./HeaderStyles";

const navbarMediaQuery = window.matchMedia("(min-width: 480px)");

/**
 * Represents the header of the portfolio.
 */
const Header: React.FC = () => {
  const [isThinScreen, setIsThinScreen] = useState(navbarMediaQuery.matches);

  useEffect(() => {
    navbarMediaQuery.addEventListener("change", () => {
      setIsThinScreen(navbarMediaQuery.matches);
    });
  }, []);

  return (
    <HeaderContainer>
      <HeaderHome href="/">Jared Jones</HeaderHome>
      {isThinScreen ? <WideNavbar /> : <ThinNavbar />}
    </HeaderContainer>
  );
};

export default Header;

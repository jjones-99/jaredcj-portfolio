import React from "react";
import { theme } from "../../styles/theme";
import Navbar from "../navbar/Navbar";
import { HeaderDiv } from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderDiv theme={theme}>
      <span>Jared Jones</span>
      <Navbar />
    </HeaderDiv>
  );
};

export default Header;

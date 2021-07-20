import React from "react";
import Navbar from "../Navbar/Navbar";
import { HeaderDiv } from "./HeaderStyles";

const Header: React.FC = () => {
  return (
    <HeaderDiv>
      <span>Jared Jones</span>
      <Navbar />
    </HeaderDiv>
  );
};

export default Header;

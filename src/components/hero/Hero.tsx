import React from "react";
import { HeroContainer, LandingSubtitle, LandingTitle } from "./HeroStyles";

/**
 * Represents the hero section of the portfolio.
 */
const Hero = () => {
  return (
    <HeroContainer>
      <LandingTitle>
        Hi there,
        <br />
        I'm Jared.
      </LandingTitle>
    </HeroContainer>
  );
};

export default Hero;

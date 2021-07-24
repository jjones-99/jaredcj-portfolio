import React from "react";
import { HeroContainer, LandingSubtitle, LandingTitle } from "./HeroStyles";

/**
 * Represents the hero section of the portfolio.
 */
const Hero = () => {
  return (
    <HeroContainer>
      {/* TODO: Somehow mask this so that the floating objects 
      show up where the text is only? */}
      <LandingTitle>
        Hi there,
        <br />
        I'm Jared.
      </LandingTitle>
    </HeroContainer>
  );
};

export default Hero;

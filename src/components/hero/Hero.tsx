import React from "react";
import { HeroContainer, LandingSubtitle, LandingTitle } from "./HeroStyles";

/**
 * Represents the hero section of the portfolio.
 * @returns The component.
 */
const Hero = () => {
  return (
    <HeroContainer>
      <LandingTitle>Jared Jones</LandingTitle>
      <LandingSubtitle>Front-end developer</LandingSubtitle>
    </HeroContainer>
  );
};

export default Hero;

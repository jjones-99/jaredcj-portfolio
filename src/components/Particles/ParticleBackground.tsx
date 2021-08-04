import React from "react";
import Particles, { IOptions, RecursivePartial } from "react-tsparticles";
import { ParticleBackgroundWrapper } from "./ParticleStyles";

const PARTICLE_OPTIONS: RecursivePartial<IOptions> = {
  fpsLimit: 60,
  particles: {
    color: {
      value: "#297c67",
    },
    links: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 0.7,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 70,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
};

const ParticleBackground = () => {
  return (
    <ParticleBackgroundWrapper>
      <Particles style={{ height: "100%" }} options={PARTICLE_OPTIONS} />
    </ParticleBackgroundWrapper>
  );
};

export default ParticleBackground;

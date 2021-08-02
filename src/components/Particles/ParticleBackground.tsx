import React from "react";
import Particles, { IOptions, RecursivePartial } from "react-tsparticles";
import { ParticleBackgroundWrapper } from "./ParticleStyles";

const PARTICLE_OPTIONS: RecursivePartial<IOptions> = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#333333",
    },
    links: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 20.2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 50,
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

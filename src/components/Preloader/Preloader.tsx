import React, { useEffect, useRef, useState } from "react";
import { PreloaderDiv } from "./PreloaderStyles";

const TIMED_REVEAL_DELAY = 3000;

interface PreloaderProps {
  clearPreloader: () => void;
}

/**
 * Represents a preloader component for pages on the site.
 * NOTE: At the moment, this runs off of time, not dynamic loading.
 */
const Preloader: React.FC<PreloaderProps> = ({ clearPreloader }) => {
  const interval = useRef<number | undefined>(undefined);

  useEffect(() => {
    interval.current = window.setInterval(clearPreloader, TIMED_REVEAL_DELAY);

    return () => window.clearInterval(interval.current);
  }, []);

  return (
    <PreloaderDiv>
      <h1>Hi there.</h1>
    </PreloaderDiv>
  );
};

export default Preloader;

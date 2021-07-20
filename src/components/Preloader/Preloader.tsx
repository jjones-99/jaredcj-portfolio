import React, { useEffect, useRef, useState } from "react";
import { PreloaderDiv } from "./PreloaderStyles";

const TIMED_REVEAL_DELAY = 3000;

interface PreloaderProps {
  clearPreloader: () => void;
}

const Preloader: React.FC<PreloaderProps> = (props) => {
  const interval = useRef<number | undefined>(undefined);

  useEffect(() => {
    interval.current = window.setInterval(props.clearPreloader, TIMED_REVEAL_DELAY);

    return () => window.clearInterval(interval.current);
  }, []);

  return (
    <PreloaderDiv>
      <h1>Hi there.</h1>
    </PreloaderDiv>
  );
};

export default Preloader;

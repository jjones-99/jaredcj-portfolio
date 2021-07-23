import React, { useEffect, useRef, useState } from "react";
import { BarL, BarM, BarS, ObjectFullSizeWrapper, ObjectWrapper } from "./FloatingObjectsStyles";
import gsap from "gsap";

interface Position {
  x?: number;
  y?: number;
}

const FloatingObjects = () => {
  const [mouse, setMouse] = useState<Position>({
    x: undefined,
    y: undefined,
  });
  const wrapperElement = useRef(null);

  useEffect(() => {
    document.addEventListener("pointermove", (event) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    });
  }, []);

  useEffect(() => {
    if (!wrapperElement.current) return;
    gsap.to(wrapperElement.current, { x: mouse.x, y: mouse.y, stagger: -0.1 });
  }, [mouse]);

  return (
    <ObjectFullSizeWrapper>
      <ObjectWrapper ref={wrapperElement}>
        <BarL />
        <BarM />
        <BarS />
      </ObjectWrapper>
    </ObjectFullSizeWrapper>
  );
};

export default FloatingObjects;

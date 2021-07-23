import React, { useEffect, useRef, useState } from "react";
import { Bar, ObjectFullSizeWrapper, ObjectWrapper } from "./FloatingObjectsStyles";
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
  const animateElements: gsap.TweenTarget[] = [];

  // On mount, set up listeners.
  useEffect(() => {
    document.addEventListener("pointermove", (event) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    });
  }, []);

  // When the mouse position changes, animate our shapes.
  useEffect(() => {
    if (!wrapperElement.current) return;
    gsap.to(animateElements, { x: mouse.x, stagger: -0.05 });
  }, [mouse]);

  return (
    <ObjectFullSizeWrapper>
      <ObjectWrapper ref={wrapperElement}>
        <Bar width={'18rem'} color={"GoldenRod"} ref={(el) => (animateElements[0] = el)} />
        <Bar width={'14rem'} color={"DodgerBlue"} ref={(el) => (animateElements[1] = el)} />
        <Bar width={'8rem'} color={"DarkRed"} ref={(el) => (animateElements[2] = el)} />
      </ObjectWrapper>
    </ObjectFullSizeWrapper>
  );
};

export default FloatingObjects;

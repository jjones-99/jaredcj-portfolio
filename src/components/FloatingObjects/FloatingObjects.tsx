import React, { useEffect, useRef, useState } from "react";
import { Bar, ObjectFullSizeWrapper, ObjectWrapper } from "./FloatingObjectsStyles";
import gsap from "gsap";

interface Position {
  x?: number;
  y?: number;
}

const FloatingObjects: React.FC = ({ children }) => {
  const [mouse, setMouse] = useState<Position>({
    x: undefined,
    y: undefined,
  });
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
    if (!animateElements) return;
    gsap.to(animateElements, { x: mouse.x, y: mouse.y, stagger: -0.05 });
  }, [mouse]);

  // Add the ref prop to all of the children, which we use to animate them.
  const childrenWithRefProp = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child, {
      ref: (el: HTMLElement | null) => void animateElements.push(el),
    });
  });

  return (
    <ObjectFullSizeWrapper>
      <ObjectWrapper>{childrenWithRefProp}</ObjectWrapper>
    </ObjectFullSizeWrapper>
  );
};

export default FloatingObjects;

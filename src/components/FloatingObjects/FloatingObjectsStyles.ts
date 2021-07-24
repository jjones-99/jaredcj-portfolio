import styled from "styled-components";

export const ObjectFullSizeWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
`;

export const ObjectWrapper = styled.div`
  position: relative;
  height: 200vh;
`;

interface BarProps {
  width: string;
  color: string;
}
export const Bar = styled.div<BarProps>`
  position: fixed;
  will-change: transform;
  z-index: -1;

  height: 200vh; // Always full height wherever the mouse is.
  width: ${({ width }) => width};
  margin: -100vh 0 0 calc(${({ width }) => width} / -2);
  background-color: ${({ color }) => color};
`;

interface CircleProps {
  radius: string;
  color: string;
}
export const Circle = styled.div<CircleProps>`
  position: fixed;
  will-change: transform;
  z-index: -1;

  width: ${({ radius }) => radius};
  height: ${({ radius }) => radius};
  border-radius: 50%;
  margin: calc(${({ radius }) => radius} / -2) 0 0 calc(${({ radius }) => radius} / -2);
  background-color: ${({ color }) => color};
`;

import styled from "styled-components";

export const ObjectFullSizeWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
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
  top: 0;
  bottom: 0;
  will-change: transform;

  width: ${({ width }) => width};
  margin: 0 0 0 calc(${({width}) => width} / -2);
  background-color: ${({ color }) => color};
`;

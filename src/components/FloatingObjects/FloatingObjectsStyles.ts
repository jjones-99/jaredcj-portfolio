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
  height: 100%;
`;

export const BarS = styled.div`
  position: absolute;
  will-change: transform;
  height: 100%;
  width: 3rem;
  background-color: DarkRed;
`;

export const BarM = styled.div`
  position: absolute;
  will-change: transform;
  height: 100%;
  width: 6rem;
  background-color: DodgerBlue;
`;

export const BarL = styled.div`
  position: absolute;
  will-change: transform;
  height: 100%;
  width: 8rem;
  background-color: GoldenRod;
`;

import React from "react";
import { BarL, BarM, BarS, ObjectFullSizeWrapper, ObjectWrapper } from "./FloatingObjectsStyles";

const FloatingObjects = () => {
  return (
    <ObjectFullSizeWrapper>
      <ObjectWrapper>
        <BarL />
        <BarM />
        <BarS />
      </ObjectWrapper>
    </ObjectFullSizeWrapper>
  );
};

export default FloatingObjects;

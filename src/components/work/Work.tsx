import React from "react";
import { WorkContainer } from "./WorkStyles";
import { WORK_ITEMS } from "./WorkItems";
import WorkCard from "./WorkItem";

/**
 * Represents the work section of the portfolio.
 * @returns The component.
 */
const Work = () => {
  return (
    <WorkContainer>
      {WORK_ITEMS.map((item) => (
        <WorkCard workItem={item} key={item.title} />
      ))}
    </WorkContainer>
  );
};

export default Work;

import React from "react";
import {
  ContentContainer,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "../../styles/AppStyles";
import WorkCard from "./WorkCard";
import { WORK_ITEMS } from "../../models/WorkItems";
import { WorkCardGrid, WorkContainer } from "./WorkStyles";

/**
 * Represents the work section of the portfolio.
 */
const Work = () => {
  return (
    <WorkContainer id="work" className="hide-on-hoverless">
      <SectionHeader>
        <SectionSubtitle>Projects</SectionSubtitle>
        <SectionTitle>Recent Work</SectionTitle>
      </SectionHeader>
      <WorkCardGrid>
        {WORK_ITEMS.map((item) => (
          <WorkCard item={item} key={item.title} />
        ))}
      </WorkCardGrid>
    </WorkContainer>
  );
};

export default Work;

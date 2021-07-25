import React from "react";
import { WorkCardList, WorkCardListItem, WorkContainer } from "./WorkStyles";
import { WORK_ITEMS } from "./WorkItems";
import WorkCard from "./WorkCard";
import { ContentContainer, SectionTitle, SectionSubtitle, SectionHeader } from "../../AppStyles";

/**
 * Represents the work section of the portfolio.
 */
const Work = () => {
  return (
    <WorkContainer id="work">
      <ContentContainer>
        <SectionHeader>
          <SectionSubtitle>Projects</SectionSubtitle>
          <SectionTitle>Recent Work</SectionTitle>
        </SectionHeader>
        <WorkCardList>
          {WORK_ITEMS.map((item) => (
            <WorkCardListItem key={item.title}>
              <WorkCard item={item} />
            </WorkCardListItem>
          ))}
        </WorkCardList>
      </ContentContainer>
    </WorkContainer>
  );
};

export default Work;

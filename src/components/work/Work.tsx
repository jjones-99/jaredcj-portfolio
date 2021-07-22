import React from "react";
import { WorkCardList, WorkCardListItem, WorkContainer } from "./WorkStyles";
import { WORK_ITEMS } from "./WorkItems";
import WorkCard from "./WorkCard";
import { ContentContainer } from "../../AppStyles";

/**
 * Represents the work section of the portfolio.
 * @returns The component.
 */
const Work = () => {
  return (
    <WorkContainer>
      <ContentContainer>
        {/* TODO: Header */}
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

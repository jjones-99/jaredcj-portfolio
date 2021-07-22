import React from "react";
import { WorkItem } from "./WorkItems";
import {
  WorkCardBody,
  WorkCardButton,
  WorkCardContainer,
  WorkCardContent,
  WorkCardCorner,
  WorkCardHeader,
  WorkCardMask,
  WorkCardTitle,
} from "./WorkStyles";

export interface WorkCardProps {
  // The item to display.
  item: WorkItem;
}

/**
 * Represents the display for a single item of work.
 * Renders as a card.
 */
const WorkCard: React.FC<WorkCardProps> = ({ item }) => {
  return (
    <WorkCardContainer imageSrc={item.thumbnailSrc}>
      <WorkCardMask />
      <WorkCardCorner>{item.time}</WorkCardCorner>
      <WorkCardContent>
        <WorkCardHeader>
          <WorkCardTitle>{item.title}</WorkCardTitle>
        </WorkCardHeader>
        <WorkCardBody>{item.hook}</WorkCardBody>
        <WorkCardButton>Read More</WorkCardButton>
      </WorkCardContent>
    </WorkCardContainer>
  );
};

export default WorkCard;

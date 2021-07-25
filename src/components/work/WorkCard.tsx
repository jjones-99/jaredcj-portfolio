import React, { useState } from "react";
import { WorkItem } from "./WorkItems";
import {
  WorkCardBackBody,
  WorkCardBackClose,
  WorkCardBackHeader,
  WorkCardBackTitle,
  WorkCardBody,
  WorkCardButton,
  WorkCardContainer,
  WorkCardContent,
  WorkCardCorner,
  WorkCardHeader,
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
  const [showFront, setShowFront] = useState(false);

  return (
    <WorkCardContainer imageSrc={showFront ? item.thumbnailSrc : ""} autoHeight={!showFront}>
      {showFront && (
        <>
          <WorkCardCorner>{item.time}</WorkCardCorner>
          <WorkCardContent alignX="flex-end" alignY="flex-end">
            <WorkCardHeader>
              <WorkCardTitle>{item.title}</WorkCardTitle>
            </WorkCardHeader>
            <WorkCardBody>{item.hook}</WorkCardBody>
            <WorkCardButton onClick={() => setShowFront(false)}>Read More</WorkCardButton>
          </WorkCardContent>
        </>
      )}
      {!showFront && (
        <>
          <WorkCardContent alignX="flex-start" alignY="flex-start">
            <WorkCardBackHeader>
              <WorkCardBackTitle>{item.title}</WorkCardBackTitle>
              <WorkCardBackClose onClick={() => setShowFront(true)}>
                <i className="fa fa-close"></i>
              </WorkCardBackClose>
            </WorkCardBackHeader>
            <WorkCardBackBody>{item.summary}</WorkCardBackBody>
          </WorkCardContent>
        </>
      )}
    </WorkCardContainer>
  );
};

export default WorkCard;

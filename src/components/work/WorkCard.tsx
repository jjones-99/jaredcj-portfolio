import React, { useEffect, useState } from "react";
import { setOverlayOpacity, toggleBodyScrolling } from "../../utils/helpers";
import { WorkItem } from "./WorkItems";
import {
  WorkDetailsBody,
  WorkDetailsClose,
  WorkDetailsHeader,
  WorkDetailsTitle,
  WorkCardBody,
  WorkCardButton,
  WorkCardContainer,
  WorkCardContent,
  WorkCardCorner,
  WorkCardHeader,
  WorkCardTitle,
  WorkDetailsCard,
  WorkCardLink,
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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    toggleBodyScrolling(!showModal);
    setOverlayOpacity(showModal ? "50%" : "0");
  }, [showModal]);

  const moreDetails = (
    <WorkDetailsCard className="">
      <WorkDetailsHeader>
        <WorkDetailsTitle>{item.title}</WorkDetailsTitle>
        <WorkDetailsClose onClick={() => setShowModal(false)}>
          <i className="fa fa-close"></i>
        </WorkDetailsClose>
      </WorkDetailsHeader>
      <WorkDetailsBody>{item.summary}</WorkDetailsBody>
    </WorkDetailsCard>
  );

  const buttonOption = item.buttonLink ? (
    <WorkCardLink href={item.buttonLink} target="_blank" rel="no-referrer">
      Visit Website
    </WorkCardLink>
  ) : (
    <WorkCardButton onClick={() => setShowModal(true)}>Read More</WorkCardButton>
  );

  return (
    <>
      <WorkCardContainer imageSrc={item.thumbnailSrc}>
        <WorkCardContent>
          {/* <WorkCardHeader>
            {item.time}
            <WorkCardTitle>{item.title}</WorkCardTitle>
          </WorkCardHeader> */}
          <WorkCardBody>{item.hook}</WorkCardBody>
          {buttonOption}
        </WorkCardContent>
      </WorkCardContainer>
      {showModal && moreDetails}
    </>
  );
};

export default WorkCard;

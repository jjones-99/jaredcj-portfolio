import React, { useEffect, useState } from "react";
import { IconButton, PrimaryButton, PrimaryButtonLink } from "../../styles/AppStyles";
import { setOverlayOpacity, toggleBodyScrolling } from "../../utils/helpers";
import { WorkItem } from "../../models/WorkItems";
import {
  WorkCardBody,
  WorkCardContainer,
  WorkCardContent,
  WorkDetailsBody,
  WorkDetailsCard,
  WorkDetailsHeader,
  WorkDetailsTitle,
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
        <IconButton onClick={() => setShowModal(false)}>
          <i className="fa fa-close"></i>
        </IconButton>
      </WorkDetailsHeader>
      <WorkDetailsBody>{item.summary}</WorkDetailsBody>
    </WorkDetailsCard>
  );

  const buttonOption = item.buttonLink ? (
    <PrimaryButtonLink light={true} href={item.buttonLink} target="_blank" rel="no-referrer">
      Visit Website
    </PrimaryButtonLink>
  ) : (
    <PrimaryButton light={true} onClick={() => setShowModal(true)}>
      Read More
    </PrimaryButton>
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

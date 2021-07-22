import React from "react";
import { WorkItem } from "./WorkItems";

export interface WorkCardProps {
  // The item to display.
  workItem: WorkItem;
}

/**
 * Represents the display for a single item of work.
 * Renders as a card.
 *
 * @param props The properties for the component.
 * @returns The component.
 */
const WorkCard: React.FC<WorkCardProps> = (props) => {
  const item = props.workItem;
  return <div>{item.title}</div>;
};

export default WorkCard;

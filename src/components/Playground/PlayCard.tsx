import React from "react";
import Tilt from "react-tilt";
import {
  PlaygroundCard,
  PlaygroundCardBackgroundMask,
  PlaygroundCardHeader,
  PlaygroundCardLink,
  PlaygroundCardLinks,
  PlaygroundCardTitle,
} from "./PlaygroundStyles";
import { PlayItem } from "./PlayItems";

export interface PlayCardProps {
  // The item to display.
  item: PlayItem;
}

/**
 * Represents the display for a single play item.
 */
const PlayCard: React.FC<PlayCardProps> = ({ item }) => {
  return (
    <Tilt options={{ scale: 1.1 }}>
      <PlaygroundCard imageSrc={item.thumbnailSrc}>
        <PlaygroundCardBackgroundMask />
        <PlaygroundCardHeader>
          <PlaygroundCardTitle>{item.title}</PlaygroundCardTitle>
        </PlaygroundCardHeader>
        <PlaygroundCardLinks>
          {item.codepenLink && (
            <PlaygroundCardLink>
              <a href={item.codepenLink} target="_blank" rel="noreferrer">{<i className="fab fa-codepen"></i>}</a>
            </PlaygroundCardLink>
          )}
          {item.githubLink && (
            <PlaygroundCardLink>
              <a href={item.githubLink} target="_blank" rel="noreferrer">{<i className="fab fa-github"></i>}</a>
            </PlaygroundCardLink>
          )}
        </PlaygroundCardLinks>
      </PlaygroundCard>
    </Tilt>
  );
};

export default PlayCard;

import React, { useEffect, useState } from "react";
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

const hoverMediaQuery = window.matchMedia("(hover: hover)");

export interface PlayCardProps {
  // The item to display.
  item: PlayItem;
}

/**
 * Represents the display for a single play item.
 */
const PlayCard: React.FC<PlayCardProps> = ({ item }) => {
  const [canHover, setCanHover] = useState(hoverMediaQuery.matches);

  useEffect(() => {
    hoverMediaQuery.addEventListener("change", () => {
      setCanHover(hoverMediaQuery.matches);
    });
  }, []);

  const card = (
    <PlaygroundCard imageSrc={item.thumbnailSrc}>
      <PlaygroundCardBackgroundMask />
      <PlaygroundCardHeader>
        <PlaygroundCardTitle>{item.title}</PlaygroundCardTitle>
      </PlaygroundCardHeader>
      <PlaygroundCardLinks>
        {item.codepenLink && (
          <PlaygroundCardLink>
            <a href={item.codepenLink} target="_blank" rel="noreferrer">
              {<i className="fab fa-codepen"></i>}
            </a>
          </PlaygroundCardLink>
        )}
        {item.githubLink && (
          <PlaygroundCardLink>
            <a href={item.githubLink} target="_blank" rel="noreferrer">
              {<i className="fab fa-github"></i>}
            </a>
          </PlaygroundCardLink>
        )}
      </PlaygroundCardLinks>
    </PlaygroundCard>
  );

  return canHover ? <Tilt options={{ scale: 1.1 }}>{card}</Tilt> : card;
};

export default PlayCard;

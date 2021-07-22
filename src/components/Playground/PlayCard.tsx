import React from "react";
import {
  PlaygroundCell,
  PlaygroundCellBody,
  PlaygroundCellContent,
  PlaygroundCellHeader,
  PlaygroundCellTitle,
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
    <PlaygroundCell>
      <PlaygroundCellContent>
        <PlaygroundCellHeader>
          <PlaygroundCellTitle>{item.title}</PlaygroundCellTitle>
        </PlaygroundCellHeader>
        <PlaygroundCellBody>{item.description}</PlaygroundCellBody>
      </PlaygroundCellContent>
    </PlaygroundCell>
  );
};

export default PlayCard;

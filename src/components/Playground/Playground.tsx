import React from "react";
import { PlaygroundContainer, PlaygroundGrid } from "./PlaygroundStyles";
import PlayCard from "./PlayCard";
import { PLAY_ITEMS } from "./PlayItems";

/**
 * Represents the playground section of the portfolio.
 * @returns The component.
 */
const Playground = () => {
  return (
    <PlaygroundContainer>
      {/* TODO: Section Header */}
      <PlaygroundGrid>
        {PLAY_ITEMS.map((item) => (
          <PlayCard item={item} key={item.title} />
        ))}
      </PlaygroundGrid>
    </PlaygroundContainer>
  );
};

export default Playground;

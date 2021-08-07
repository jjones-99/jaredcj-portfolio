import React from "react";
import { PlaygroundContainer, PlaygroundGrid } from "./PlaygroundStyles";
import PlayCard from "./PlayCard";
import { PLAY_ITEMS } from "./PlayItems";
import { SectionHeader, SectionSubtitle, SectionTitle } from "../../styles/AppStyles";

/**
 * Represents the playground section of the portfolio.
 * @returns The component.
 */
const Playground = () => {
  return (
    <PlaygroundContainer id="playground" className="hide-on-hoverless">
        <SectionHeader>
          <SectionSubtitle>Playground</SectionSubtitle>
          <SectionTitle>Recent Experiments</SectionTitle>
        </SectionHeader>
      <PlaygroundGrid>
        {PLAY_ITEMS.map((item) => (
          <PlayCard item={item} key={item.title} />
        ))}
      </PlaygroundGrid>
    </PlaygroundContainer>
  );
};

export default Playground;

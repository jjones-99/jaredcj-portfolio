import ProjectCards from "../../assets/experiments/ProjectCards.gif";

/**
 * Defines the information an experiment/playground item should have.
 */
export interface PlayItem {
  title: string;
  time: string;
  thumbnailSrc: string;
  gallerySrcs?: string[];
  tags: string[];
  description: string;
  codepenLink?: string;
  githubLink?: string;
}

/**
 * Data for the Playground section of the portfolio.
 */
export const PLAY_ITEMS: PlayItem[] = [
  {
    title: "Shining Text",
    time: "2021",
    thumbnailSrc: "",
    gallerySrcs: [],
    description: `Learning how to use three.js with textures and shaders.`,
    tags: ["TypeScript", "Vite", "three.js", "shaders"],
    codepenLink: "cpst",
    githubLink: "ghst",

  },
  {
    title: "Icon Field",
    time: "2021",
    thumbnailSrc: "",
    gallerySrcs: [],
    description: `Experimenting with using three.js in React with three dimensions.`,
    tags: ["TypeScript", "React", "three.js"],
    codepenLink: "cpif",
    githubLink: "",
  },
  {
    title: "These Cards",
    time: "2021",
    thumbnailSrc: ProjectCards,
    gallerySrcs: [],
    description: `Experimenting with using three.js in React with three dimensions.`,
    tags: ["TypeScript", "React", "three.js"],
    codepenLink: "https://codepen.io/jaredcj/pen/mdmKdQB",
    githubLink: "",
  },
];

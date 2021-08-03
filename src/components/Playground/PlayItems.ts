import ProjectCardsThumbnail from "../../assets/experiments/ProjectCards.gif";
import ShiningTextThumbnail from "../../assets/experiments/ShiningText.gif";
import FloatingObjectsThumbnail from "../../assets/experiments/FloatingObjects.gif";

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
    thumbnailSrc: ShiningTextThumbnail,
    gallerySrcs: [],
    description: `Learning how to use three.js with textures and shaders.`,
    tags: ["TypeScript", "Vite", "three.js", "shaders"],
    codepenLink: "https://codepen.io/jaredcj/full/ZEKBmMQ",
    githubLink: "https://github.com/jjones-99/shining-text",
  },
  {
    title: "These Cards",
    time: "2021",
    thumbnailSrc: ProjectCardsThumbnail,
    gallerySrcs: [],
    description: `Designing/developing cards with HTML/CSS to represent experiments on my portfolio site.`,
    tags: ["TypeScript", "React", "three.js"],
    codepenLink: "https://codepen.io/jaredcj/full/mdmKdQB",
  },
  {
    title: "Floating Objects",
    time: "2021",
    thumbnailSrc: FloatingObjectsThumbnail,
    gallerySrcs: [],
    description: `A simple method of creating objects that animate and follow the cursor.`,
    tags: ["GSAP"],
    codepenLink: "https://codepen.io/jaredcj/full/KKmBWpb",
  },
  // {
  //   title: "Icon Field",
  //   time: "2021",
  //   thumbnailSrc: "",
  //   gallerySrcs: [],
  //   description: `Experimenting with using three.js in React with three dimensions.`,
  //   tags: ["TypeScript", "React", "three.js"],
  //   codepenLink: "cpif",
  //   githubLink: "",
  // },
];

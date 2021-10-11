/**
 * Defines the information an experiment/playground item should have.
 */
export interface PlayItem {
  /** A title for the item. */
  title: string;
  /** A time or time period for the item. */
  time: string;
  /** A URL to a thumbnail image. */
  thumbnailSrc: string;
  /** URLs to more images. */
  gallerySrcs?: string[];
  /** Some tags describing the item. */
  tags: string[];
  /** A summary of the item. */
  description: string;
  /** A URL for a CodePen project for the item. */
  codepenLink?: string;
  /** A URL for a GitHub repo for the item. */
  githubLink?: string;
}

/**
 * Data for the Playground section of the portfolio.
 */
export const PLAY_ITEMS: PlayItem[] = [
  {
    title: "Shining Text",
    time: "2021",
    thumbnailSrc: "/assets/experiments/ShiningText.gif",
    gallerySrcs: [],
    description: `Learning how to use three.js with textures and shaders.`,
    tags: ["TypeScript", "Vite", "three.js", "shaders"],
    codepenLink: "https://codepen.io/jaredcj/full/ZEKBmMQ",
    githubLink: "https://github.com/jjones-99/shining-text",
  },
  {
    title: "These Cards",
    time: "2021",
    thumbnailSrc: "/assets/experiments/ProjectCards.gif",
    gallerySrcs: [],
    description: `Designing/developing cards with HTML/CSS to represent experiments on my portfolio site.`,
    tags: ["TypeScript", "React", "three.js"],
    codepenLink: "https://codepen.io/jaredcj/full/mdmKdQB",
  },
  {
    title: "Contact Card",
    time: "2021",
    thumbnailSrc: "/assets/experiments/ContactCard.png",
    gallerySrcs: [],
    description: `A glassmorphism contact card created with HTML and CSS.`,
    tags: ["Glassmorphism"],
    codepenLink: "https://codepen.io/jaredcj/full/zYwmeRK",
  },
  {
    title: "Floating Objects",
    time: "2021",
    thumbnailSrc: "/assets/experiments/FloatingObjects.gif",
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

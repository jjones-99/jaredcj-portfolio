interface PlayItem {
  title: string;
  time: string;
  thumbnailSrc: string;
  gallerySrcs?: string[];
  tags: string[];
  description: string;
  demoLink?: string;
  githubLink?: string;
}

const playItems: PlayItem[] = [
  {
    title: "Shining Text",
    time: "2021",
    thumbnailSrc: "",
    gallerySrcs: [],
    description: `Learning how to use three.js with textures and shaders.`,
    tags: ["TypeScript", "Vite", "three.js", "shaders"],
    demoLink: "",
  },
  {
    title: "Icon Field",
    time: "2021",
    thumbnailSrc: "",
    gallerySrcs: [],
    description: `Experimenting with using three.js in React with three dimensions.`,
    tags: ["TypeScript", "React", "three.js"],
    demoLink: "",
  },
];

export default playItems;

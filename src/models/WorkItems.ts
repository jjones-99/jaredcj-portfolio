/**
 * Defines the information a work experience item should have.
 */
export interface WorkItem {
  /** A title for the item. */
  title: string;
  /** The name of the role/position during the item. */
  role: string;
  /** A time or time period for the item. */
  time: string;
  /** A URL to a thumbnail image. */
  thumbnailSrc: string;
  /** URLs to more images. */
  gallerySrcs: string[];
  /** Some tags describing the item. */
  tags: string[];
  /** A short tagline for the item. */
  hook: string;
  /** A more detailed summary of the item. */
  summary: string;
  /** A URL for a live demo. e.g. the company's site, CodePen, etc. */
  demoLink?: string;
  /** A URL for a GitHub repo for the item. */
  githubLink?: string;
  /** The URL that the "more" button should link to. */
  buttonLink?: string;
}

/**
 * Data for the Experience section of the portfolio.
 */
export const WORK_ITEMS: WorkItem[] = [
  {
    title: "Dennis Group",
    role: "Full Stack Developer",
    time: "2020 - Present",
    thumbnailSrc: "/assets/work/SVLogo.png",
    gallerySrcs: [],
    hook: "The #1 food and beverage design-build firm in the US.",
    summary: `Working at Dennis Group was a great experience to self-study a variety of technologies. Our main development was Classic SharePoint Online, building platforms for our CRM, project and contract management, and document sharing, alongside our intranet. I also developed with Modern SharePoint Online, creating SPFx web parts and extensions using TypeScript and React.\n\nThis work was beneficial to our employees in organizing resources, communicating with clients and contractors, and collecting data about contracts and finances.`,
    tags: ["TypeScript", "HTML", "SCSS", "SharePoint", "React", "Node", "Express"],
    buttonLink: "https://www.dennisgroup.com",
  },
  {
    title: "Startup Victoria",
    role: "Digital Content and Community Coordinator",
    time: "2019",
    thumbnailSrc: "/assets/work/DGLogo.png",
    gallerySrcs: [],
    hook: "A Melbourne not-for-profit community focused on founders.",
    summary: `During my internship working at Startup Victoria, I maintained, moderated, and developed new functionality for their community website, while improving the professional quality of the public site. This involved a great deal of fixing bugs in function and style, so it was a great exercise in triage and the Jobs to be Done theory.\n\nI was the only developer in the small team, so I had more responsibility and ownership of the project. There's some of my work on every page. I did front-side work with styles and design as well as back-side work with creating addons to improve the moderation of the content.\n\nBecause I was doing a lot of work on a lot of different sectors—and using technology I hadn't any experience with—it was a great opportunity to take my own time teaching myself more about the tools I had in order to enhance my work.`,
    tags: ["WordPress", "HTML", "PHP", "CSS", "JavaScript"],
    demoLink: "https://startupvictoria.com.au",
    buttonLink: "https://startupvictoria.com.au",
  },
];

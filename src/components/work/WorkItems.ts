import SVThumbnail from "../../assets/work/SVLogo.png";
import DGThumbnail from "../../assets/work/DGLogo.png";

export interface WorkItem {
  title: string;
  time: string;
  thumbnailSrc: string;
  gallerySrcs: string[];
  tags: string[];
  hook: string;
  summary: string;
  demoLink?: string;
  githubLink?: string;
  buttonLink?: string;
}

export const WORK_ITEMS: WorkItem[] = [
  {
    title: "Dennis Group",
    time: "2020 - Present",
    thumbnailSrc: DGThumbnail,
    gallerySrcs: [],
    hook: "The #1 food and beverage design-build firm in the US.",
    summary: `Working at Dennis Group was a great experience to self-study a variety of technologies. Our main development was Classic SharePoint Online, building platforms for our CRM, project and contract management, and document sharing, alongside our intranet. I also developed with Modern SharePoint Online, creating SPFx web parts and extensions using TypeScript and React.\n\nThis work was beneficial to our employees in organizing resources, communicating with clients and contractors, and collecting data about contracts and finances.`,
    tags: ["TypeScript", "HTML", "SCSS", "SharePoint", "React", "Node", "Express"],
    buttonLink: "https://www.dennisgroup.com",
  },
  {
    title: "Startup Victoria",
    time: "2019",
    thumbnailSrc: SVThumbnail,
    gallerySrcs: [],
    hook: "A Melbourne not-for-profit community focused on founders.",
    summary: `During my internship working at Startup Victoria, I maintained, moderated, and developed new functionality for their community website, while improving the professional quality of the public site. This involved a great deal of fixing bugs in function and style, so it was a great exercise in triage and the Jobs to be Done theory.\n\nI was the only developer in the small team, so I had more responsibility and ownership of the project. There's some of my work on every page. I did front-side work with styles and design as well as back-side work with creating addons to improve the moderation of the content.\n\nBecause I was doing a lot of work on a lot of different sectors—and using technology I hadn't any experience with—it was a great opportunity to take my own time teaching myself more about the tools I had in order to enhance my work.`,
    tags: ["WordPress", "HTML", "PHP", "CSS", "JavaScript"],
    demoLink: "https://startupvictoria.com.au",
    buttonLink: "https://startupvictoria.com.au",
  },
];

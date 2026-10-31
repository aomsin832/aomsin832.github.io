import type { StaticImageData } from "next/image";
import templateCover from "../../assets/img/Main.gif";

export type BlogImage = {
  src: StaticImageData;
  alt: string;
  caption?: string;
  position?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  displayDate: string;
  readTime: string;
  category: string;
  intro: string;
  coverImage?: BlogImage;
  sections: Array<{
    heading?: string;
    paragraphs: string[];
    image?: BlogImage;
  }>;
};

const postEntries: BlogPost[] = [
  {
    slug: "template",
    title: "A clean place for the next idea",
    excerpt:
      "A sample post showing the rhythm, typography, and structure of this writing space.",
    date: "2026-10-30",
    displayDate: "October 30, 2026",
    readTime: "2 min read",
    category: "Template",
    intro:
      "This is a working article template. Replace these words with a project note, a field observation, or an idea worth returning to.",
    coverImage: {
      src: templateCover,
      alt: "Animated illustration used on Jirat Nimsombun's original website",
      caption: "A small piece preserved from the original site.",
      position: "center",
    },
    sections: [
      {
        paragraphs: [
          "The opening can establish one clear thought without asking the reader to work too hard. Short paragraphs and generous space keep the page calm, even when the subject is technical.",
          "Use this section for the context: what happened, what changed, or what question kept following you around.",
        ],
      },
      {
        heading: "Give the idea a shape",
        paragraphs: [
          "A subheading creates a useful pause. From here, the post can move through an argument, a lesson from a project, or a set of observations connected by one point of view.",
          "The template is intentionally simple. The writing stays central, while the date, category, and reading time give readers just enough orientation.",
        ],
      },
      {
        heading: "End with what remains",
        paragraphs: [
          "A strong ending does not need to summarize everything. It can leave one practical takeaway, one unresolved question, or a small invitation to look at the problem differently.",
        ],
      },
    ],
  },
];

// ISO dates sort correctly as strings. Keep the newest post first everywhere
// without requiring authors to place entries in a particular file order.
export const posts = [...postEntries].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

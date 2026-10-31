import type { StaticImageData } from "next/image";

export type BlogImage = {
  src: StaticImageData;
  alt: string;
  caption?: string;
  position?: string;
};

export type BlogTextSegment = {
  text: string;
  emphasis?: "strong" | "italic";
  reveal?: string;
};

export type BlogParagraph =
  | string
  | {
      segments: BlogTextSegment[];
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
  listed?: boolean;
  coverImage?: BlogImage;
  sections: Array<{
    heading?: string;
    paragraphs: BlogParagraph[];
    image?: BlogImage;
  }>;
  poem?: string[];
  closing?: {
    title: string;
    subtitle: string;
  };
  disclaimer?: string;
};

const postEntries: BlogPost[] = [
  {
    slug: "international-scholarships-at-ubc",
    title: "International Scholarships at UBC",
    excerpt:
      "A forthcoming guide to IMES, OIS, and navigating UBC as an international student.",
    date: "2026-10-30",
    displayDate: "Coming soon",
    readTime: "Preview",
    category: "Scholarships",
    intro: "A personal guide is on the way.",
    sections: [
      {
        paragraphs: [
          "I’m writing about my experience with UBC’s International Major Entrance Scholarship (IMES) and Outstanding International Student (OIS) Award — what they are, how the process felt, and what I wish I had known. The full piece is coming soon.",
        ],
      },
    ],
  },
  {
    slug: "moong",
    title: "The Priory of the มุ่ง",
    excerpt:
      "An affectionate satire about ambition, football, romance, and the latest fitness era.",
    date: "2026-10-30",
    displayDate: "October 30, 2026",
    readTime: "3 min read",
    category: "Satire",
    intro: "Oh Moong, Oh Moong.",
    listed: false,
    sections: [
      {
        paragraphs: [
          "Some men are born great. Some achieve greatness. And some transfer from Langara to UBC and immediately start acting like they founded Sauder.",
          {
            segments: [
              { text: "Meet " },
              { text: "Mark Rajanond", emphasis: "strong" },
              { text: ", better known as " },
              { text: "Moong (มุ่ง)", emphasis: "strong" },
              {
                text: " — a Vajiravudh College alumnus, Sauder businessman, part-time employment enthusiast, and full-time victim of his own decisions.",
              },
            ],
          },
          "His résumé reads like a Vancouver food tour: McDonald's, Kinton Ramen, Taste of Thai, Big Way Hot Pot. A man who has worked in seemingly every restaurant in the Lower Mainland, yet whose bank account remains an unsolved economic mystery.",
          "But Moong is not merely a businessman. He is an athlete.",
        ],
      },
      {
        paragraphs: [
          "A footballing prodigy, according to himself. A self-proclaimed GOAT who once promised a hat-trick in the final, only to come off the bench and receive a red card.",
          "Three goals promised. Zero delivered. One early shower.",
        ],
        heading: "A historic conversion rate.",
      },
      {
        heading: "And then, there is love.",
        paragraphs: [
          {
            segments: [
              { text: "Moong maintains a " },
              {
                text: "hit list",
                reveal: "E P F P A I P N S P",
              },
              {
                text: " longer than his employment history. An ambitious romantic portfolio, diversified across multiple prospects, with one recurring problem: zero executed transactions.",
              },
            ],
          },
          {
            segments: [
              { text: "At Sauder, they call this " },
              { text: "analysis paralysis.", emphasis: "italic" },
            ],
          },
          {
            segments: [
              { text: "In football, they call it " },
              { text: "not shooting.", emphasis: "italic" },
            ],
          },
          {
            segments: [
              { text: "In the Priory, we simply call it " },
              { text: "Moong.", emphasis: "strong" },
            ],
          },
        ],
      },
      {
        heading: "The Fitness Era.",
        paragraphs: [
          "Now, a new chapter begins.",
          "The man who once chased parlays now chases personal records. The man who could not shoot his shot now attempts to shoot for abs. Whether this transformation will produce a six-pack or merely another unfinished project remains under investigation.",
        ],
      },
      {
        heading: "And so we pray.",
        paragraphs: [],
      },
    ],
    poem: [
      "Oh Moong, Oh Moong.",
      "",
      "The odds are long, the rizz is low,",
      "The hat-trick promised, the red card shown.",
      "From Langara's halls to Sauder's throne,",
      "So many shifts, yet funds unknown.",
      "",
      "His crushes wait, his parlays fall,",
      "His gym arc rises above it all.",
      "One day he'll score, one day he'll bloom,",
      "Until that day — God save the Moong.",
    ],
    closing: {
      title: "The Priory of the มุ่ง",
      subtitle: "Established in honour of potential. Not performance.",
    },
    disclaimer:
      "A work of affectionate satire. All allegations of GOAT status remain unverified. Gambling references are fictionalized for comedic effect.",
  },
];

// ISO dates sort correctly as strings. Keep the newest post first everywhere
// without requiring authors to place entries in a particular file order.
export const allPosts = [...postEntries].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const posts = allPosts.filter((post) => post.listed !== false);

export function getPost(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}

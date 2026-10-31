import type { StaticImageData } from "next/image";
import galaPhoto from "../../public/scholarship-gala.jpg";

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
  href?: string;
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
    "slug": "international-scholarships-at-ubc",
    "title": "UBC Scholarships for International Students: IMES, OIS, and My Experience",
    "excerpt": "My experience with IMES, OIS, and choosing a scholarship pathway at UBC.",
    "date": "2026-10-30",
    "displayDate": "October 30, 2026",
    "readTime": "7 min read",
    "category": "Scholarships",
    "intro": "On scholarships, community, and the choices international students face.",
    "sections": [
      {
        "paragraphs": [
          {
            "segments": [
              {
                "text": "In November 2022, when I was applying to UBC Engineering, my high school counsellor gave me a rather unusual piece of advice: "
              },
              {
                "text": "don't apply for one of UBC's most prestigious international scholarship programs.",
                "emphasis": "strong"
              }
            ]
          },
          "Sounds a little counterintuitive, doesn't it?",
          "Fast forward a few months, and I ended up receiving CAD $100,000 in scholarships from UBC. Looking back, that conversation might have been one of the most important pieces of advice I've ever received.",
          {
            "segments": [
              {
                "text": "The scholarship in question was UBC's "
              },
              {
                "text": "International Scholars Program",
                "emphasis": "strong",
                "href": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-scholars"
              },
              {
                "text": ". My counsellor advised me not to seek a nomination or apply for it, and instead to take my chances with the university's merit-based entrance scholarships: the "
              },
              {
                "text": "International Major Entrance Scholarship (IMES)",
                "href": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-entrance-scholarships/"
              },
              { "text": " and " },
              {
                "text": "Outstanding International Student (OIS) Award",
                "href": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-entrance-scholarships/"
              },
              { "text": "."
              }
            ]
          },
          "And there's actually a pretty important reason why."
        ]
      },
      {
        "heading": "So, What Are IMES and OIS?",
        "paragraphs": [
          {
            "segments": [
              {
                "text": "As some of you may know, the "
              },
              {
                "text": "International Major Entrance Scholarship (IMES)",
                "emphasis": "strong",
                "href": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-entrance-scholarships/"
              },
              {
                "text": " is a renewable, merit-based scholarship awarded to, in "
              },
              {
                "text": "UBC's own words",
                "href": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-entrance-scholarships/"
              },
              {
                "text": ", \"exceptional international students entering undergraduate programs at UBC.\" It can be renewed for up to three additional years. Alongside IMES, UBC also offers the "
              },
              {
                "text": "Outstanding International Student (OIS) Award",
                "emphasis": "strong",
                "href": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-entrance-scholarships/"
              },
              {
                "text": ", a one-time merit-based entrance scholarship."
              }
            ]
          },
          "The interesting thing about both awards is that there's no separate scholarship application. You're automatically considered when you apply to UBC, provided you meet the eligibility requirements.",
          {
            "segments": [
              {
                "text": "According to a "
              },
              {
                "text": "2023 article by The Ubyssey",
                "href": "https://ubyssey.ca/news/decoding-ubcs-international-major-entrance-scholarship/"
              },
              {
                "text": ", the IMES selection process is tied closely to regular undergraduate admissions. UBC's International Student Initiative executive director at the time, Damara Klaassen, explained:"
              }
            ]
          },
          "\"There's no weighting beyond what happens as part of the admissions consideration in general.\"",
          "Essentially, your grades, extracurricular involvement, and Personal Profile are already doing much of the work.",
          {
            "segments": [
              {
                "text": "I eventually received both IMES and OIS, worth a combined "
              },
              {
                "text": "CAD $100,000",
                "emphasis": "strong"
              },
              {
                "text": "."
              }
            ]
          }
        ]
      },
      {
        "heading": "International Scholars vs. IMES and OIS",
        "paragraphs": [
          "Now, back to my counsellor's advice.",
          {
            "segments": [
              {
                "text": "UBC's International Scholars Program",
                "href": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-scholars"
              },
              {
                "text": " is a different scholarship pathway altogether. Unlike IMES and OIS, which are merit-based, International Scholars considers both merit and significant financial need. Applicants need a nomination, a separate application, and evidence of their financial circumstances."
              }
            ]
          },
          {
            "segments": [
              {
                "text": "There are several awards under this program, including the "
              },
              {
                "text": "Karen McKellin International Leader of Tomorrow (KMILOT) Award",
                "emphasis": "strong"
              },
              {
                "text": ", which recognizes outstanding academic achievement, leadership, and community involvement, and the "
              },
              {
                "text": "Donald A. Wehrung International Student Award",
                "emphasis": "strong"
              },
              {
                "text": ", intended for students from impoverished or war-torn regions who have achieved academic excellence despite difficult circumstances."
              }
            ]
          },
          {
            "segments": [
              {
                "text": "These awards are extremely competitive. According to "
              },
              {
                "text": "UBC's 2023–24 Student Financial Support Report",
                "href": "https://bog3.sites.olt.ubc.ca/files/2024/06/4_2024.06_Student-Financial-Support-2023-2024-Annual-Report.pdf"
              },
              {
                "text": ", just 22 new International Scholars joined across both campuses that year, including 19 in Vancouver."
              }
            ]
          },
          {
            "segments": [
              {
                "text": "Here's the catch: "
              },
              {
                "text": "if you apply to the International Scholars Program, you won't be considered for IMES or OIS.",
                "emphasis": "strong"
              },
              {
                "text": " That makes the decision about which scholarship pathway to pursue rather important."
              }
            ]
          },
          "In my case, following my counsellor's advice worked out incredibly well. Of course, that's not to say it would be the right decision for everyone."
        ]
      },
      {
        "heading": "More Than Just the Money",
        "paragraphs": [
          "One thing I don't think gets mentioned enough is the community that comes with these scholarships.",
          "During my first year, I had the opportunity to attend a scholarship gala for award recipients, where I met some incredibly accomplished students. There were International Scholars, Loran Scholars, Presidential Scholars, Schulich Leaders, and recipients of other prestigious awards.",
          "These were some of the most impressive people I'd met, with experiences and achievements from all over the world. What started as an opportunity to meet other scholarship recipients eventually turned into actual friendships, some of which I've maintained throughout university."
        ],
        "image": {
          "src": galaPhoto,
          "alt": "A group of scholarship recipients at a UBC gala",
          "caption": "First-year scholarship gala."
        }
      },
      {
        "paragraphs": [
          "Beyond the financial support and prestige, UBC also organized events for scholarship recipients. There were study breakfasts during finals, where we could get together with other scholars, as well as termly pizza-and-games gatherings.",
          "Unfortunately, the pizza-and-games events were eventually cancelled due to low turnout. Which is a shame, because free pizza is usually a pretty good incentive to get university students to show up.",
          "Still, these events gave me the opportunity to connect with students I probably wouldn't otherwise have met."
        ]
      },
      {
        "heading": "A Little Rant About Tuition",
        "paragraphs": [
          "Don't get me wrong. I'm incredibly grateful for the scholarships, and CAD $100,000 is by no means a small amount of money.",
          "But there's something worth mentioning about how far that money actually goes.",
          "As many of you probably know, Engineering and Commerce at Sauder are among the more expensive undergraduate degrees at UBC for international students.",
          {
            "segments": [
              {
                "text": "The problem is that "
              },
              {
                "text": "the value of IMES doesn't necessarily scale with the tuition fees of your faculty",
                "emphasis": "strong"
              },
              {
                "text": "."
              }
            ]
          },
          "For students in Arts or Science, an annual IMES of $20,000 could cover a substantial portion of their tuition, depending on the year and course load. For me, studying Engineering, the same amount covered roughly a third.",
          "And then there's Sauder.",
          { segments: [
            { text: "From what I understand, some Sauder students may receive an additional renewable faculty-level scholarship alongside their university entrance awards. Sauder publishes a " },
            { text: "Bachelor of Commerce International Entrance Scholarship", href: "https://org-www.sauder.ubc.ca/programs/bachelors-degrees/bachelor-commerce/admissions-finance/fees-financing" },
            { text: " worth up to $20,000 per year, or potentially another $80,000 over four years. I've heard of situations where this effectively doubles an $80,000 scholarship package to $160,000, although I haven't confirmed that such matching is automatic." },
          ] },
          "Engineering, unfortunately, didn't have a comparable match for my award.",
          "So yes, while the scholarship is substantial, the actual percentage of tuition it covers can look very different depending on your program. And that's before even considering the cost of living in Vancouver.",
          "Again, I'm not complaining about receiving $100,000. I just think it's important for prospective students to understand what that amount means in practice."
        ]
      },
      {
        "heading": "My Advice to Prospective Applicants",
        "paragraphs": [
          "So, what would I recommend?",
          {
            "segments": [
              {
                "text": "If you think you're genuinely one of those exceptional applicants, have an outstanding academic and extracurricular record, "
              },
              {
                "text": "and meet the significant financial-need requirements",
                "emphasis": "strong"
              },
              {
                "text": ", then by all means, go for the International Scholars Program. Get nominated, prepare your application, and give it your best shot."
              }
            ]
          },
          "But if you're not sure that's the right pathway for you, or you'd rather take your chances with the merit-based awards like I did, you can simply apply to UBC and be automatically considered for IMES and OIS.",
          "Of course, there's no guarantee you'll receive either. The awards are competitive, and I wouldn't want anyone to interpret my experience as some secret formula for securing a scholarship.",
          "I think my biggest takeaway is that you should understand the different scholarship pathways before making your decision. What worked for me might not work for someone else.",
          {
            "segments": [
              {
                "text": "As for what I actually submitted to UBC, including my grades, extracurricular activities, and Personal Profile, I'll go into much more detail in my next article about "
              },
              {
                "text": "applying to UBC and how I prepared my application",
                "emphasis": "strong"
              },
              {
                "text": "."
              }
            ]
          },
          "For now, I hope this gives you a better idea of how the different scholarships work, and perhaps saves you some confusion along the way."
        ]
      }
    ]
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
          "Fun fact: Moong thinks he's Wasian.",
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

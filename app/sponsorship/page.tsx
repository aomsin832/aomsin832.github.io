import type { Metadata } from "next";
import Link from "next/link";
import SponsorExperience from "./SponsorExperience";
import styles from "./sponsorship.module.css";

const packages = [
  {
    name: "Supporter",
    price: "$150 CAD",
    placement: "One upper-arm placement",
    includes: ["Logo on this page", "Race-week story mention", "Post-race proof photo"],
  },
  {
    name: "Race partner",
    price: "$350 CAD",
    placement: "Chest or thigh placement",
    includes: ["Everything in Supporter", "Training-period feature", "Tagged race recap + selected images"],
  },
  {
    name: "Title partner",
    price: "$750 CAD",
    placement: "Largest approved placement",
    includes: ["Category exclusivity", "Two training mentions", "Race-week feature + 30-day image usage"],
  },
];

const process = [
  ["Choose", "Select a placement and send a transparent PNG or SVG logo."],
  ["Confirm", "We approve the category, sign a one-page agreement, and reserve the spot with 50%."],
  ["Test", "A skin-safe temporary tattoo is printed and tested before race week."],
  ["Deliver", "Race-day proof and the agreed recap are sent within 72 hours after the event."],
];

export const metadata: Metadata = {
  title: "Vancouver Mixed Doubles Sponsorship · Jirat Nimsombun",
  description:
    "Partner with Jirat Nimsombun for a December 17 mixed doubles fitness race in Vancouver.",
  alternates: {
    canonical: "/sponsorship/",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    title: "Race alongside us · Vancouver Mixed Doubles",
    description: "December 17 in Vancouver — explore an independent athlete partnership.",
    url: "/sponsorship/",
    siteName: "Jirat Nimsombun",
    type: "website",
  },
};

export default function SponsorshipPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/" aria-label="Jirat Nimsombun home">
          jirat nimsombun
        </Link>
        <p className={styles.privateNote}>unlisted sponsorship preview</p>
      </header>

      <section className={styles.hero} aria-labelledby="sponsorship-title">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>December 17 · Vancouver · Mixed Doubles</p>
          <h1 id="sponsorship-title">race alongside us.</h1>
          <p className={styles.intro}>
            A small group of partners, carried through the training block and onto race day.
            Choose a placement on the miniature to explore the partnership.
          </p>
        </div>

        <SponsorExperience />
      </section>

      <section className={styles.story} aria-labelledby="partnership-heading">
        <div className={styles.sectionLabel}>
          <span>01</span>
          <h2 id="partnership-heading">the partnership</h2>
        </div>

        <div className={styles.storyGrid}>
          <p className={styles.storyLead}>
            More than a logo on race day: a compact partnership built around the preparation,
            the event, and the honest recap afterward.
          </p>
          <ul className={styles.deliverables}>
            <li><span>01</span> Placement on race kit or body*</li>
            <li><span>02</span> Training-period social mention</li>
            <li><span>03</span> Race-week partner feature</li>
            <li><span>04</span> Post-race recap and selected images</li>
          </ul>
        </div>
        <p className={styles.finePrint}>
          *Physical placements and dimensions are subject to written event and division approval.
          If a tattoo placement is not approved, the sponsor may choose an agreed digital/apparel
          alternative or a refund. This is an independent athlete partnership and is not affiliated
          with or endorsed by HYROX.
        </p>
      </section>

      <section className={styles.packages} aria-labelledby="packages-heading">
        <div className={styles.sectionLabel}>
          <span>02</span>
          <h2 id="packages-heading">starting packages</h2>
        </div>
        <div className={styles.packageIntro}>
          <h2>finite space. clear deliverables.</h2>
          <p>
            Launch pricing for local partners. Each package combines a proposed temporary-tattoo
            placement with content before and after the race—so the value is larger than one logo.
          </p>
        </div>
        <div className={styles.packageGrid}>
          {packages.map((item, index) => (
            <article className={styles.packageCard} key={item.name}>
              <div className={styles.packageTopline}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{item.price}</span>
              </div>
              <h3>{item.name}</h3>
              <p className={styles.packagePlacement}>{item.placement}</p>
              <ul>
                {item.includes.map((line) => <li key={line}>{line}</li>)}
              </ul>
              <a href={`mailto:jiratnim@gmail.com?subject=${encodeURIComponent(`${item.name} sponsorship · December 17 Vancouver`)}`}>
                enquire <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-heading">
        <div className={styles.sectionLabel}>
          <span>03</span>
          <h2 id="process-heading">how it works</h2>
        </div>
        <ol>
          {process.map(([title, detail], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
        <p className={styles.caseStudy}>
          Inspired by the finite-placement format used by Marc Lou for his 2026 HYROX campaign,
          adapted here to realistic local-partner pricing and defined deliverables.
        </p>
      </section>

      <section className={styles.contact} aria-labelledby="contact-heading">
        <div>
          <p className={styles.kicker}>Interested in joining the race?</p>
          <h2 id="contact-heading">let’s find the right placement.</h2>
        </div>
        <a
          className={styles.contactLink}
          href="mailto:jiratnim@gmail.com?subject=December%2017%20Vancouver%20sponsorship"
        >
          start a conversation <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className={styles.footer}>
        <span>Jirat Nimsombun · Vancouver / Bangkok</span>
        <a href="mailto:jiratnim@gmail.com">jiratnim [at] gmail</a>
      </footer>
    </main>
  );
}

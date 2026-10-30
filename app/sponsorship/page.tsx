import type { Metadata } from "next";
import Link from "next/link";
import SponsorExperience from "./SponsorExperience";
import styles from "./sponsorship.module.css";

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
          *Physical placements are subject to event and division approval. This is an independent
          athlete partnership and is not affiliated with or endorsed by HYROX.
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

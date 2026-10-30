import Link from "next/link";

const experience = [
  {
    year: "Winter 2027",
    organization: "KPMG",
    role: "Incoming — Management Consulting, Technology Strategy & Transformation",
  },
  {
    year: "2026",
    organization: "Deloitte",
    role: "Cyber Strategy & Transformation",
  },
  {
    year: "2025",
    organization: "TCC Technology",
    role: "Cybersecurity Project Management",
  },
  {
    year: "2024",
    organization: "JLL",
    role: "Summer Engineering Intern",
  },
];

const projects = [
  "AI-Tracking Blimp",
  "Amazon Robotics Hackathon · 4th Place",
  "Smart Modular Hydroponic Garden",
];

const leadership = [
  {
    organization: "UBC Association of Southeast Asian Clubs",
    role: "Chair, Advisory Board · Former President",
  },
  {
    organization: "UBC Thai Aiyara (Thai SA)",
    role: "Senior Advisor",
  },
  {
    organization: "UBC Thunderbots",
    role: "Sponsorship & Finance",
  },
  {
    organization: "Engineering First Year Council",
    role: "2023",
  },
];

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-heading">
      <span aria-hidden="true">{number}</span>
      <h2>{children}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <header className="identity">
        <div className="identity-main">
          <h1>jirat nimsombun</h1>
          <p className="location">Vancouver / Bangkok</p>
          <p className="aliases" aria-label="Also known as Jarett, Aomsin, and Aom">
            <span aria-hidden="true">jarett / aomsin / aom</span>
          </p>
          <p className="eyebrow">
            Engineering, technology, business &amp; strategy — and everything between.
          </p>

        </div>
      </header>

      <div className="menu-content">
        <nav className="primary-links" aria-label="Primary links">
          <Link href="/blog">notes</Link>
          <span aria-hidden="true">·</span>
          <a href="/Jirat_Nimsombun_CV.pdf">résumé</a>
          <span aria-hidden="true">·</span>
          <a href="https://www.linkedin.com/in/jirat-nimsombun">linkedin</a>
          <span aria-hidden="true">·</span>
          <a href="https://github.com/aomsin832">github</a>
        </nav>

        <section aria-labelledby="education-heading">
          <SectionHeading number="01">
            <span id="education-heading">education</span>
          </SectionHeading>
          <div className="education-entry">
            <span className="row-year">2028</span>
            <span className="row-name">University of British Columbia</span>
            <span className="education-degree">
              BASc Integrated Engineering · Minor in Commerce · Co-op
            </span>
            <span className="row-detail">Computer + Mechanical Engineering focus</span>
            <span className="row-detail">IMES + OIS Scholar</span>
          </div>
        </section>

        <section aria-labelledby="experience-heading">
          <SectionHeading number="02">
            <span id="experience-heading">experience</span>
          </SectionHeading>
          <ol className="menu-list">
            {experience.map((item) => (
              <li key={item.organization} className="menu-row experience-row">
                <span className="row-year">{item.year}</span>
                <span className="row-name">{item.organization}</span>
                <span className="row-detail">{item.role}</span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="leadership-heading">
          <SectionHeading number="03">
            <span id="leadership-heading">leadership & community</span>
          </SectionHeading>
          <ul className="menu-list leadership-list">
            {leadership.map((item) => (
              <li key={item.organization} className="menu-row leadership-row">
                <span className="row-name">{item.organization}</span>
                <span className="row-detail">{item.role}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="projects-heading">
          <SectionHeading number="04">
            <span id="projects-heading">selected work</span>
          </SectionHeading>
          <ul className="menu-list">
            {projects.map((project) => (
              <li key={project} className="menu-row project-row">
                <span className="row-name">{project}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="site-footer">
          <a className="campaign-link" href="/sponsorship">
            HYROX Vancouver · December — support the campaign ↗
          </a>
          <div className="footer-meta">
            <span>© 2026 Jirat Nimsombun</span>
            <span className="footer-separator" aria-hidden="true">·</span>
            <a href="mailto:jiratnim@gmail.com">jiratnim [at] gmail</a>
            <span className="footer-separator" aria-hidden="true">/</span>
            <a href="mailto:jiratnim@student.ubc.ca">student.ubc.ca</a>
          </div>
        </footer>
      </div>
    </main>
  );
}

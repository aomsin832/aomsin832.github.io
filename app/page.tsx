const experience = [
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
    role: "Engineering",
  },
];

const projects = [
  "AI-Tracking Blimp",
  "Smart Modular Hydroponic Garden",
];

const leadership = [
  {
    organization: "UBC Association of Southeast Asian Clubs",
    shortName: "ASEAC",
    role: "Chair, Advisory Board · Former President",
  },
  {
    organization: "UBC Thai Aiyara",
    role: "Chair, Advisory Board · Former Vice President",
  },
  {
    organization: "UBC Thunderbots",
    role: "Sponsorship & Finance",
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
          <p className="eyebrow">Engineering + business, and everything between</p>
          <p className="discipline">engineering · technology · strategy</p>

          <nav className="primary-links" aria-label="Primary links">
            <a href="/Jirat_Nimsombun_CV.pdf">résumé</a>
            <a href="https://www.linkedin.com/in/jirat-nimsombun">linkedin</a>
            <a href="https://github.com/aomsin832">github</a>
          </nav>
        </div>
      </header>

      <div className="menu-content">
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

        <section aria-labelledby="projects-heading">
          <SectionHeading number="03">
            <span id="projects-heading">selected projects</span>
          </SectionHeading>
          <ul className="menu-list">
            {projects.map((project) => (
              <li key={project} className="menu-row project-row">
                <span className="row-name">{project}</span>
                <span className="row-mark" aria-hidden="true">◆</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="leadership-heading">
          <SectionHeading number="04">
            <span id="leadership-heading">leadership & community</span>
          </SectionHeading>
          <ul className="menu-list leadership-list">
            {leadership.map((item) => (
              <li key={item.organization} className="menu-row leadership-row">
                <span className="row-name">
                  {item.organization}
                  {item.shortName ? <small>{item.shortName}</small> : null}
                </span>
                <span className="row-detail">{item.role}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="contact" aria-labelledby="contact-heading">
          <SectionHeading number="05">
            <span id="contact-heading">contact</span>
          </SectionHeading>
          <div className="email-list">
            <a href="mailto:jiratnim@gmail.com">jiratnim@gmail.com</a>
            <a href="mailto:jiratnim@student.ubc.ca">jiratnim@student.ubc.ca</a>
          </div>
          <p className="footer-note">Integrated Engineering + Commerce at UBC</p>
          <div className="footer-meta">
            <span>© 2026 Jirat Nimsombun</span>
            <span>Vancouver · Bangkok</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

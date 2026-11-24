import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronUp,
  Code2,
  Database,
  ExternalLink,
  FileText,
  GraduationCap,
  Github,
  Languages,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Sun,
  X,
} from "lucide-react";
import Hero from "./components/Hero.jsx";
import projectsData from "../portfolio-projects.json";
import skillsData from "../portfolio-skills.json";

const githubProfile = "https://github.com/prakharmadhesiya2620-cloud";
const linkedinProfile = "https://www.linkedin.com/in/prakhar-madhesiya-180a873a3/";
const emailAddress = "prakharmahdesiya2620@gmail.com";
const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
];
const filters = ["All", "Artificial Intelligence", "Machine Learning", "Chatbots", "Data Science", "Other"];
const categoriesById = {
  "multimodal-assistant": ["Artificial Intelligence"],
  "arxiv-cs-chatbot": ["Artificial Intelligence", "Chatbots"],
  "medical-qa-chatbot": ["Artificial Intelligence", "Chatbots"],
  "realtime-fraud-detector": ["Machine Learning", "Data Science"],
  "customer-churn-predictor": ["Machine Learning", "Data Science"],
  "ai-voice-assistant": ["Artificial Intelligence"],
  "customer-service-chatbot": ["Artificial Intelligence", "Chatbots"],
  "trading-bot": ["Other"],
  "my-first-ai-project": ["Other"],
  "numpy-exercises": ["Data Science", "Other"],
};
const certifications = [
  ["JPMorgan Chase", "Quantitative Research Job Simulation"],
  ["Tata", "GenAI Powered Data Analytics Job Simulation"],
  ["Deloitte", "Data Analytics Job Simulation"],
  ["IBM", "Getting Started with Artificial Intelligence"],
  ["IBM", "Artificial Intelligence Fundamentals"],
  ["DeepLearning.AI", "Supervised Machine Learning: Regression and Classification"],
];

const categoryIcons = {
  "Programming Languages": Code2,
  "Web Applications": Network,
  "AI Applications": BrainCircuit,
  "Search and Retrieval": Database,
  "AI Frameworks": BrainCircuit,
  "Machine Learning": BrainCircuit,
  "Data Science": Database,
  "Natural Language Processing": Languages,
  "Data and Numerical Computing": Code2,
  Networking: Network,
  "APIs and Networking": Network,
  "Application Development": Code2,
  "Data Engineering": Database,
  Automation: BriefcaseBusiness,
  "Developer Tools": Code2,
};

function SectionHeading({ eyebrow, title, description, index, headingId }) {
  return (
    <div className="section-heading">
      <div className="section-heading-copy">
        <p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p>
        <h2 className="section-title" id={headingId}>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      <span className="section-index">{index} <span>/</span> 07</span>
    </div>
  );
}

function Reveal({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Header({ theme, onThemeToggle }) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.35] },
    );
    navigation.forEach(([, id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="nav-shell page-shell">
        <a className="brand-mark" href="#home" onClick={closeMenu} aria-label="Prakhar Madhesiya, home">
          <span className="brand-monogram">P<span>M</span></span>
          <span className="brand-caption">PRAKHAR MADHESIYA<i>AI / ML DEVELOPER</i></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a className={`nav-link${activeSection === id ? " is-active" : ""}`} href={`#${id}`} key={id}>
              {label}{activeSection === id && <span className="nav-active-indicator" />}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={onThemeToggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a className="nav-resume" href={`mailto:${emailAddress}?subject=Resume%20request`}>Resume <ArrowUpRight size={13} /></a>
          <button className="mobile-menu-toggle icon-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-nav page-shell" aria-label="Mobile navigation">
          {navigation.map(([label, id]) => (
            <a className={`nav-link${activeSection === id ? " is-active" : ""}`} href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function About() {
  return (
    <section className="section-block about-section" id="about" aria-labelledby="about-title">
      <div className="page-shell">
        <SectionHeading eyebrow="A little about me" title="Beyond the Code." description="A curious builder learning by turning ideas into practical software and AI applications." index="01" headingId="about-title" />
        <div className="about-layout">
          <div className="about-copy">
            <p className="about-lead">I’m Prakhar — an AI & Machine Learning undergraduate who enjoys making technology useful.</p>
            <p className="about-paragraph">I study at Shri Ramswaroop Memorial University in Lucknow. Across personal projects, I’ve explored Python application development, machine learning workflows, data processing, and AI-powered assistants.</p>
            <p className="about-paragraph">I’m currently looking for opportunities to learn, contribute, and grow through AI/ML or software development internships.</p>
            <a className="text-link" href="#projects">Explore selected work <ArrowRight size={15} /></a>
          </div>
          <div className="about-info-grid">
            <InfoCard icon={GraduationCap} label="EDUCATION" title="B.Tech, Artificial Intelligence & Machine Learning" detail="Shri Ramswaroop Memorial University" />
            <InfoCard icon={MapPin} label="BASED IN" title="Lucknow, Uttar Pradesh" detail="India" />
            <InfoCard icon={BrainCircuit} label="INTERESTS" title="AI, machine learning & software" detail="Learning through practical project work" />
          </div>
        </div>
        <div className="about-manifesto"><span className="manifesto-mark">“</span><p>Curiosity into code. Ideas into useful tools.</p><span className="manifesto-caption">BUILD / LEARN / REPEAT</span></div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, label, title, detail }) {
  return (
    <article className="info-card">
      <span className="info-icon"><Icon size={17} /></span>
      <span className="info-label">{label}</span>
      <h3>{title}</h3>
      <p>{detail}</p>
    </article>
  );
}

function Skills() {
  const groups = useMemo(() => {
    const grouped = new Map();
    skillsData.skills.forEach((skill) => {
      if (!grouped.has(skill.category)) grouped.set(skill.category, []);
      grouped.get(skill.category).push(skill);
    });
    return [...grouped.entries()];
  }, []);

  return (
    <section className="section-block skills-section" id="skills" aria-labelledby="skills-title">
      <div className="page-shell">
        <SectionHeading eyebrow="Tools & techniques" title="My Technical Arsenal." description="Technologies and methods present in the inspected project work." index="02" headingId="skills-title" />
        <div className="skills-grid">
          {groups.map(([category, skills]) => {
            const Icon = categoryIcons[category] ?? Code2;
            return (
              <Reveal key={category}>
                <article className="skill-group-card">
                  <div className="skill-group-heading"><span className="skill-group-icon"><Icon size={16} /></span><h3>{category}</h3><span className="skill-count">{String(skills.length).padStart(2, "0")}</span></div>
                  <div className="skill-chip-list">{skills.map((skill) => <span className="skill-chip" title={skill.description} key={skill.id}><i className="skill-chip-dot" />{skill.name}</span>)}</div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getTechnologies(project) {
  const groups = project.technologies ?? {};
  return [...(groups.languages ?? []), ...(groups.frameworks ?? []), ...(groups.libraries ?? []), ...(groups.modelsAndTools ?? [])];
}

function ProjectCard({ project, index }) {
  const technologies = getTechnologies(project);
  const categories = categoriesById[project.id] ?? ["Other"];
  return (
    <Reveal>
      <article className="project-card">
        <div className={`project-visual project-visual-${(index % 5) + 1}`}>
          <div className="project-visual-top"><span className="project-category">{categories[0]}</span><span className="project-rank">RANK {String(project.rank).padStart(2, "0")}</span></div>
          <div className="project-visual-center" aria-hidden="true"><span className="project-visual-orbit" /><BrainCircuit size={34} strokeWidth={1.1} /></div>
          <span className="project-visual-label">{project.repository}</span>
        </div>
        <div className="project-card-content">
          <div className="project-card-meta"><span className="project-category">{project.technicalQuality} · {project.internshipRelevance}</span><span className="project-rank">#{String(project.rank).padStart(2, "0")}</span></div>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tech-list">{technologies.slice(0, 5).map((technology) => <span className="project-tech" key={technology}>{technology}</span>)}</div>
          <details className="project-details">
            <summary>Features & limitations <ArrowRight size={14} /></summary>
            <div className="project-detail-body">
              <p className="detail-label">IMPLEMENTED FEATURES</p>
              <ul>{project.features.slice(0, 5).map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <p className="detail-label">KNOWN LIMITATIONS</p>
              <ul>{project.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul>
            </div>
          </details>
          <a className="project-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">View repository <ExternalLink size={13} /></a>
        </div>
      </article>
    </Reveal>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const filteredProjects = projectsData.projects.filter((project) => filter === "All" || (categoriesById[project.id] ?? ["Other"]).includes(filter));
  return (
    <section className="section-block projects-section" id="projects" aria-labelledby="projects-title">
      <div className="page-shell">
        <SectionHeading eyebrow="Selected project work" title="Things I've Built." description="Project summaries, technologies, and limitations are grounded in the inspected repositories." index="03" headingId="projects-title" />
        <div className="project-controls">
          <div className="filter-list" role="group" aria-label="Filter projects by category">
            {filters.map((item) => <button className={`filter-button${filter === item ? " is-selected" : ""}`} type="button" key={item} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}
          </div>
          <span className="project-result-count">{filteredProjects.length} PROJECT{filteredProjects.length === 1 ? "" : "S"}</span>
        </div>
        <div className="project-grid">{filteredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
        <div className="projects-footer"><p>Ranked by inspected implementation and broad internship relevance; not measured scores.</p><a className="button button-secondary" href={githubProfile} target="_blank" rel="noreferrer">All repositories <Github size={15} /><ArrowUpRight size={13} /></a></div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="section-block certifications-section" id="certifications" aria-labelledby="certifications-title">
      <div className="page-shell">
        <SectionHeading eyebrow="Ongoing learning" title="Learning. Building. Growing." description="Job simulations and learning credentials shared in my professional profile." index="04" headingId="certifications-title" />
        <div className="certification-grid">
          {certifications.map(([issuer, title]) => (
            <article className="certification-card" key={`${issuer}-${title}`}>
              <span className="certification-emblem"><GraduationCap size={19} /></span>
              <div className="certification-copy"><span className="certification-issuer">{issuer}</span><h3>{title}</h3></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section-block education-section" id="education" aria-labelledby="education-title">
      <div className="page-shell">
        <SectionHeading eyebrow="Academic background" title="Education." index="05" headingId="education-title" />
        <article className="education-card">
          <span className="education-mark"><GraduationCap size={22} /></span>
          <div className="education-main"><p className="eyebrow">B.TECH / ARTIFICIAL INTELLIGENCE & MACHINE LEARNING</p><h3>B.Tech in Artificial Intelligence & Machine Learning</h3><p className="education-university">Shri Ramswaroop Memorial University</p><p className="education-location"><MapPin size={14} />Lucknow, Uttar Pradesh, India</p></div>
          <div className="education-side"><span className="education-side-icon"><BrainCircuit size={20} /></span><span>LEARNING<br />IN PROGRESS</span></div>
        </article>
      </div>
    </section>
  );
}

function GitHub() {
  const highlighted = projectsData.projects.slice(0, 3);
  return (
    <section className="section-block github-section" id="github" aria-labelledby="github-title">
      <div className="page-shell">
        <SectionHeading eyebrow="Open source & practice" title="Code. Commit. Repeat." description="Browse the source repositories behind these projects. No unverified activity statistics." index="06" headingId="github-title" />
        <div className="github-profile-card">
          <div className="github-profile-left"><span className="github-profile-icon"><Github size={24} /></span><div><p className="eyebrow">GITHUB PROFILE</p><h3>prakharmadhesiya2620-cloud</h3><p>Project source, experiments, and learning work.</p></div></div>
          <a className="button button-secondary" href={githubProfile} target="_blank" rel="noreferrer">Visit GitHub <ArrowUpRight size={14} /></a>
        </div>
        <div className="github-repository-list">{highlighted.map((project) => <a className="github-repository" href={project.repositoryUrl} target="_blank" rel="noreferrer" key={project.id}><Github size={15} /><span>{project.repository}</span><ArrowUpRight size={13} /></a>)}</div>
        <p className="github-note">Project details and repository links are provided directly from the reviewed project data.</p>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${values.get("name")}`);
    const body = encodeURIComponent(`From: ${values.get("name")} (${values.get("email")})\n\n${values.get("message")}`);
    setStatus("Your email app will open with the message draft. It has not been sent by this website.");
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section-block contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-shell">
        <SectionHeading eyebrow="Start a conversation" title="Let's Build Something Together." description="Interested in an AI/ML internship, software role, or collaboration? Feel free to get in touch." index="07" headingId="contact-title" />
        <div className="contact-layout">
          <div className="contact-copy">
            <div className="contact-callout"><span className="contact-callout-icon"><Mail size={18} /></span><div><span className="contact-label">OPEN TO OPPORTUNITIES</span><h3>Let’s talk about what’s next.</h3></div></div>
            <p>I’m happy to connect about internships, projects, and opportunities to learn and contribute.</p>
            <a className="contact-email" href={`mailto:${emailAddress}`}><Mail size={15} />{emailAddress}<ArrowUpRight size={13} /></a>
            <span className="contact-location"><MapPin size={14} />Lucknow, Uttar Pradesh, India</span>
            <div className="contact-socials"><a href={githubProfile} target="_blank" rel="noreferrer"><Github size={14} />GitHub<ArrowUpRight size={11} /></a><a href={linkedinProfile} target="_blank" rel="noreferrer"><ExternalLink size={13} />LinkedIn<ArrowUpRight size={11} /></a></div>
          </div>
          <div className="contact-form-card">
            <div className="form-heading"><div><span className="contact-label">EMAIL CONTACT</span><h3>Send a message</h3></div><span className="form-shield"><FileText size={17} /></span></div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label className="form-field"><span>Your name</span><input name="name" autoComplete="name" required maxLength={100} placeholder="Name" /></label>
                <label className="form-field"><span>Email address</span><input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
              </div>
              <label className="form-field"><span>Message</span><textarea name="message" required minLength={10} maxLength={4000} placeholder="Tell me a little about your message..." /></label>
              <p className="form-privacy-note">This form opens your email app with a draft; it does not send or store messages.</p>
              <button className="button button-primary form-submit" type="submit">Open email draft <ArrowRight size={15} /></button>
              {status && <p className="form-status" role="status">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === "light" ? "light" : "dark");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem("prakhar-portfolio-theme", theme);
    } catch (error) {
      console.warn("Could not save the selected theme in local storage.", error);
    }
  }, [theme]);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 700);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-background" aria-hidden="true"><span className="background-glow background-glow-one" /><span className="background-glow background-glow-two" /><span className="background-grain" /></div>
      <Header theme={theme} onThemeToggle={() => setTheme((current) => current === "dark" ? "light" : "dark")} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <GitHub />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="footer-inner page-shell">
          <a className="footer-brand" href="#home"><span className="brand-monogram">P<span>M</span></span>Prakhar Madhesiya</a>
          <p>Designed and built with care <span>·</span> {new Date().getFullYear()}</p>
          <a className="back-to-top" href="#home">Back to top <ArrowDown size={13} /></a>
        </div>
      </footer>
      {showTop && <a className="floating-contact" href="#contact"><span className="availability-pulse floating-contact-dot" />LET’S CONNECT <ArrowUpRight size={12} /></a>}
      {showTop && <button className="back-to-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ChevronUp size={17} /></button>}
    </>
  );
}

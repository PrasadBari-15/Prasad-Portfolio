import React from "react";
import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BarChart3, BriefcaseBusiness,
  CheckCircle2, Code2, Database, ExternalLink, FileText, Github,
  GraduationCap, Linkedin, Mail, MapPin, Menu, Send, Sparkles, Terminal, X
} from "lucide-react";
import { skills, projects, certifications, researchPapers } from "./data";

const RESUME_URL = "https://drive.google.com/file/d/1zRz0jFXBfnYn01IzJV8Bn4zxp0JSiIAG/view";
const filters = ["All", "Power BI", "Machine Learning", "Data Engineering", "Full Stack", "Development"];

function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title} <span className="gradient-text">{accent}</span></h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">PB</span><span>prasad<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {[["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Credentials", "#credentials"], ["Research", "#research"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-resume" href={RESUME_URL} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> OPEN TO OPPORTUNITIES</div>
            <p className="hero-intro">HELLO, I'M</p>
            <h1>Prasad<br /><span className="gradient-text">Bari.</span></h1>
            <h2 className="hero-role">Aspiring Data Analyst <span className="role-divider">/</span> Data Enthusiast</h2>
            <p className="hero-description">I turn raw data into meaningful insights using SQL, Python, Power BI, and analytical thinking. I enjoy solving problems, uncovering patterns, and building data-driven solutions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore My Work <ArrowRight size={17} /></a>
              <a className="button button-secondary" href={RESUME_URL} target="_blank" rel="noreferrer">View Resume <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/PrasadBari-15" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
              <a href="https://www.linkedin.com/in/prasadbari15" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
              <a href="mailto:prasadbari1515@gmail.com" aria-label="Email"><Mail size={19} /></a>
              <span className="social-caption">LET'S CONNECT</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-grid" /><div className="photo-orbit orbit-one" /><div className="photo-orbit orbit-two" />
            <div className="photo-frame">
              <img src="/me.jpg" alt="Prasad Bari" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              <div className="photo-fallback"><span>PB</span><small>DATA ANALYST</small></div>
            </div>
            <div className="photo-label"><span className="availability-dot" /> Curious mind. Data-driven thinking.</div>
            <div className="float-card float-card-top"><div className="float-icon"><BarChart3 size={20} /></div><div><strong>Data Analytics</strong><small>Insights that matter</small></div></div>
            <div className="float-card float-card-bottom"><div className="float-icon"><Database size={20} /></div><div><strong>SQL · Python · BI</strong><small>Turning data into value</small></div></div>
          </div>
          <a href="#about" className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE <ArrowDown size={14} /></a>
        </section>

        <section className="section-wrap section-block" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="The person behind" accent="the data." description="A curious problem-solver passionate about analytics, technology, and continuous learning." />
          <div className="about-grid">
            <div className="glass-card about-card">
              <span className="card-index">01 / ABOUT</span><h3>Turning data into decisions.</h3>
               <p>
                   I'm a Computer Science and Engineering graduate from Sant Gadge
                   Baba Amravati University, with a CGPA of 8.6. I'm passionate
    about data analytics, SQL, Python, and Power BI, and enjoy
    transforming raw data into meaningful insights that support
    better business decisions.
  </p>
             <p>
    Through projects like COVID-19 India Analysis, E-commerce
    Analytics, and AgroGuide, I've explored data visualization,
    business intelligence, and machine learning for crop
    recommendation. I'm continuously strengthening my analytical
    and technical skills while seeking opportunities to contribute
    to real-world data-driven projects.
  </p>
 <div className="about-location"><MapPin size={16} /> Pune, Maharashtra, India</div>
            </div>
            <div className="about-stat-grid">
              <div className="glass-card stat-card"><GraduationCap size={22} /><strong>8.6</strong><span>CGPA</span><small>B.E. Computer Science · 2025</small></div>
              <div className="glass-card stat-card"><BriefcaseBusiness size={22} /><strong>6+</strong><span>Projects</span><small>Analytics and development</small></div>
              <div className="glass-card stat-card"><Code2 size={22} /><strong>SQL & Python </strong><span>Core Skill</span><small>Querying and analyzing data</small></div>
              <div className="glass-card stat-card"><Sparkles size={22} /><strong>Always</strong><span>Learning</span><small>Building and improving</small></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title="Skills &" accent="technologies." description="Tools and technologies I use to explore data, build solutions, and communicate insights." />
          <div className="skills-grid">
            {skills.map((skill, i) => <div className="skill-card" key={skill.name}>
              <span className="skill-number">{String(i + 1).padStart(2, "0")}</span>
              <span className="skill-symbol">{skill.category === "Data" ? <Database size={19} /> : skill.category === "Visualization" ? <BarChart3 size={19} /> : <Terminal size={19} />}</span>
              <div><strong>{skill.name}</strong><small>{skill.category}</small></div><ArrowUpRight className="skill-arrow" size={16} />
            </div>)}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects that" accent="tell a story." description="Projects where I explored data, built applications, and worked toward practical solutions." />
          <div className="project-toolbar">
            <span className="project-count"><span className="availability-dot" /> {filteredProjects.length} PROJECTS</span>
            <div className="filter-list">{filters.map((f) => <button key={f} className={activeFilter === f ? "filter active" : "filter"} onClick={() => setActiveFilter(f)}>{f}</button>)}</div>
          </div>
          <div className="projects-grid">
            {filteredProjects.map((project) => <article className="glass-card project-card" key={project.title}>
              <div className="project-top"><span className="project-number">{project.number}</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`} className="project-link-icon"><ArrowUpRight size={20} /></a></div>
              <span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p>
              <div className="tag-list">{project.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              <a className="text-link" href={project.link} target="_blank" rel="noreferrer">View on GitHub <ExternalLink size={15} /></a>
            </article>)}
          </div>
        </section>

        <section className="section-wrap section-block" id="credentials">
          <SectionHeading eyebrow="PROOF OF LEARNING" title="Certifications &" accent="achievements." description="Courses and achievements that reflect my commitment to learning." />
          <div className="credentials-grid">
            {certifications.map((cert, i) => <article className="glass-card credential-card" key={cert.title}>
              <div className="credential-icon"><CheckCircle2 size={22} /></div><span className="card-index">CREDENTIAL / {String(i + 1).padStart(2, "0")}</span>
              <h3>{cert.title}</h3><span className="credential-issuer">{cert.issuer}</span><p>{cert.description}</p>
              <a className="text-link" href={cert.link} target="_blank" rel="noreferrer">View credential <ArrowUpRight size={15} /></a>
            </article>)}
          </div>
        </section>

        <section className="section-wrap section-block" id="research">
          <SectionHeading eyebrow="RESEARCH & PUBLICATIONS" title="Curiosity beyond" accent="the classroom." description="Research documents and academic work. Titles can be updated when you confirm the paper names." />
          <div className="research-grid">
            {researchPapers.map((paper, i) => <article className="glass-card research-card" key={paper.title}>
              <div className="research-icon"><FileText size={24} /></div><span className="card-index">PAPER / 0{i + 1}</span><h3>{paper.title}</h3><p>{paper.description}</p>
              <a className="text-link" href={paper.link} target="_blank" rel="noreferrer">Read paper <ArrowUpRight size={15} /></a>
            </article>)}
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-decoration decoration-one" /><div className="contact-decoration decoration-two" />
            <div className="contact-content">
              <span className="eyebrow"><span className="eyebrow-dot" /> HAVE A PROJECT IN MIND?</span>
              <h2>Let's turn your<br /><span className="gradient-text">ideas into impact.</span></h2>
              <p>I'm open to entry-level opportunities, collaborations, and conversations about data analytics and engineering.</p>
              <a className="button button-primary" href="mailto:prasadbari1515@gmail.com?subject=Portfolio%20Contact">Get in touch <Send size={16} /></a>
            </div>
            <div className="contact-details">
              <a className="contact-item" href="mailto:prasadbari1515@gmail.com"><span className="contact-icon"><Mail size={19} /></span><span><small>EMAIL ME</small><strong>prasadbari1515@gmail.com</strong></span><ArrowUpRight size={17} /></a>
              <a className="contact-item" href="https://www.linkedin.com/in/prasadbari15" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={19} /></span><span><small>CONNECT ON</small><strong>LinkedIn</strong></span><ArrowUpRight size={17} /></a>
              <a className="contact-item" href="https://github.com/PrasadBari-15" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={19} /></span><span><small>EXPLORE MY CODE</small><strong>GitHub</strong></span><ArrowUpRight size={17} /></a>
              <div className="contact-item contact-location"><span className="contact-icon"><MapPin size={19} /></span><span><small>BASED IN</small><strong>Pune, India</strong></span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a href="#home" className="brand"><span className="brand-mark">PB</span><span>prasad<span className="brand-dot">.</span></span></a>
        <p>Designed with purpose. Built with curiosity.</p>
        <span className="footer-copy">© {new Date().getFullYear()} Prasad Bari</span>
      </footer>
    </div>
  );
}

export default App;
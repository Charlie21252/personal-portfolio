import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';

const projects = [
  {
    name: 'Homers Daily',
    description:
      'Full-stack MLB home run tracker with real-time stats, exit velocities, daily leaderboards, and projected starting pitchers.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'mlb_api'],
    live: 'https://charlies-mlb-app.vercel.app/',
    github: 'https://github.com/Charlie21252/mlb-app',
    image: '/images/homers-daily.png',
    logo: '/images/logos/homers-daily-icon.png',
  },
  {
    name: 'Comedic Term Generator',
    description:
      'AI-powered comedy term generator fine-tuned to Gen Z humor, convienently accessible for on the fly laughs.',
    tech: ['Typescript', 'React', 'Anthropic API', 'Node.js', 'Tailwind CSS'],
    live: 'https://comedicterm.com/',
    github: 'https://github.com/Charlie21252/Comedic-Term-Generator',
    image: '/images/comedic-term-generator.png',
    logo: '/images/logos/comedic-term-generator-icon.png',
  },
  {
    name: 'NBA Stats Dashboard',
    description:
      'Full-stack NBA stats app with live player data, interactive charts, and 3D visualizations.',
    tech: ['Python', 'FastAPI', 'Uvicorn', 'nba_api', 'React', 'Vite', 'Tailwind CSS'],
    live: 'https://nba-app-self.vercel.app/',
    github: 'https://github.com/Charlie21252/nba-app',
    image: '/images/nba-stats-dashboard.png',
    logo: '/images/logos/nba-app-icon.png',
  },
  {
    name: 'Podcast RAG Chat',
    description:
      'RAG AI chat app that indexes podcast transcripts and answers natural-language questions with context-aware accuracy.',
    tech: ['Python', 'LangChain', 'Ollama'],
    demo: 'https://github.com/Charlie21252/podcastpod-rag-chat/blob/main/README.md',
    github: 'https://github.com/Charlie21252/podcastpod-rag-chat',
    image: '/images/podcast-rag-chat.png',
  },
  {
    name: 'Oracle',
    description:
      'Real-time OSINT dashboard mapping live flights, earthquakes, wildfires, weather alerts, CCTV feeds, shipping chokepoints, satellites, and conflict zones on an interactive globe.',
    tech: ['TypeScript', 'React', 'Node.js', 'Express', 'MapLibre GL', 'Tailwind CSS'],
    live: 'https://oracle-six-vert.vercel.app/',
    github: 'https://github.com/Charlie21252/Oracle',
    image: '/images/oracle.png',
    logo: '/images/logos/oracle-icon.png',
  },
];

function EmailLink() {
  const email = 'charliehristov13@gmail.com';
  const [revealed, setRevealed] = useState(false);

  return (
    <a
      href={`mailto:${email}`}
      onClick={(e) => {
        if (!revealed) {
          e.preventDefault();
          setRevealed(true);
        }
      }}
    >
      {revealed ? email : 'Email'}
    </a>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="28" height="28" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
        0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
        1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
        0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68
        0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15
        0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2
        0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  );
}

function ProjectThumb({ logo, image, github }) {
  const [logoError, setLogoError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [hovering, setHovering] = useState(false);

  const hasLogo = Boolean(logo) && !logoError;
  const hasImage = Boolean(image) && !imageError;

  if (!hasLogo && !hasImage) {
    if (github) {
      return (
        <a
          className="project-thumb project-thumb-fallback"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
          <span>No screenshot yet — view on GitHub</span>
        </a>
      );
    }
    return (
      <div className="project-thumb" aria-hidden="true">
        <span>Preview coming soon</span>
      </div>
    );
  }

  const showImage = hasImage && (hovering || !hasLogo);

  return (
    <div
      className="project-thumb project-thumb-media"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {hasLogo && (
        <div className={`project-thumb-logo${showImage ? ' is-hidden' : ''}`}>
          <img src={logo} alt="" onError={() => setLogoError(true)} />
        </div>
      )}
      {hasImage && (
        <img
          src={image}
          alt=""
          className={`project-thumb-image${showImage ? ' is-visible' : ''}`}
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
}

const skills = [
  'JavaScript', 'React', 'Python', 'Node.js', 'Express',
  'MongoDB', 'FastAPI', 'REST APIs', 'LangChain', 'Ollama',
  'Tailwind CSS', 'Git', 'HTML/CSS', 'Vercel',
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

export default function App() {
  return (
    <div className="app">
      <section className="split-hero">
        <div className="split-left">
          <div className="split-left-inner">
            <img src="/logo.png" alt="Charlie Hristov logo" className="hero-logo" />
            <p className="hero-label">Computer Science Student</p>
            <h1>Charlie Hristov</h1>
            <p className="hero-label hero-school">Iowa State University</p>
            <nav className="hero-links">
              <EmailLink />
              <span aria-hidden="true" className="dot">·</span>
              <a href="https://github.com/Charlie21252" target="_blank" rel="noreferrer">GitHub</a>
              <span aria-hidden="true" className="dot">·</span>
              <a href="https://www.linkedin.com/in/charlie-hristov-873498324/" target="_blank" rel="noreferrer">LinkedIn</a>
              <span aria-hidden="true" className="dot">·</span>
              <a href="/Charlie Hristov Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            </nav>
            <a href="#about" className="scroll-cue">
              <span>About me</span>
              <span className="scroll-cue-arrow">↓</span>
            </a>
          </div>
        </div>

        <div className="split-right">
          <div className="split-right-inner">
            <h2 className="panel-heading panel-heading-lg">Projects</h2>
            <div className="about-accent" />
            <div className="panel-pointer">
              <span>Scroll to explore</span>
              <span className="scroll-cue-arrow">↓</span>
            </div>
            <div className="project-grid">
              {projects.map((p) => (
                <article className="project-card" key={p.name}>
                  <ProjectThumb logo={p.logo} image={p.image} github={p.github} />
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="project-footer">
                    <div className="tech-tags">
                      {p.tech.map((t) => <span key={t}>{t}</span>)}
                    </div>
                    <div className="project-links">
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>
                      )}
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer">Demo ↗</a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="main" id="about">
        <motion.section
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp}>About</motion.h2>
          <motion.div className="about-accent" variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
          }} />
          <motion.p variants={fadeUp}>
            I'm a CS student with a genuine curiosity for how things work — from
            software systems to the human mind. I'm drawn to problems at the edge
            of data, AI, and real-world application: things that have real numbers
            behind them and real stories to tell.
          </motion.p>
          <motion.p variants={fadeUp}>
            Outside of code, I follow MLB closely — not just the games, but the
            analytics behind them. Exit velocity, spin rate, launch angle. I find
            the same satisfaction in sports data as I do in building systems:
            patterns surface, stories emerge, something invisible becomes clear.
            I hope to keep bringing these threads together.
          </motion.p>
        </motion.section>

        <motion.section
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp}>Skills</motion.h2>
          <motion.div className="skills-grid" variants={staggerFast}>
            {skills.map((s) => (
              <motion.span key={s} variants={popIn}>{s}</motion.span>
            ))}
          </motion.div>
        </motion.section>
      </main>

      <footer>
        <p>Charlie Hristov · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

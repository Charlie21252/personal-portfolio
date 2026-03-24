import React, { useEffect } from 'react';
import './index.css';

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const projects = [
  {
    name: 'Homers Daily',
    description:
      'Full-stack MLB home run tracker with real-time stats, exit velocities, daily leaderboards, and projected starting pitchers.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'mlb_api'],
    live: 'https://charlies-mlb-app.vercel.app/',
    github: 'https://github.com/Charlie21252/mlb-app',
  },
  {
    name: 'NBA Stats Dashboard',
    description:
      'Full-stack NBA stats app with live player data, interactive charts, and 3D visualizations.',
    tech: ['Python', 'FastAPI', 'Uvicorn', 'nba_api', 'React', 'Vite', 'Tailwind CSS'],
    live: 'https://nba-app-self.vercel.app/',
    github: 'https://github.com/Charlie21252/nba-app',
  },
  {
    name: 'Comedic Term Generator',
    description:
      'AI-powered comedy term generator fine-tuned to Gen Z humor, convienently accessible for on the fly laughs.',
    tech: ['Typescript', 'React', 'Anthropic API', 'Node.js', 'Tailwind CSS'],
    live: 'https://comedicterm.com/',
    github: 'https://github.com/Charlie21252/Comedic-Term-Generator',
  },
  {
    name: 'Podcast RAG Chat',
    description:
      'RAG AI chat app that indexes podcast transcripts and answers natural-language questions with context-aware accuracy.',
    tech: ['Python', 'LangChain', 'Ollama'],
    demo: 'https://github.com/Charlie21252/podcastpod-rag-chat/blob/main/README.md',
    github: 'https://github.com/Charlie21252/podcastpod-rag-chat',
  },
];

const skills = [
  'JavaScript', 'React', 'Python', 'Node.js', 'Express',
  'MongoDB', 'FastAPI', 'REST APIs', 'LangChain', 'Ollama',
  'Tailwind CSS', 'Git', 'HTML/CSS', 'Vercel',
];

export default function App() {
  useScrollAnimation();

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-inner">
          <p className="hero-label">Computer Science · Iowa State University</p>
          <h1>Charlie Hristov</h1>
<nav className="hero-links">
            <a href="mailto:charliehristov13@gmail.com">charliehristov13@gmail.com</a>
            <span aria-hidden="true" className="dot">·</span>
            <a href="https://github.com/Charlie21252" target="_blank" rel="noreferrer">GitHub</a>
            <span aria-hidden="true" className="dot">·</span>
            <a href="https://www.linkedin.com/in/charlie-hristov-873498324/" target="_blank" rel="noreferrer">LinkedIn</a>
            <span aria-hidden="true" className="dot">·</span>
            <a href="/Charlie Hristov Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="section animate">
          <h2>About</h2>
          <p>
            I'm a CS student with a genuine curiosity for how things work — from
            software systems to the human mind. I'm drawn to problems at the edge
            of data, AI, and real-world application: things that have real numbers
            behind them and real stories to tell.
          </p>
          <p>
            Outside of code, I follow MLB closely — not just the games, but the
            analytics behind them. Exit velocity, spin rate, launch angle. I find
            the same satisfaction in sports data as I do in building systems:
            patterns surface, stories emerge, something invisible becomes clear.
            I hope to keep bringing these threads together.
          </p>
        </section>

        <section className="section animate">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.name}>
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

            <article className="project-card project-wip">
              <span className="wip-badge">Active</span>
              <h3>In Progress</h3>
              <p>
                Extending Homers Daily with AI-powered insights and refining
                the Podcast RAG pipeline for better retrieval accuracy.
              </p>
            </article>
          </div>
        </section>

        <section className="section animate">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((s) => <span key={s}>{s}</span>)}
          </div>
        </section>
      </main>

      <footer>
        <p>Charlie Hristov · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

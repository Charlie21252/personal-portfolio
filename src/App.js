import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <h1>Charlie Hristov</h1>
        <p>Student at Iowa State University pursuing bachelors degree in CS</p>
        <div className="header-contact">
          <div className="email">
            <span>charliehristov13@gmail.com</span>
          </div>
          <div className="social-buttons">
            <a href="https://github.com/Charlie21252" className="btn">GitHub</a>
            <a href="https://www.linkedin.com/in/charlie-hristov-873498324/" className="btn">LinkedIn</a>
            <a href="/Charlie Hristov Resume.pdf">Resume (PDF)</a>
          </div>
        </div>
      </header>


      {/* About */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a curious learner with a passion for exploring the possibilities of artificial intelligence and the 
          ways it can shape the future. I love diving into new ideas, experimenting with emerging tools, and uncovering creative 
          applications of AI. Beyond tech, I’m deeply interested in sports data, especially Major League Baseball. Whether it’s 
          checking who hit a home run today, seeing who’s pitching, or keeping up with the latest leaderboards, 
          I love looking at the numbers and finding the stories that they can tell.
        </p>
      </section>
      

      {/* Projects */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">

          <div className="project">
            <h3>Homers Daily</h3>
            <p>full-stack app using React, Node.js, Express, and MongoDB Atlas to 
              display real-time MLB home run data, player stats, exit velocities, distances, daily leaderboards, and 
              daily projected starting pitchers.</p>
            <div className="links">
              <a href="https://charlies-mlb-app.vercel.app/">Live</a>
              <a href="https://github.com/Charlie21252/mlb-app">GitHub</a>
            </div>
          </div>

          <div className="project">
            <h3>Podcast RAG Chat</h3>
            <p>A Retrieval-Augmented Generation (RAG) AI chat application built with Python, LangChain, and Ollama. 
              It processes podcast transcripts, indexes them for efficient retrieval, and allows users to ask natural-language 
              questions to get accurate, context-aware answers drawn directly from the podcasts content</p>
            <div className="links">
              <a href="https://github.com/Charlie21252/podcastpod-rag-chat/blob/main/README.md">Demo</a>
              <a href="https://github.com/Charlie21252/podcastpod-rag-chat">GitHub</a>
            </div>
          </div>

          <div className="project">
            <h3>My Next Project</h3>
            <p>Im continuously working to better the podcast RAG app along with potentially adding AI insights to my
              homers daily app.
            </p>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-list">
          <span>JavaScript</span>
          <span>React</span>
          <span>Python</span>
          <span>Node.js</span>
          <span>Git</span>
          <span>HTML/CSS</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>REST APIs</span>
          <span>Render</span>
          <span>Vercel</span>
          <span>Ollama</span>
          <span>LangChain</span>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Charlie Hristov</p>
      </footer>
    </div>
  );
}

export default App;
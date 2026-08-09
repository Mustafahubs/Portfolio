import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://i.imgur.com/TXrNL4G.jpeg" alt="Ghulam Mustafa" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Mustafahubs" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/self-mustafa/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Mustafa</h1>
          <p>Founder, Mustafa Code Sol Ltd — Python/FastAPI Backend &amp; Automation Engineer</p>
          <p className="tagline-sub">5+ years freelance &middot; 200+ projects delivered &middot; Fiverr 4.9★ &middot; Upwork Top Rated</p>

          <div className="hero-cta">
            <a href="#contact" className="cta-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Get in Touch</a>
            <a href={`${process.env.PUBLIC_URL}/resume.html`} target="_blank" rel="noreferrer" className="cta-secondary">View Resume</a>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/Mustafahubs" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/self-mustafa/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
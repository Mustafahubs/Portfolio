import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Mustafahubs" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/ghulam-mustafa-dev" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/Mustafahubs/Portfolio" target="_blank" rel="noreferrer">Mustafa</a> with 💜</p>
    </footer>
  );
}

export default Footer;
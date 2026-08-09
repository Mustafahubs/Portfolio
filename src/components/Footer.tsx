import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="mailto:ghulammustafapy@gmail.com" aria-label="Email"><EmailIcon /></a>
        <a href="https://github.com/Mustafahubs" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/self-mustafa/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
        <a href="https://wa.me/447426767993" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        <a href="https://t.me/self_mustafa" target="_blank" rel="noreferrer" aria-label="Telegram"><FaTelegramPlane /></a>
        <a href={`${process.env.PUBLIC_URL}/resume.html`} target="_blank" rel="noreferrer" aria-label="Resume"><DescriptionIcon /></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/Mustafahubs/Portfolio" target="_blank" rel="noreferrer">Mustafa</a> with 💜</p>
    </footer>
  );
}

export default Footer;
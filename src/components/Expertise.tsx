import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    'Python',
    'FastAPI',
    'PostgreSQL',
    'Celery + Redis',
    'SQLAlchemy',
    'DrissionPage',
    'Selenium',
    'Requests',
    'Scrapy',
    'Docker',
];

const labelsSecond = [
    "Python Fundamentals",
    "OOP",
    "File Handling",
    'Error Handling',
    'Web Scraping',
    "Automation and Scripting",
    "API Interaction"
];

const labelsThird = [
    "OpenAI",
    "LangChain",
    "CrewAI",
    'Ollama',
    "MCP (Model Context Protocol)",
    "n8n",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h2>Expertise</h2>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Backend & Automation Engineering</h3>
                        <p>I design and build production FastAPI backends and browser-automation systems — from a government student-information platform serving ~100 schools to healthcare EHR integrations and distributed ticket-pricing engines. My focus is reverse-engineering undocumented APIs and turning brittle manual workflows into reliable, unattended automation.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>Teaching Python & Related Technologies</h3>
                        <p>With 4+ years of experience teaching Python and related technologies, I help students and professionals understand programming concepts and apply them effectively. My teaching encompasses a broad range of Python topics, including data types, web scraping, automation, and more.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Key Topics Taught:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>AI-Assisted Automation</h3>
                        <p>I integrate LLMs into automation pipelines where they add real value — GPT-assisted content generation, reverse-engineering obfuscated client-side code, and multi-agent tool-calling experiments. I've also exposed production APIs as MCP tool servers for AI-agent consumption.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
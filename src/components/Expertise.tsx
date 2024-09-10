import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    'Python',
    'FastAPI',
    'Selenium',
    'Reqeusts',
    'DrissionPage',
    'Playwright',
    'Scrapy',
    'BeautifulSoup',
    'Pandas',
    'SQLAlchemy',
    'PostgreSQL',
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
    "Groq",
    "LangChain",
    'Ollama',
    "Qdrant",
    "Hugging Face",
    'Fine Tuning',
    "LlamaIndex",
    "LLMs Deployment",
    "Streamlit",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Automation Dev. & Data Scraping</h3>
                        <p>As an experienced automation developer, I specialize in creating efficient automation solutions to streamline data processes and business operations. My focus is on leveraging Python and modern tools to automate tasks and gather data for machine learning and business growth.</p>
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
                        <p>With 3 years of experience teaching Python and related technologies, I help students and professionals understand programming concepts and apply them effectively. My teaching encompasses a broad range of Python topics, including data types, web scraping, automation, and more.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Key Topics Taught:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>GenAI & LLM</h3>
                        <p>Stay ahead of the curve by integrating cutting-edge AI models into your projects. With professional experience in building enterprise-grade Generative AI (GenAI) solutions, I enable businesses to make smarter, data-driven decisions through advanced AI technologies.</p>
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
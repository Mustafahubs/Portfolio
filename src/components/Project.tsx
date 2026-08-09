import React from "react";
import { FaSchool, FaHeartbeat, FaTicketAlt, FaHome, FaEnvelopeOpenText, FaCloud } from 'react-icons/fa';
import Chip from '@mui/material/Chip';
import '../assets/styles/Project.scss';

interface ProjectEntry {
    icon: React.ReactNode;
    color: string;
    tagline?: string;
    title: string;
    stack: string[];
    description: string;
    link?: { href: string; label: string };
    status: string;
}

const projects: ProjectEntry[] = [
    {
        icon: <FaSchool />,
        color: '#5000ca',
        tagline: 'Flagship project',
        title: 'SISSOL — Punjab School Information System',
        stack: ['FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'Docker', 'Caddy'],
        description: 'Architected and built a ~31,000-line FastAPI/PostgreSQL/Celery backend wrapping a legacy government student-information system for a Punjab, Pakistan education client — adding offline-first data capture and cross-school dashboards for ~100 schools. Diagnosed and fixed a production task-queue contention issue that was delaying user-facing requests behind a ~980-task sync backlog.',
        link: { href: 'https://punjabsis.fastapi.us/', label: 'View Live System' },
        status: 'Live production system',
    },
    {
        icon: <FaHeartbeat />,
        color: '#c2185b',
        title: 'Healthcare EHR Integration Suite',
        stack: ['FastAPI', 'Redis', 'pytest', 'GitHub Actions CI/CD', 'MCP'],
        description: 'Built production FastAPI integrations across five healthcare practice-management platforms — SimplePractice, AdvancedMD, Availity, JaneApp, and Osmind — for medical billing, scheduling, and insurance-remittance clients. The SimplePractice integration ships with a 25-test automated CI/CD suite on GitHub Actions, Redis response caching, and rate limiting.',
        status: 'Confidential client work',
    },
    {
        icon: <FaTicketAlt />,
        color: '#0288d1',
        title: 'Ticketing Inventory & Pricing Engine',
        stack: ['Redis', 'Distributed Locking', 'Auth0', 'FastAPI'],
        description: 'Engineered a Redis-backed distributed-locking pricing engine connecting three ticketing platforms (Automatiq → Lysted → ReachPro) end-to-end, computing tiered pricing ladders and coordinating multi-machine automation to eliminate duplicate listings across StubHub, SeatGeek, VividSeats, Skybox, and Ticketmaster.',
        status: 'Confidential client work',
    },
    {
        icon: <FaHome />,
        color: '#2e7d32',
        title: 'Yhomes1 LLC — Real Estate Lead Automation',
        stack: ['DrissionPage', 'GraphQL', 'Google Sheets API'],
        description: 'Built browser-automation integrations reverse-engineering internal REST/GraphQL APIs across Zillow, Auction.com, and Propwire for Yhomes1 LLC, a Washington-based real estate investment company — plus related e-commerce data-collection automation on Daraz.pk and Amazon for the same client relationship.',
        status: 'Client: Yhomes1 LLC',
    },
    {
        icon: <FaEnvelopeOpenText />,
        color: '#f57c00',
        title: 'Outbound Mailing Automation',
        stack: ['Apollo.io', 'Quickmail.io', 'Zoho', 'Instantly.ai'],
        description: 'Automated the full outbound mailing pipeline for PolarGrowth, a marketing-technology startup — building bots across Apollo.io, Quickmail.io, Zoho, and Instantly.ai and reverse-engineering hidden internal APIs to bypass GUI load delays, hosted 24/7 on RDP/Linux servers.',
        status: 'Client: PolarGrowth (Jul 2022 – Mar 2023)',
    },
    {
        icon: <FaCloud />,
        color: '#455a64',
        title: 'Hetzner Cloud API Wrapper & Dashboard',
        stack: ['FastAPI', 'Vue 3', 'xterm.js', 'nginx'],
        description: 'Built a full-featured FastAPI wrapper around the Hetzner Cloud API (servers, volumes, load balancers, images) with a companion Vue.js dashboard offering real-time VNC/console access via xterm.js — ~17,500 lines, with full CRUD/action coverage independent of the official SDK.',
        status: 'Personal infrastructure project',
    },
];

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h2>Featured Work</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <div className="project-icon-block" style={{ backgroundColor: project.color }}>
                            {project.icon}
                        </div>
                        {project.tagline && <span className="project-tagline">{project.tagline}</span>}
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="flex-chips">
                            {project.stack.map((label, i) => (
                                <Chip key={i} className="chip" label={label} />
                            ))}
                        </div>
                        <div className="project-footer">
                            {project.link ? (
                                <a href={project.link.href} target="_blank" rel="noreferrer" className="project-link">{project.link.label} →</a>
                            ) : (
                                <span className="project-status">{project.status}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;

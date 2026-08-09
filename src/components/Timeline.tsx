import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h2>Career History</h2>
        <VerticalTimeline animate={false}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb 2025 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder & Lead Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Mustafa Code Sol Ltd — Remote (Registered London, UK)</h4>
            <p>
              Founded and lead a UK-registered software company delivering Python/FastAPI backends, browser-automation integrations, and self-hosted infrastructure to commercial clients, generating $70K-$100K+ in combined engagement revenue.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2021 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst and Web Scraping</h3>
            <h4 className="vertical-timeline-element-subtitle">Fiverr — Remote</h4>
            <p>
              200+ freelance automation and web-scraping projects delivered, maintaining a 4.9-star rating and reaching Level 2 seller status within 6 months.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2021 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Python Browser Automation Bots Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Upwork — Remote</h4>
            <p>
              Top Rated freelancer status with a strong Job Success Score, building browser-automation and API-integration tools across real estate, ticketing, and healthcare clients.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul 2022 - Mar 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Automation Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">PolarGrowth — Remote (Illinois, US)</h4>
            <p>
              Automated the full outbound mailing pipeline for a marketing-technology startup, building bots across Apollo.io, Quickmail.io, Zoho, and Instantly.ai and reverse-engineering hidden internal APIs to bypass GUI load delays.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2021 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Programming Instructor</h3>
            <h4 className="vertical-timeline-element-subtitle">Independent / Freelance — Bahawalnagar, Pakistan</h4>
            <p>
              4+ years teaching Python, web scraping, and backend fundamentals; built a full curriculum and mentored students into paid freelance automation work.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
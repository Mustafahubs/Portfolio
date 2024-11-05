import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://youtu.be/mXlK2ARwtLE" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://youtu.be/mXlK2ARwtLE" target="_blank" rel="noreferrer"><h2>Apollo.io Leads Automation</h2></a>
                    <p>A tool that will allow you to log in to your Apollo.io account and upload a for search on apollo.io.
                        Add companies or people to custom saved list, apply filters on job title to narrow down the results.</p>
                </div>
                <div className="project">
                    <a href="https://daraz.pk/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://daraz.pk/" target="_blank" rel="noreferrer"><h2>Daraz.pk Product Hunter
                    </h2></a>
                    <p>A tool to find a good product for selling on Daraz.pk. This tool gives the ease of categories  &gt; sub-Categories selection. It provides a way to analyze the products on an Excel sheet.</p>
                </div>
                <div className="project">
                    <a href="https://youtu.be/jXW_7FTDjpo" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://youtu.be/jXW_7FTDjpo" target="_blank" rel="noreferrer"><h2>Trustpilot.com Companies Scraper</h2></a>
                    <p>A Python tool that will allow you to provide a list of category URLs in a CSV and scrap all the company's data (Name, Categories, Email, Phone, Website and Reviews) into your local CSV file.</p>
                </div>
                <div className="project">
                    <a href="https://youtu.be/psX4bVL9JVM" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://youtu.be/psX4bVL9JVM" target="_blank" rel="noreferrer"><h2>Python Scraper for Sale Listings</h2></a>
                    <p>This project is a Python web scraper designed to extract sale listings data from the Real-Estate websites. By utilizing web scraping techniques, the scraper automates the process of gathering valuable information from the website, such as property details, pricing, location, and contact information.</p>
                </div>
                <div className="project">
                    <a href="https://zapier.com/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://zapier.com/" target="_blank" rel="noreferrer"><h2>Zapier Automation Workflow for Streamlined Task Management</h2></a>
                    <p>Developed a comprehensive automation workflow using Zapier to enhance task management and improve operational efficiency. This project involved integrating multiple applications to automate repetitive tasks and streamline processes. The workflow includes triggers and actions that synchronize data across platforms, reduce manual data entry, and ensure timely updates.</p>
                </div>
                <div className="project">
                    <a href="https://www.stubhub.ie/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://ticketmaster.com/" target="_blank" rel="noreferrer"><h2>Ticketing Automation Solutions for Major Platforms</h2></a>
                    <p>Contributed to an advanced automation project focusing on optimizing ticket sales processes across multiple high-traffic ticketing platforms, including Ticketmaster, Dtiprotal, VividSeats, Skybox, StubHub, and TicketNetwork. This project involved developing automation scripts to efficiently manage ticket sales, monitor inventory, and handle customer interactions.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;
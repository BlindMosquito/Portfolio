import React from "react";
import './experience.css';
import './experience-small.css';
import './experience-large.css';
import experienceheader from '../images/experience-header.jpg';
import drawingpic from '../images/drawing.jpg';
import techpic from '../images/tech.jpg';
import Links from '../links/links'
import Descript from "../descript/descript";
import TopLine from '../lines/topline'
import BotLine from '../lines/botline'

class Experience extends React.Component {
    render() {
        return <div className="experience-container">
            <div className="sub-container" id="experience-title">
                <img src={experienceheader} id="img-experience-header" alt="experience" />
                <Descript name="Experience"></Descript>
                <Links></Links> 
                <TopLine></TopLine>
            </div>
            <div className="sub-container" id="experience-list">
                <div className="experience-sub">
                    <div className="experience-item">
                        <div className="item-content">
                            <div className="exp-header">Experience</div>
                            <div className="exp-category"><br />Gohman Mechanical (2007-2021)</div>
                            <div className="exp-content">
                                <ul>Commercial Heating and Air Conditioning</ul>
                                <ul>
                                    Construction Assistant
                                    <ul>Bidding, Permitting, and Closing Out of Projects</ul>
                                    <ul>Answering State Code Questions</ul>
                                    <ul>Design HVAC Systems in Revit and AutoCAD</ul>
                                    <ul>Office Assistance</ul>
                                </ul>
                                <ul>
                                    Information Technology
                                    <ul>Windows Server Maintenance</ul>
                                    <ul>Linux Server Maintenance</ul>
                                    <ul>Maintian User Accounts</ul>
                                    <ul>Maintian User Emails</ul>
                                    <ul>Company Website (Not the same as current)</ul>
                                    <ul>Troubleshooting IT Problems</ul>
                                </ul>
                            </div>
                            <div className="exp-category"><br />Computer Science Bachelor Degree Portland State</div>
                            <div className="exp-content">
                                <ul>June 2022</ul>
                            </div>
                            <div className="exp-category"><br />Certified Ethical Hacker</div>
                            <div className="exp-content">
                                <ul>June 2022</ul>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="item-knowledge">
                            <div className="exp-header">Knowledge</div>
                            <div className="exp-category"><br />Software Development</div>
                            <div className="exp-content">
                             <ul>Rest Api</ul>
                             <ul>Front End Web Development Such as React, Angular, ...</ul>
                             <ul>Back End Web Development Such as ASP.Net Core, PHP, Java ...</ul>
                             <ul>Database Development and Maintenance</ul>
                             <ul>Proficient Knowledge with Most Programming Languages
                                 <ul>C, C++, C#</ul>
                                 <ul>Java, Python, Rust</ul>
                             </ul>
                            </div>
                            <div className="exp-category"><br />Information Technology</div>
                            <ul>Active Directory</ul>
                            <ul>Exchange Server</ul>
                            <ul>Azure</ul>
                            <ul>Voip</ul>
                            <ul>Quickbooks and Other Acccounting Systems</ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-container" id="experience-end">
                <BotLine></BotLine> 
            </div>
        </div>;
    }
}

export default Experience
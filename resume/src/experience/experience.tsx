import React from "react";
import './experience.css';
import './experience-sizes.css';
import experienceheader from '../images/experience-header.jpg';
import drawingpic from '../images/drawing.jpg';
import techpic from '../images/tech.jpg';
import Links from '../links/links'
import Descript from "../descript/descript";
import TopLine from '../lines/topline'
import BotLine from '../lines/botline'

class Experience extends React.Component {
    render() {
        return <div className="exp-container">
            <div className="experience-header" id="exp-title">
                <img src={experienceheader} className="img-exp-header" alt="experience" />
                <Descript name="Experience"></Descript>
                <Links></Links> 
                <TopLine></TopLine>
            </div>
            <div className="exp-list">
                <div className="exp-item item-experience">
                    <div className="exp-content">
                    <div className="exp-header">Experience</div>
                    <div className="exp-category"><br />Gohman Mechanical</div>
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
                            <ul>Troubleshooting IT Problems</ul>
                            <ul>Software Development</ul>
                        </ul>
                        <div className="exp-category"><br />Portland State University</div>
                        <ul>BS Computer Science</ul>
                    </div>
                </div>
                <div className="exp-item item-knowledge">
                    <div className="exp-content">
                        <div className="exp-header">Knowledge</div>
                        <div className="exp-category"><br />Software Development</div>
                        <ul>Front End Web Development Such as React, Angular, ...</ul>
                        <ul>Back End Web Development Such as ASP.Net Core, PHP, Java ...</ul>
                        <ul>Database Development and Maintenance</ul>
                        <ul>Proficient Knowledge with Most Programming Languages
                            <ul>C, C++, C#</ul>
                            <ul>Java, Python, Rust</ul>
                        </ul>
                        <div className="exp-category"><br />Information Technology</div>
                        <ul>Active Directory</ul>
                        <ul>Exchange Server</ul>
                        <ul>Azure</ul>
                        <ul>Voip</ul>
                        <ul>Quickbooks and Other Acccounting Systems</ul>
                    </div>
                </div>
            </div>
            <div className="end-lines">
                <BotLine></BotLine> 
            </div>
        </div>;
    }
}

export default Experience
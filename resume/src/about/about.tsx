import React from "react";
import './about.css';
import './about-sizes.css';
import aboutheader from '../images/about-header.jpg';
import Links from '../links/links'
import Descript from "../descript/descript";
import TopLine from '../lines/topline'
import BotLine from '../lines/botline'
import zoo from '../images/zoo.jpg'
import beach from '../images/beach.jpg'
import wifeAndI from '../images/wifeAndI.jpg'
import gohmans from '../images/gohmans.jpg'
import costumes from '../images/costumes.jpg'
import christmas from '../images/christmas.jpg'
import kidsCorn from '../images/corn-maze.jpg'
import risk from '../images/risk.jpg'
import whinery from '../images/whinery.jpg'
import hockey from '../images/hockey.jpg'

class About extends React.Component {
    render() {
        return <div className="about-container">
            <div className="about-header" id="about-title">
                <img src={aboutheader} id="img-about-header" alt="about" />
                <Descript name="About Me"></Descript>
                <Links></Links> 
                <TopLine></TopLine>
            </div>
            <div className="sub-about">
                <div className="about-grid">

                    <div className="about-images">
                        <img src={zoo} alt="family at the zoo"  id="imgZoo" className="about-image about-image-item" height="100%" />
                        <img src={beach} alt="Angie and I at the beach"  className="about-image-small about-image-item" height="100%" />
                        <img src={gohmans} alt="faimly"  className="about-image about-image-final about-image-item" height="100%" />
                        <img src={costumes} alt="halloween"  className="about-image-small about-image-item" height="100%" />
                        <img src={christmas} alt="Angie and I at the beach"  className="about-image about-medium about-image-item" height="100%" />
                    </div>
                    <div className="about-content-container">
                        <div className="about-content">
                            <h2>Hello, my name is Drew Gohman.</h2> 
                            <p>You can see in the pictures my beautiful wife Angela and our two kids, Elijah and Naomi. Together we have shared many fun adventures, and I am excited for all that is next.</p>
                            <p>I have worked for Gohman Mechanical an heating and air conditioning company for the last fourteen years. I started off by expediting equipment to job sites before moving into the office and helping with new construction. Over the years, I have assisted with most areas in the office, but my two primary roles were construction assistant and information technology.</p>
                            <p>As a construction assistant, I was designing new commercial construction mechanical systems. I would stay up to date on state code and consult with general contractors and architects for the project. As the IT guy for the company, I maintained their cloud and local servers as well as the client computers.</p>
                            <p>Over the past few years, I started falling in love with software development. So, I started attending Portland State University to pursue a degree in computer science. After years of working full-time and taking a couple of classes a term, I finally received my degree.</p>
                            <p>Now I am excited to start my next adventure in pursuing a career in software development. Writing code is a change from construction, but I feel that I can bring my knowledge of business management which can aid in my next career.</p>
                        </div>
                    </div>
                    <div className="about-images">
                        <img src={kidsCorn} alt="kids in maze"  className="about-image about-image-type" height="100%" />
                        <img src={wifeAndI} alt="Wife and I at hocky game"  className="about-image-small about-image-final about-image-item" height="100%" />
                        <img src={risk} id="imgRisk" alt="family playing risk" className="about-image about-image-item" height="100%" />
                        <img src={whinery} alt="whinery"  className="about-image-small about-image-final about-image-item" height="100%" />
                        <img src={hockey} alt="Kids at hockey game"  className="about-image about-medium about-image-item" height="100%" />
                    </div>
                </div>
            </div>
            <div className="end-lines">
                <BotLine></BotLine> 
            </div>
        </div>;
    }
}

export default About
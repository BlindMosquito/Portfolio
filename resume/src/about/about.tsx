import React from "react";
import './about.css';
import aboutheader from '../images/about-header.jpg';
import kidcorn from '../images/kidscorn.jpg'
import wifeandi from '../images/wifeAndI.jpg'
import family from '../images/family.jpg'
import risk from '../images/risk.jpg'
import christmas from '../images/christmas.jpg'
import beach from '../images/beach.jpg'
import Links from '../links/links'
import Descript from "../descript/descript";
import TopLine from '../lines/topline'
import BotLine from '../lines/botline'

class About extends React.Component {
    render() {
        return <div className="about-container">
            <div className="sub-container" id="about-title">
                <img src={aboutheader} id="img-about-header" alt="about" />
                <Descript name="About Me"></Descript>
                <Links></Links> 
                <TopLine></TopLine>
            </div>
            <div className="sub-container" id="about-list">
                <div className="about-grid">
                    <img className="about-grid-item" src={kidcorn} alt="kids next to corn" />
                    <img className="about-grid-item" src={wifeandi} alt="wife and i at hocky" />
                    <img className="about-grid-item" src={family} alt="family" />
                    <div className="about-content">
                        <p>My name is Drew Gohman. I worked for an HVAC company for the last decade and in the process, 
                        I fell in love with programming and IT. My goal is to pursue my career in software development.</p>
                        <p>Sorry for the blurry pictures this will hopefully be fixed soon, but until then here are some pictures of my amzing family.</p>
                    </div>
                    <img className="about-grid-item" src={risk} alt="kids playing risk" />
                    <img className="about-grid-item" src={christmas} alt="wife and i near christmas lights" />
                    <img className="about-grid-item" src={beach} alt="wife and i" />
                </div>
            </div>
            <div className="sub-container" id="about-end">
                <BotLine></BotLine> 
            </div>
        </div>;
    }
}

export default About
import React from "react";
import './project.css';
import projectheader from '../images/project-header.jpg';
import floppy from '../images/floppy.jpg';
import board from '../images/board.jpg';
import Descript from "../descript/descript";
import Links from '../links/links'
import TopLine from '../lines/topline'
import BotLine from '../lines/botline'

class Project extends React.Component {
    render() {
        return <div className="project-container">
            <div className="sub-container" id="project-title">
                <img src={projectheader} id="img-project-header" alt="projects" />
                <Descript name="Projects"></Descript>
                <Links></Links> 
                <TopLine></TopLine>
            </div>
            <div className="sub-container" id="project-list">
                <div className="project-sub">
                    <a href="https://github.com/BlindMosquito/rustproof">
                        <div className="project-item">
                            <p>Click here to be directed to the github repository for rustproof</p>
                            <p>Rust Proof is a compiler program that verifies conditions for funcitons in rust language</p>
                        </div>
                    </a>
                <div className="project-item">
                    <a href="https://github.com/BlindMosquito/dwelmer">
                        <div className="project-item">
                            <p>Click here to be directed to the github repository for dwelmer</p>
                            <p>Dwelmer is a program that binds to the print screen key</p>
                            <p>It acts similar to windows snipping tool except you don't have to open an application to run it</p>
                        </div>
                    </a>
                </div>
                </div>
            </div>
            <div className="sub-container" id="project-end">
                <BotLine></BotLine> 
            </div>
        </div>;
    }
}

export default Project
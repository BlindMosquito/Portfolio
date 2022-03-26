import React from "react";
import './project.css';
import './project-sizes.css';
import projectheader from '../images/project-header.jpg';
import Links from '../links/links'
import Descript from "../descript/descript";
import TopLine from '../lines/topline'
import BotLine from '../lines/botline'

class Project extends React.Component {
    render() {
        return <div className="project-container">
            <div className="project-header" id="project-title">
                <img src={projectheader} className="img-project-header" alt="project" />
                <Descript name="Projects"></Descript>
                <Links></Links> 
                <TopLine></TopLine>
            </div>
            <div className="project-list">
                <div className="project-item item-dwelmer">
                    <a className="proj-link" href="https://github.com/BlindMosquito/dwelmer">
                        <div className="project-content">
                            <div className="proj-header">Dwelmer</div>
                            Used to take quick screenshots similar to snipping tool.<br />
                            I created this to save time avoiding the extra window of screenshot programs.
                        </div>
                    </a>
                </div>
                <div className="project-item item-forex">
                    <a className="proj-link" href="https://github.com/BlindMosquito/ForexHelper">
                        <div className="project-content">
                            <div className="proj-header">Forex Helper</div>
                            MetaTrader 4 program that buys and sells currency pairs. <br />
                            Played with it for a while before moving focus away from Forex Trading.
                            The program runs but is not profitable
                        </div>
                    </a>
                </div>
                <div className="project-item item-rustproof">
                    <a proj-link href="https://github.com/BlindMosquito/rustproof">
                        <div className="project-content">
                            <div className="proj-header">RustProof</div>
                            Senior Capstone Project: <br />
                            Plugin for Rust compiler which verifies conditions in functions.
                        </div>
                    </a>
                </div>
            </div>
            <div className="end-lines">
                <BotLine></BotLine> 
            </div>
        </div>;
    }
}

export default Project
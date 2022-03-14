import React from "react";
import './nav.css';
import './links-large.css';
import './links-small.css';
import laptop from '../images/laptop.jpg';
import picture from '../images/drew.jpg';

class Nav extends React.Component {
    render() {
        return <div className="container">
            <div className="laptop">
                <img className="img-laptop" src={laptop} alt="Colorful Laptop"/>
                <div className="link-container">
                    <a href="https://www.gohmanmechanical.com" className="links">
                        <h3 className="link-text">Home</h3>
                    </a>
                    <a href="https://www.gohmanmechanical.com" className="links">
                        <h3 className="link-text">Projects</h3>
                    </a>
                    <a href="https://www.gohmanmechanical.com" className="links">
                        <h3 className="link-text">Experience and Knowledgebase</h3>
                    </a>
                    <a href="https://www.gohmanmechanical.com" className="links">
                        <h3 className="link-text">About Me</h3>
                    </a>
                </div>
                <div className="name">DREW GOHMAN</div>
            </div>
            <div className="picture">
                <img className="img-picture" src={picture} alt="me" />
            </div>
            <div className="email">
                <h2>BlindMosquito@Outlook.com</h2>
            </div>
            <div className="bot-line-left"></div>
            <div className="bot-line-right"></div>
        </div>;
    }
}

export default Nav
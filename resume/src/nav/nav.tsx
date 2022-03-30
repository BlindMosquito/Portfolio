import React from "react";
import './nav.css';
import laptop from '../images/laptop.jpg';
import photo from '../images/drew.jpg';
import Descript from '../descript/descript'
import Links from '../links/links'
import BotLine from '../lines/botline'

class Nav extends React.Component {
    render() {
        return <div className="nav-container" id="nav-container">
            <div className="sub-container">
                <img id="img-laptop" src={laptop} alt="laptop" />
                <Descript name="DREW GOHMAN"></Descript>
                <Links></Links>
            </div>
            <div className="sub-container photo-container">
                <img id="img-photo" src={photo} alt="me" />
            </div>
            <div className="sub-container email-container">
                <div id="email">dagohman@gmail.com.com</div>
                <BotLine></BotLine>
            </div>
        </div>;

    }
}

export default Nav
import React from "react";
import './links.css';

class Links extends React.Component {
    render() {
        return <div className="link-container">
            <a href="#nav-container" className="link">Home</a>
            <a href="#project-title" className="link">Projects</a>
            <a href="#exp-title" className="link">Experience</a>
            <a href="#about-title" className="link">About Me</a>
        </div>;

    }
}

export default Links
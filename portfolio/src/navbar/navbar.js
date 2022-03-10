import React from "react";
import "./navbar.css"

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <a href="#home">Home</a>
                <div className="dropdown">
                    <button className="dropbtn">Projects 
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdownContent">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <a href="#aboutme">About Me</a>
            </div>
        );
    }
}

export default Navbar

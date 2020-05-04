import React, { Component } from 'react';
import {Link, Element} from 'react-scroll';
import '../dev.css';
class DevNavigator extends Component {
    render() {
        return (
                <div className="navigator">
                    <div className="nav-header">
                        <Link to="main" smooth={true}><a href="#MAIN">ENAN</a></Link>
                    </div>
                    <div className="nav-scroller">
                        <Link to="profile" smooth={true}><a href="#PROFILE">PROFILE</a></Link>
                        <Link to="skill" smooth={true}><a href="#SKILL">SKILL</a></Link>
                        <Link to="projects" smooth={true}><a href="#PROJECTS">PROJECTS</a></Link>
                        <Link to="contact" smooth={true}><a href="#CONTACT">CONTACT</a></Link>
                    </div>

                </div>
        );
    };
};

export default DevNavigator;

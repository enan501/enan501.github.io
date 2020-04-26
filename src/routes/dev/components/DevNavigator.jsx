import React, { Component } from 'react';
import {Link, Element} from 'react-scroll';
import DevMain from './DevMain';
import DevProfile from './DevProfile';
import DevSkill from './DevSkill';
import DevProjects from './DevProjects';
import DevContact from './DevContact';
import '../dev.css';
class DevNavigator extends Component {
    render() {
        return (
                <div className="navigator">
                    <div className="nav-header">
                        <Link to="main" smooth={true}>ENAN</Link>
                    </div>
                    <div className="nav-scroller">
                        <Link to="profile" smooth={true}>PROFILE</Link>
                        <Link to="skill" smooth={true}>SKILL</Link>
                        <Link to="projects" smooth={true}>PROJECTS</Link>
                        <Link to="contact" smooth={true}>CONTACT</Link>
                    </div>

                </div>
        );
    };
};

export default DevNavigator;

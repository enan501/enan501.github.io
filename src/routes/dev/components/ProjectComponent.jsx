import React, { useState } from 'react';
import githubLogo from '../../../images/github.png'

import oasis from '../../../images/oasis.jpeg'
import roadline from '../../../images/roadline.jpeg'
import grade from '../../../images/grade.png'
import autopark from '../../../images/autopark.png'
import benefit from '../../../images/benefit.png'
function getImg(key) {
    switch (key) {
        case 1: return <img className="project-image" src={oasis} />
        case 2: return <img className="project-image" src={roadline} />
        case 3: return <img className="project-image" src={autopark} />
        case 4: return <img className="project-image" src={grade} />
        case 5: return <img className="project-image" src={benefit} />
    }
}


const ProjectComponent = (props) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <div className="project-item-wrapper">
            
            <div className="project-item"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>

                {getImg(props.project.key)}
                {isHovering && // hover시 보여줌
                    <div className="project-item-hover">
                        <div className="project-item-content">
                            <h4 className="project-title">{props.project.name}</h4>
                            <p className="project-language">{props.project.language}</p>
                            <p className="project-explain">{props.project.explain}</p>
                            <p className="project-learned">What I especially learned : {props.project.learned}</p>

                            {props.project.link.github !== "" &&
                                <a href={props.project.link.github} className="github-link">
                                    <img src={githubLogo} alt="github-link" />
                                </a>}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProjectComponent;


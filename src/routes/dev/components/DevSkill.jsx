import React, { Component } from 'react';
import '../devSkill.css'
import SkillComponent from './SkillComponent';

const skills = [
    {
        "key": 1,
        "name": "Kotlin",
        "level": 4,
        "keyword": "proficient",
        "explain": "did 3 projects / doing an internship experience"
        // 개이득, 로드라인, 482 / 오아시스
    },
    {
        "key": 2,
        "name": "Python",
        "level": 3,
        "keyword": "competant",
        "explain": "did 1 project (Simple Flask server, Crawling) / teaching Crawling (part time) / had 1 internship experience (Reinforcement learning)"
    },
    
    {
        "key": 3,
        "name": "React.js",
        "level": 1,
        "keyword": "novice",
        "explain": "did 1 small project / doing 1 project"
    }
]
class DevSkill extends Component {
    render() {
        return (
            <div className="skill">
                <h2>Skill</h2>
                {skills.map(skill => {
                    return <SkillComponent key={skill.key} skill={skill} />
                })}

            </div>
        );
    };
};

export default DevSkill;


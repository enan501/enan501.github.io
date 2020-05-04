import React, { Component } from 'react';
import ProjectComponent from './ProjectComponent';
import '../devProjects.css'

// projects = Oasis, RoadLine, 자율주차, 성적알림, 개이득, 482, 알고리즘
const projects = [
    {
        "key": 1,
        "name": "Oasis",
        "language": "Kotlin",
        "image": "../../../images/oasis.jpeg",
        "link": {
            "github": "",
            "appstore":""
        },
        "start": "2020.03",
        "end": "",
        "role":"Android Client 개발",
        "explain": "화장품 성분 분석을 통한 개인화 서비스를 제공하는 어플리케이션입니다.",
        "learned": "Retrofit2, LiveData"
    },
    {
        "key": 2,
        "name": "RoadLine",
        "language": "Kotlin",
        "image": "../../../images/roadline.jpeg",
        "link": {
            "github": "https://github.com/enan501/MP2019_RoadLine"
        },
        "start": "2019.03",
        "end": "2019.06",
        "role":"Android Client 개발",
        "explain": "여행 경로를 시각화해 보여주고, 사진첩과 가계부 기능이 있는 여행 어플리케이션입니다.",
        "learned":"Realm"
    },
    {
        "key": 3,
        "name": "자율주차",
        "language": "Python",
        "image": "../../../images/autopark.png",
        "link": {
            "github": "https://github.com/Adas-Zero/autoparking/tree/master/rl"
        },
        "start": "2019.09",
        "end": "2019.12",
        "role":"Reinforcement learning을 통한 주차 path 결정",
        "explain": "강화학습을 통해 결정된 경로로 차량을 자율 주차시키는 프로젝트입니다.",
        "learned":"OpenAi-Gym, Gazebo"
    },
    {
        "key": 4,
        "name": "성적 뜨면 알려주세요",
        "language": "Java, Python",
        "image": "../../../images/grade.png",
        "link": {
            "github": "https://github.com/enan501/KUGrade"
        },
        "start": "2018.12",
        "end": "2018.12",
        "role":"개인 프로젝트",
        "explain": "학교 포탈 사이트를 ec2에서 크롤링해 변화가 있으면 앱으로 푸쉬 알림을 보내주는 프로젝트입니다.",
        "learned": "AWS EC2, Selenium, FCM"
    },
    {
        "key": 5,
        "name": "개1+1득",
        "language": "Kotlin",
        "image": "../../../images/benefit.png",
        "link": {
            "github": "https://github.com/enan501/6thMiniProject-big-Profit"
        },
        "start": "2019.03",
        "end": "2019.04",
        "role":"Android Client 개발",
        "explain": "편의점 행사 상품을 크롤링해 띄워주는 어플리케이션입니다.",
        "learned": "Retrofit2, Zeplin, DataBinding"
    }
]
class DevProjects extends Component {
    render() {
        return (
            <div className="projects">
                <h1>Projects</h1>
                <div className="project-container">
                    {projects.map(project => {
                        return <ProjectComponent key={project.key} project={project} />
                    })}
                </div>
            </div>
        );
    };
};

export default DevProjects;

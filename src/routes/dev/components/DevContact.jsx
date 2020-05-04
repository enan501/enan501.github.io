import React, { Component } from 'react';
import '../devContact.css'
import githubLogo from '../../../images/github.png'
import facebookLogo from '../../../images/facebook.png'
import instagramLogo from '../../../images/instagram.png'
import tistoryLogo from '../../../images/tistory.png'
import emailLogo from '../../../images/email.png'
import kakaoLogo from '../../../images/kakao.png'
function getLogo(key) {
    switch (key) {
        case 1: return <img className="contact-logo" src={githubLogo} />
        case 2: return <img className="contact-logo" src={tistoryLogo} />
        case 3: return <img className="contact-logo" src={instagramLogo} />
        case 4: return <img className="contact-logo" src={facebookLogo} />
    }
}
const links = [
    {
        "key": 1,
        "name": "github",
        "link": "https://github.com/enan501"
    },
    {
        "key": 2,
        "name": "tistory",
        "link": "https://enant.tistory.com/"
    },
    {
        "key": 3,
        "name": "instagram",
        "link": "https://www.instagram.com/enano_________o/"
    },
    {
        "key": 4,
        "name": "facebook",
        "link": "https://www.facebook.com/profile.php?id=100002100523687"
    }
]
class DevContact extends Component {
    render() {
        return (
            <div className="contact">
                <h1>Contact</h1>
                <div className="contact-content-wrapper">
                    <div className="contact-content">
                        <img className="contact-logo" src={emailLogo} />
                        <span>Email : sudorm-rf@kakao.com</span>
                    </div>
                    <div className="contact-content">
                        <img className="contact-logo" src={kakaoLogo} />
                        <span>Kakaotalk ID : han2258</span>
                    </div>
                </div>
                <div className="contact-link-wrapper">
                    {links.map(link => {
                        return (
                            <a className="contact-link" href={link.link}>
                                {getLogo(link.key)}
                            </a>
                        )
                    })}
                </div>
                <div className="contact-copyright">
                    <p>© Copyright 2020 ENAN React Portfolio page.</p>
                </div>
            </div>
        );
    };
};

export default DevContact;

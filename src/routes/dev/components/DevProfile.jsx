import React, { Component } from 'react';
import '../devProfile.css'
import profileImage from '../../../images/profile.png'
class DevProfile extends Component {
    render() {
        return (
            <div className="profile">
                <div class="left-contents">
                    <h2>About Me</h2>
                    <img className="profile-image" src={profileImage} />
                </div>
                <div class="right-contents">
                    <div class="introduce">
                        <h3>알고싶은 것이 많은 Junior 개발자</h3>
                        <p>새로운 것을 배우는 데에 흥미가 있고, 자기계발에 열정 있습니다.</p>
                        <p>알아가는 것이 재미있는 만큼, 누군가를 가르쳐 주는 것이 재밌습니다.</p>
                        <p>다양한 관심사로  새로운 안목을 지닌 개발자를 목표로 합니다.</p>
                        <p>사회에 도움이 되는, 기여하는 개발자를 지향합니다.</p>
                    </div>
                    <div class="educated">
                        {/* 여기를 깃헙 branch처럼 꾸미는 건 어떨까 */}
                        <h3>이력</h3>
                        <p>2015.03 ~ 건국대학교 소프트웨어학과 재학</p>
                        <p>2019.03 ~ 2019.12 알고리즘 동아리 알프스 회장</p>
                        <p>2020.03 ~ 모루랩스 안드로이드 인턴</p>
                    </div>
                </div>
            </div >
        );
    };
};

export default DevProfile;

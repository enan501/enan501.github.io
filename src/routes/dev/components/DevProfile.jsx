import React, { Component } from 'react';
import '../devProfile.css'
class DevProfile extends Component{
    render(){
        return (
            <div className="profile">
                <div class="left-contents">
                    <h2>About Me</h2>
                </div>
                <div class="right-contents">
                    <div class="introduce">
                        <h3>Android 개발자</h3>
                        <p>설명설명 설명설명설명</p>
                        <p>설명설명 설명설명설명2</p>
                    </div>
                    <div class="educated">
                        {/* 여기를 깃헙 branch처럼 꾸미는 건 어떨까 */}
                        <h3>이력</h3>
                        <p>2015.03 ~ 건국대학교 컴퓨터공학과 재학</p>
                        <p>2020.03 ~ 모루랩스 안드로이드 인턴</p>
                    </div>
                </div>
            </div>
        );
    };
};

export default DevProfile;

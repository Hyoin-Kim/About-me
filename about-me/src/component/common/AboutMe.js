import React from 'react';
import styled from 'styled-components';
import { user } from '../../assets/image';

const AboutMeWrapper = styled.div`
font-family: 'Noto Sans Display', sans-serif;
    background-color : #F7F2E0;
    .profile{
        display : flex;
        justify-content : center;

        &__img{
            margin-right : 20px;
            width : 40px;
            height : 40px;
            display : flex;
            margin-top :10px;
        }

        &__title{
            transition: all 0.5s;
            -webkit-text-stroke: 4px #3e3e42;
            font-variation-settings: "wght" 900, "ital" 1;
            font-size: 50px;
            text-align: center;
            color: transparent;
            font-family: "Meta", sans-serif;
            text-shadow: 10px 10px 0px #d6f4f4,
            15px 15px 0px #F5A9F2,
            20px 20px 0px #CC2EFA,
          cursor: pointer
        }

        &__title:hover {
            font-variation-settings: "wght" 100, "ital" 0;
            text-shadow: none;
        }
    }
`;

const AboutMe = () => {
    return (
        <div>
            <AboutMeWrapper>
                <div className="profile">
                    <img className="profile__img" src={user} alt=""/>
                    <h1 className="profile__title">ABOUT ME</h1>
                </div>
                
                <div>
                    <div>
                        <div>이름 : 김효인</div>
                        <div>생년월일 : 1998년 5월 6일 </div>
                        <div>학력 : 서울여자대학교 정보보호학과 </div>
                        <div>소재시 : 서울특별시 노원구 </div>
                        <div>e-mail : hi980506@naver.com </div>
                        <div>연락처 : 010-3535-7683 </div>
                    </div>
                </div>
            </AboutMeWrapper>         
        </div>
    );
};

export default AboutMe;
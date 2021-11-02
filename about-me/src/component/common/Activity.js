import React from 'react';
import styled from 'styled-components';
import {HyoinProfile, society} from '../../assets/image/index';

const ActivityWrapper = styled.div`
    text-align: -webkit-center;
    .skills{
        display : flex;
        justify-content : center;

        &__img{
            margin-right : 10px;
            width : 50px;
            height : 50px;
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
            cursor: pointer;
            margin-bottom : 20px;
        }

        &__title:hover {
            font-variation-settings: "wght" 100, "ital" 0;
            text-shadow: none;
        }

        &__detail{
            font-family: 'Noto Sans KR', sans-serif;
            align-items :center;
            margin: 10px;
            display : inline-block;
            vertical-align : middle;
            text-align : start;
        }

        &__main{
            display : inline-block;
            justify-content: center;
            flex-wrap: wrap;
            list-style-type: none;
            padding: 0;
        }

        &__date{
            width : 140px;
            margin-left : 40px;
            margin-right : 20px;

            &-ing{
                width : 140px;
                margin-left : 40px;
                margin-right : 20px;
                padding-right : 38px;
            }
        }

        &__profile{
            width : 400px;
            height : 400px;
            display : inline-block;
            margin: 0px 30px 30px 50px;
        }

        &__content{
            margin : 10px;
        }

        &__footer{
            margin : 30px 0px 10px 45px;
            font-size : 22px;
            font-family: 'Noto Sans KR', sans-serif;
            font-weight : bold;
        }

        &__name{
            cursor : pointer;
            transition: all 0.5s;
        }

        &__name:hover{
            color : #eb285d;
            transition: all 0.5s;
            font-size : 25px;
        }
    }
`

const Activity = () => {
    return (
        <div>
            <ActivityWrapper>
                <div>
                    <div className="skills">
                        <img className="skills__img" src={society} alt=""/>
                        <h1 className="skills__title">ACTIVITIES</h1>
                    </div>
                </div>
                <nav classname="skills__main">
                    <img className="skills__profile" src={HyoinProfile} alt="" />
                    <div className="skills__detail">
                        <div className="skills__content"><span className="skills__date">2017.03 - 2022.02</span>서울여자대학교 정보보호학과 입학 및 졸업 예정</div>
                        <div className="skills__content"><span className="skills__date">2018.07 - 2018.08 </span>Programming Guru1 수료 (HTML, PYTHON, UNITY 단기 프로젝트 진행)</div>
                        <div className="skills__content"><span className="skills__date">2018.08 - 2019.12 </span>서울여자대학교 정보보호학과 리눅스 소학회 SWLUG 활동</div>
                        <div className="skills__content"><span className="skills__date">2019.01 - 2019.02 </span>Programming Guru2 수료 (ANDROID 프로젝트 "질문있슈" 진행)</div>
                        <div className="skills__content"><span className="skills__date">2019.07 - 2019.11 </span>네트워크 응용분야 NET Challenge 공모전(은상 수상)</div>
                        <div className="skills__content"><span className="skills__date">2020.07 - 2020.08 </span>예쉬컴퍼니 VR 기획 및 개발 인턴 수료 </div>
                        <div className="skills__content"><span className="skills__date">2021.03 - 2021.07 </span>IT 연합 창업동아리 SOPT 28기 Web 수료</div>
                        <div className="skills__content"><span className="skills__date-ing">2021.09 - ing</span>IT 연합 창업동아리 SOPT 29기 Web 활동 중</div>
                        <div className="skills__footer">
                            <div className="skills__footer-detail"> 스스로 문제를 찾아 고민하고, 정의하고, 해결할 수 있는 능력을 갖춘,</div>
                            <div className="skills__footer-detail"> 서비스 플랫폼 개발자 <span className="skills__name">“김효인”</span> 이 되겠습니다.</div>
                        </div>
                    </div>
                </nav>
                
            </ActivityWrapper>
        </div>
    );
};

export default Activity;
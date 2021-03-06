import React from "react";
import styled from "styled-components";
import { HyoinProfile, society } from "../../assets/image/index";

const ActivityWrapper = styled.div`
    text-align: -webkit-center;
    @media ${({ theme }) => theme.device.tablet} {
        margin-top: 8.5rem;
      }
      @media ${({ theme }) => theme.device.mobile} {
        margin-top: 23.5rem;
      }
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
            width : 50wh;
            height : 50vh;
            display : inline-block;
            margin: 0px 30px 30px 50px;
        }

        &__content{
            margin : 1rem;
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
`;

const Activity = () => {
  return (
    <div>
      <ActivityWrapper>
        <div>
          <div className="skills">
            <img className="skills__img" src={society} alt="" />
            <h1 className="skills__title">ACTIVITIES</h1>
          </div>
        </div>
        <nav className="skills__main">
          <img className="skills__profile" src={HyoinProfile} alt="" />
          <div className="skills__detail">
            <div className="skills__content">
              <span className="skills__date">2017.03 - 2022.02</span>????????????????????? ?????????????????? ?????? ??? ?????? ??????
            </div>
            <div className="skills__content">
              <span className="skills__date">2018.07 - 2018.08 </span>Programming Guru1 ?????? (HTML, PYTHON, UNITY ??????
              ???????????? ??????)
            </div>
            <div className="skills__content">
              <span className="skills__date">2018.08 - 2019.12 </span>????????????????????? ?????????????????? ????????? ????????? SWLUG
              ??????
            </div>
            <div className="skills__content">
              <span className="skills__date">2019.01 - 2019.02 </span>Programming Guru2 ?????? (ANDROID ???????????? ????????????
              ??????)
            </div>
            <div className="skills__content">
              <span className="skills__date">2019.07 - 2019.11 </span>???????????? ???????????? NET Challenge ?????????(?????? ??????)
            </div>
            <div className="skills__content">
              <span className="skills__date">2020.07 - 2020.08 </span>??????????????? VR ?????? ??? ?????? ?????? ??????{" "}
            </div>
            <div className="skills__content">
              <span className="skills__date">2021.03 - 2021.07 </span>IT ?????? ??????????????? SOPT 28??? Web ??????
            </div>
            <div className="skills__content">
              <span className="skills__date-ing">2021.09 - ing</span>IT ?????? ??????????????? SOPT 29??? Web ?????? ???
            </div>
            <div className="skills__footer">
              <div className="skills__footer-detail">
                {" "}
                ????????? ????????? ?????? ????????????, ????????????, ????????? ??? ?????? ????????? ??????,
              </div>
              <div className="skills__footer-detail">
                {" "}
                ????????? ????????? ????????? <span className="skills__name">???????????????</span> ??? ???????????????.
              </div>
            </div>
          </div>
        </nav>
      </ActivityWrapper>
    </div>
  );
};

export default Activity;

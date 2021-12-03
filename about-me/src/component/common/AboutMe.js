import React from "react";
import styled from "styled-components";
import { user, calendar, email, home, school, phone, profile } from "../../assets/image";

const AboutMeWrapper = styled.div`
font-family: 'Noto Sans Display', sans-serif;
    @media ${({ theme }) => theme.device.tablet} {
        margin-top: 8.5rem;
    }
    @media ${({ theme }) => theme.device.mobile} {
        margin-top: 23.5rem;
    }
    .profile{
        display : flex;
        justify-content : center;

        &__img{
            margin-right : 1rem;
            width : 2.5rem;
            height : 2.5rem;
            display : flex;
            margin-top :0.5rem;
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

    .card{
        display : flex;
        justify-content : center;
    
        &__detail{
            margin : 20px;
        }

        &__profile{
            display : inline-block;
            margin : 0px 3rem 3rem 5rem;
            width : 50wh;
            height : 50vh;
        }

        &__main{
            display : inline-block;
        }

        &__img{
            width : 2rem;
            height: 2rem;
            margin-right : 0.8rem;
        }

        &__title{
            display : inline-block;
            font-family: 'Noto Sans KR', sans-serif;
            font-weight : bold;
            
        }
        
        &__content{
            display : inline-block;
            font-family: 'Noto Sans KR', sans-serif;
        }

        &__group{
            padding-top : 2rem;
            padding-bottom: 2rem;
        }

        &__hash{
            font-family: 'Noto Sans KR', sans-serif;
            padding : 1rem;
            font-size : 1.2rem;
            cursor : pointer;
            transition: all 0.5s;
        }

        &__hash:hover{
            color : #eb285d;
            transition: all 0.5s;
            font-size : 22px;
        }
    }

    .main{
        display : flex;
        justify-content : center;
        margin-top : 3rem;
    }
`;

const AboutMe = () => {
  return (
    <>
      <AboutMeWrapper>
        <div className="profile">
          <img className="profile__img" src={user} alt="" />
          <h1 className="profile__title">ABOUT ME</h1>
        </div>
        <div className="main">
          <img className="card__profile" src={profile} alt=" " />
          <div className="card__main">
            <div className="card__detail">
              <img className="card__img" src={user} alt="" />
              <div className="card__title">이름 : </div>
              <div className="card__content"> 김효인</div>
            </div>
            <div className="card__detail">
              <img className="card__img" src={calendar} alt="" />
              <div className="card__title">생년월일 : </div>
              <div className="card__content"> 1998년 5월 6일</div>
            </div>
            <div className="card__detail">
              <img className="card__img" src={school} alt="" />
              <div className="card__title">학력 : </div>
              <div className="card__content">서울여자대학교 정보보호학과</div>
            </div>
            <div className="card__detail">
              <img className="card__img" src={home} alt="" />
              <div className="card__title">소재지 : </div>
              <div className="card__content">서울특별시 노원구</div>
            </div>
            <div className="card__detail">
              <img className="card__img" src={email} alt="" />
              <div className="card__title">e-mail : </div>
              <div className="card__content">hi980506@naver.com</div>
            </div>
            <div className="card__detail">
              <img className="card__img" src={phone} alt="" />
              <div className="card__title">연락처 : </div>
              <div className="card__content">010-3535-7683</div>
            </div>
            <div className="card__group">
              <span className="card__hash">#서비스플랫폼개발자</span>
              <span className="card__hash">#밝고긍정적</span>
              <span className="card__hash">#활발한소통능력</span>
              <span className="card__hash">#도전적</span>
              <span className="card__hash">#기획은취미</span>
            </div>
          </div>
        </div>
      </AboutMeWrapper>
    </>
  );
};

export default AboutMe;

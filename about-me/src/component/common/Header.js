import React from 'react';
import styled from 'styled-components';
import { backgroundImg,profile,profile3 } from '../../assets/image';
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Jumbotron } from 'react-bootstrap';

const HeaderWrapper = styled.div`

@font-face {
    src: url("https://www.axis-praxis.org/fonts/webfonts/MetaVariableDemo-Set.woff2")
      format("woff2");
    font-family: "Meta";
    font-style: normal;
    font-weight: normal;
  }
  
    .body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #8357eb;
        width: 100vw;
        height: 100vh;
    }
    
    .header__title {
        transition: all 0.5s;
        -webkit-text-stroke: 4px #07bccc;
        font-variation-settings: "wght" 900, "ital" 1;
        font-size: 80px;
        text-align: center;
        color: transparent;
        font-family: "Meta", sans-serif;
        text-shadow: 10px 10px 0px #d6f4f4,
        15px 15px 0px #F5A9F2,
        20px 20px 0px #CC2EFA,
      cursor: pointer;
    }
    
    .header__title:hover {
        font-variation-settings: "wght" 100, "ital" 0;
        text-shadow: none;
    }

    .header{
        font-family: 'Noto Sans Display', sans-serif;
        &__main{
            position: absolute;
            margin-top : 30px;
            margin-left : 80px;
            margin-right : 30px;
            display : flex;
            justify-content : space-between;
            z-index: 2;
        }

        &__title{
            display : flex;
            align-items : center;
        }

        &__content{
            display: inline-flex;
            position: relative;
            overflow: hidden;
            max-width: 100%;
            padding: 0 20px;
            border-radius: 40px;
            box-shadow: 0 10px 40px rgba(159, 162, 177, .8);
            margin-left : 100px;
            height : 100px;
            align-items : center;
            margin-top : 20px;
            
        }

        &__menu{
            color: #83818c;
            padding: 20px;
            text-decoration: none;
            transition: .3s;
            margin: 0 6px;
            z-index: 1;
            font-family: 'DM Sans', sans-serif;
            font-weight: 500;
            font-size : 25px;
            position: relative;
        }

        &__menu:before{
            content: "";
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 100%;
            height: 5px;
            background-color: #dfe2ea;
            border-radius: 8px 8px 0 0;
            opacity: 0;
            transition: .3s;
        }

        &__menu:not(.is-active):hover:before {
            opacity: 1;
            bottom: 0;
        }

        &__menu:not(.is-active):hover { color: #333; }
    
    }

    font-family: 'Noto Sans Display', sans-serif;
    .background{
        display: flex;
        width : 100%;
        opacity : 0.3;
        z-index : 0;
    }

    .middle{
        &__img{
            position:relative;
            display : flex;
            opacity : 0.2;
            width: 100%;
            height : 600px;
        }
        &__text{
            font-family: 'Do Hyeon', sans-serif;
            margin-top : 60px;
            color: black;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            width: 80%;
            padding: 20px;
            text-align: center;
        }

        &__profile{
            width : 200px;
            height: 200px;
            display : inline-block;
        }

        &__content{
            display : inline-block;  
        }

        &__detail{
            display: inline-block;
        }
    }


    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
        html, body { height: 100%}

        body {
        align-items: center;
        background: #642B73;
        background: linear-gradient(to bottom, #C6426E, #642B73);
        display: flex;
        font-family: 'Open Sans', sans;
        justify-content: center;
        overflow: hidden;
        perspective: 1800px;
        text-align: center;
        margin: 0 20px;
        }

        h1 {
        color: #3e3e42;
        font-size:70px;
        font-weight: 800;
        letter-spacing: -1px;
        margin-bottom: 30px;
        transform: translateZ(35px);
        }

        h3 {
        color: #eb285d;
        font-size: 30px;
        margin-bottom: 6px;
        transform: translateZ(25px);
        }

`;


const Header = () => {
    return (
        <>
        <HeaderWrapper>
            <header className="header">
                <div className="header__main">
                    <h1 className="header__title">Hyoin Kim</h1>
                    <div className="header__content">
                        <a href="#" className="header__menu">HOME</a>
                        <a href="#" className="header__menu">ABOUT ME</a>
                        <a href="#" className="header__menu">SKILLS</a>
                        <a href="#" className="header__menu">PROJECTS</a>
                        <a href="#" className="header__menu">CONTACT</a>
                        <span class="nav-indicator"></span>
                    </div>
                </div>
            </header>
        </HeaderWrapper>
        <HeaderWrapper>
            <Navbar bg="light" expand="lg" className="">
            <img className="middle__img" src={backgroundImg} alt=""/>
                <div className="middle">
                        <div class="middle__text">
                            <div className="middle__content">
                                <div className="middle__detail">
                                    <h3>Web Developer</h3>
                                    <h1>김 효 인</h1>
                                    <h2>안녕하세요</h2>
                                    <h2>변화와 도전을 통해 끊임없이 부족함을 채우고 성장하며,</h2>
                                    <h2>세상에 즐거움을 주고싶은 개발자 입니다.</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </Navbar>
        </HeaderWrapper>
        </>
    );
};

export default Header;
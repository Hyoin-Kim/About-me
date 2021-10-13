import React from 'react';
import styled from 'styled-components';
import { backgroundImg,profile,profile3 } from '../../assets/image';
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Jumbotron } from 'react-bootstrap';

const HeaderWrapper = styled.div`

@import url(https://fonts.googleapis.com/css?family=Signika:700,300,600);

html, body { height: 100%; }
body { display: flex; justify-content: center; align-items: center; margin:20px 0; text-align:center; background:beige; overflow:hidden; }

h1 {
 font-size:5em;
 font:bold 7.5vw/1.6 'Signika', sans-serif;
 user-select:none;
}

h1 span { display:inline-block; animation:float .2s ease-in-out infinite; }
 @keyframes float {
  0%,100%{ transform:none; }
  33%{ transform:translateY(-1px) rotate(-2deg); }
  66%{ transform:translateY(1px) rotate(2deg); }
}
body:hover span { animation:bounce .6s; }
@keyframes bounce {
  0%,100%{ transform:translate(0); }
  25%{ transform:rotateX(20deg) translateY(2px) rotate(-3deg); }
  50%{ transform:translateY(-20px) rotate(3deg) scale(1.1);  }
}

span:nth-child(4n) { color:hsl(50, 75%, 55%); text-shadow:1px 1px hsl(50, 75%, 45%), 2px 2px hsl(50, 45%, 45%), 3px 3px hsl(50, 45%, 45%), 4px 4px hsl(50, 75%, 45%); }
span:nth-child(4n-1) { color:hsl(135, 35%, 55%); text-shadow:1px 1px hsl(135, 35%, 45%), 2px 2px hsl(135, 35%, 45%), 3px 3px hsl(135, 35%, 45%), 4px 4px hsl(135, 35%, 45%); }
span:nth-child(4n-2) { color:hsl(155, 35%, 60%); text-shadow:1px 1px hsl(155, 25%, 50%), 2px 2px hsl(155, 25%, 50%), 3px 3px hsl(155, 25%, 50%), 4px 4px hsl(140, 25%, 50%); }
span:nth-child(4n-3) { color:hsl(30, 65%, 60%); text-shadow:1px 1px hsl(30, 45%, 50%), 2px 2px hsl(30, 45%, 50%), 3px 3px hsl(30, 45%, 50%), 4px 4px hsl(30, 45%, 50%); }

h1 span:nth-child(2){ animation-delay:.05s; }
h1 span:nth-child(3){ animation-delay:.1s; }
h1 span:nth-child(4){ animation-delay:.15s; }
h1 span:nth-child(5){ animation-delay:.2s; }
h1 span:nth-child(6){ animation-delay:.25s; }
h1 span:nth-child(7){ animation-delay:.3s; }
h1 span:nth-child(8){ animation-delay:.35s; }
h1 span:nth-child(9){ animation-delay:.4s; }
h1 span:nth-child(10){ animation-delay:.45s; }
h1 span:nth-child(11){ animation-delay:.5s; }
h1 span:nth-child(12){ animation-delay:.55s; }
h1 span:nth-child(13){ animation-delay:.6s; }
h1 span:nth-child(14){ animation-delay:.65s; }

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
        font-family: 'Noto Sans KR', sans-serif;
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
            height : 80px;
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
            font-family: 'Noto Sans KR', sans-serif;
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
            background-color: #F78181;
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
            opacity : 0.6;
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
        font-family: 'Noto Sans KR', sans-serif;
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

        h2{
            font-family: 'Noto Sans KR', sans-serif;
        }

`;


const Header = () => {
    return (
        <>
        <HeaderWrapper>
            <header className="header">
                <div className="header__main">
                <h1><span>A</span>
                    <span>B</span>
                    <span>O</span>
                    <span>U</span>
                    <span>T</span>
                    <span>-</span>
                    <span>H</span>
                    <span>Y</span>
                    <span>O</span>
                    <span>I</span>
                    <span>N</span>

                    <span>!</span>
                </h1>
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
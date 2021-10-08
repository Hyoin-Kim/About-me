import React from 'react';
import styled from 'styled-components';
import { backgroundImg } from '../../assets/image';
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Jumbotron } from 'react-bootstrap';

const HeaderWrapper = styled.div`
    .header{
        font-family: 'Noto Sans Display', sans-serif;
        &__detail{
            margin-top : 20px;
            margin-left : 30px;
            margin-right : 30px;
            display : flex;
            justify-content : space-between;
        }

        &__title{
            display : flex;
        }

        &__content{
            display : flex;
        }

        &__menu{
            display : flex;
            border : none;
            background-color : transparent;
            margin : 20px;
        }

    }
`;

const MiddleWrapper = styled.div`
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
            opacity : 0.3;
            width: 100%;
        }
        &__text{
            font-family: 'Do Hyeon', sans-serif;
            color: black;
            font-weight: bold;
            border: 3px solid black;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            width: 80%;
            padding: 20px;
            text-align: center;
        }
    }

`;


const Header = () => {
    return (
        <>
        <HeaderWrapper>
            <header className="header">
                <div className="header__detail">
                    <h1 className="header__title">About Hyoin</h1>
                    <div className="header__content">
                        <button className="header__menu">HOME</button>
                        <button className="header__menu">ABOUT ME</button>
                        <button className="header__menu">SKILLS</button>
                        <button className="header__menu">PROJECTS</button>
                        <button className="header__menu">CONTACT</button>
                    </div>
                </div>
            </header>
        </HeaderWrapper>
        <MiddleWrapper>
            <Navbar bg="light" expand="lg" className="">
                <div className="middle">
                    <img className="middle__img" src={backgroundImg} alt=""/>
                    <div class="middle__text">
                        <h2>김효인</h2>
                        <h1>Web Developer</h1>
                        <div>안녕하세요</div>
                        <div>밝은 에너지와 항상 긍정적으로 임하는</div>
                        <div>세상에 즐거움을 주고싶은 개발자 입니다.</div>
                    </div>
                </div>
            </Navbar>
        </MiddleWrapper>
        </>
    );
};

export default Header;
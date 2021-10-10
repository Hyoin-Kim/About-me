import React from 'react';
import { github,gmail,facebook,instagram } from '../../assets/image/index';
import styled from 'styled-components';


const FooterWrapper = styled.div`
    .footer{
        bottom : 0;
        width : 100%;
        height : 200px;
        position:relative;
        flex-direction : column;
        background-color : #FACC2E;

        &__main{
            text-align: center;
            position : absolute;
            justify-content : center;
            left : 43%;
        }

        &__icon{
            margin-top : 50px;
        }
        &__btn{
            border : none;
            background-color : transparent;
        }

        &__img{
            width : 50px;
            height : 50px;
        }

        &__content{
            margin-top : 20px;
            text-align : center;
            font-family: 'Noto Sans Display', sans-serif;
        }
    }
`;




const Footer = () => {
    return (
        <>
        <FooterWrapper>
            <footer className="footer">
                <div className="footer__main">
                    <div className="footer__icon">
                        <button className="footer__btn"><img className="footer__img" src={github} alt=""/></button>
                        <button className="footer__btn"><img className="footer__img" src={gmail} alt=""/></button>
                        <button className="footer__btn"><img className="footer__img" src={instagram} alt=""/></button>
                        <button className="footer__btn"><img className="footer__img" src={facebook} alt=""/></button>
                    </div>
                    <div className="footer__content">© 2021. Kim Hyo in . All rights reserved.</div>
                </div>
            </footer>
        </FooterWrapper>
      </>
    );
};

export default Footer;
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
            margin : 5px;
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
                        <a className="footer__btn" href="https://github.com/Hyoin-Kim"><img className="footer__img" src={github} alt=""/></a>
                        <a className="footer__btn" href="https://github.com/Hyoin-Kim"><img className="footer__img" src={gmail} alt=""/></a>
                        <a className="footer__btn" href="https://www.instagram.com/luv.hi_"><img className="footer__img" src={instagram} alt=""/></a>
                        <a className="footer__btn" href="https://www.facebook.com/profile.php?id=100006649662996"><img className="footer__img" src={facebook} alt=""/></a>
                    </div>
                    <div className="footer__content">© 2021. Kim Hyo in . All rights reserved.</div>
                </div>
            </footer>
        </FooterWrapper>
      </>
    );
};

export default Footer;
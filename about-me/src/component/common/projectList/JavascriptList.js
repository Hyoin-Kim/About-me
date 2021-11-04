import {React,useState} from 'react';
import styled from 'styled-components';
import { Carousel} from 'react-bootstrap';
import { kikiImg } from '../../../assets/image';
import {closeIcon, js, jsSlider,jsSlider2,jsSlider3,jsSlider4,jsSlider5} from '../../../assets/image/index';


const JqueryWrapper = styled.div`
    .jquery{
        font-family: 'Noto Sans KR', sans-serif;
        display : flex;
        justify-content : center;

        &__main{
            font-family: 'Noto Sans KR', sans-serif;
            display :flex;
            margin : 1px;
            justify-content : center;
            cursor : pointer;
            border: 1px solid;
            width : 300px;
            height : 300px;

        }
        &__img{
            transition: all 0.5s;
            opacity : 0.5;
        }
        &__img:hover{
            transition: all 0.5s;
            opacity: 1;
        }
        &__title{
            font-weight : bold;
            position:absolute;
            z-index : 1;
        }

    }
`;

const ModalWrapper = styled.div`
        position: fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        margin:auto;
        border-width: 1px;
        border-style: solid;
        border-radius: 16px;
        border-color:black;
        background-color: white;
        width: 700px;
        height: 800px;

        .closeIcon{
            width:20px;
            float:right;
            margin : 10px;
            z-index :1;
            cursor :pointer;
        }

        .o2{
            &__slider{
                width:698px;
            }
        }

        .sop__slider{
            width:698px;
            border-radius: 16px;
        }

        .modal{
            &__title{
                font-family: 'Noto Sans KR', sans-serif;
                font-size : 25px;
                font-weight : bold;
                margin : 5px;
            }
            &__subtitle{
                font-family: 'Noto Sans KR', sans-serif;
                font-size : 17px;
                margin: 10px 0px 0px 5px;
            }
        }

        p{
            font-family: 'Noto Sans KR', sans-serif;
            margin-left : 10px;
            margin-right : 10px;
        }
`;

const Modal = styled.div`
        position: fixed;
        z-index : 100;
          position : fixed;
          top : 0;
          left : 0;
          overflow-y: scroll; 
          width: 100%;

`;
const JavascriptList = () => {

    const [ghibliModal,setGhibliModal] = useState(false);
    function jqueryHandleModal(){
        setGhibliModal(true);

    }

    return (
            <JqueryWrapper>
                    <div className="jquery">
                        <div className="jquery__main">
                            <img className="jquery__img" src={js} alt="" onClick={()=>{jqueryHandleModal()}}/>
                            <span className="jquery__title">Vanilla JS Project</span>
                        </div>
                    </div>

                    {
                            ghibliModal===true
                            ?
                            <Modal>
                                <ModalWrapper>
                                    <Carousel>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={jsSlider} alt=""/>
                                    </Carousel.Item>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={jsSlider4} alt=""/>
                                    </Carousel.Item>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={jsSlider5} alt=""/>
                                    </Carousel.Item>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={jsSlider2} alt=""/>
                                    </Carousel.Item>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={jsSlider3} alt=""/>
                                    </Carousel.Item>
                                    </Carousel>
                                    <div>
                                        <h2 className="modal__title">Vanilla JS 기반 웹 프로젝트</h2>
                                        <h5 className="modal__subtitle">Weather App, Paint App, To do List, Velog Clone, Smartphone-emulation</h5>
                                        <hr className="modal__hr"/>
                                        <p>순수 자바스크립트 하나로 개발한 토이 프로젝트 입니다.</p>
                                        <p>Weather App(#1), Paint App(#2), To do List(#3), Velog Clone(#4), Smartphone-emulation(#5) </p>
                                        <p>등 로컬스토리지를 활용하여 개발을 진행하였습니다.</p>
                                        <p>Smartphone-emulation(#5)은 알람(추가/삭제), 메모(추가/삭제/상세보기), 갤러리 기능을 구현하였습니다.</p>
                                        <p>이외의 토이 프로젝트 기능은 Github을 통해 확인 가능합니다.</p>
                                    </div>
                                    <img className="closeIcon" src={closeIcon} alt="" onClick={()=>{setGhibliModal(false)}}/>
                                </ModalWrapper>
                            </Modal>
                            :
                            null
                        }
            </JqueryWrapper>
        );
    };


export default JavascriptList;
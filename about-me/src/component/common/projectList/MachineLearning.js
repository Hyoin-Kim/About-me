import {React,useState} from 'react';
import styled from 'styled-components';
import { Carousel} from 'react-bootstrap';
import {closeIcon,netChallenge, netChallenge3,netChallenge4,netChallenge5,netChallenge6,netChallenge7,netChallenge8, kikiSlider,kikiSlider2,kikiSlider3,kikiSlider4,kikiSlider5} from '../../../assets/image/index';


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
const MachineLearning = () => {

    const [ghibliModal,setGhibliModal] = useState(false);
    function jqueryHandleModal(){
        setGhibliModal(true);

    }

    return (
            <JqueryWrapper>
                    <div className="jquery">
                        <div className="jquery__main">
                            <img className="jquery__img" src={netChallenge} alt="" onClick={()=>{jqueryHandleModal()}}/>
                            <span className="jquery__title">Net Challenge 공모전</span>
                        </div>
                    </div>

                    {
                            ghibliModal===true
                            ?
                            <Modal>
                                <ModalWrapper>
                                    <Carousel>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={netChallenge3} alt=""/>
                                    </Carousel.Item>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={netChallenge8} alt=""/>
                                    </Carousel.Item>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={netChallenge4} alt=""/>
                                    </Carousel.Item>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={netChallenge5} alt=""/>
                                    </Carousel.Item>
                                    </Carousel>
                                    <div>
                                        <h2 className="modal__title">Net Challenge 네트워크 응용분야 공모전</h2>
                                        <h5 className="modal__subtitle">드론 촬영물에서의 개인정보 보호를 위한 AI기반 클라우드 서비스</h5>
                                        <hr className="modal__hr"/>
                                        <p>개인정보 보호를 위한 영상에 행인이 포함될 때 자동 Masking 처리 진행하도록 개발, 구축하였습니다.</p>
                                        <p>1. 특정 인물을 제외한 사람 객체 Masking 작업(#3)   2. 모든 사람 객체 Masking 작업(#4)</p>
                                        <p>SDI Public Cloud 서버로 Ubuntu를 활용하여 Python, Tensorflow, OpenCV 환경 구축하였습니다.</p>
                                        <p>라즈베리파이 OS를 구축하고 카메라를 연결해 실시간 촬영물을 받아오도록 소켓통신을 진행하였습니다.</p>
                                        <p>촬영되고 있는 영상을 frame 단위로 잘라 실시간으로 서버에 전송하고, 사용자는 웹을 통해 영상을 확인할 수 있습니다.</p>
                                        <p>아이디어 기획 및 개발(리눅스 서버 구축, 특정인 데이터 학습, python 개발, 웹구축)을 담당하였으며 은상을 수상하였습니다.</p>
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


export default MachineLearning;
import {React,useState} from 'react';
import styled from 'styled-components';
import { Carousel} from 'react-bootstrap';
import {closeIcon, o2Img,o2SliderImg,sopkathonImg,sopkathonSlider,sopkathonSlider2} from '../../../assets/image/index';

const ProjectWrapper = styled.div`
    .react{
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

const ReactProject = () => {
    const [o2Modal,setO2Modal] = useState(false);
    const [sopkathonModal, setSopkathonModal] = useState(false);

    function o2HandleModal(){
        setO2Modal(true);
    }

    function sopkathonHandleModal(){
        setSopkathonModal(true);
    }
    return (
        <div>
            <ProjectWrapper>
                <div className="react">
                    <div className="react__main">  
                        <img className="react__img"src={o2Img} alt="" onClick={()=>{o2HandleModal()}}/>
                        <span className="react__title">Open Together</span>
                    </div>
                    <div className="react__main">
                        <img className="react__img"src={sopkathonImg} alt="" onClick={()=>{sopkathonHandleModal()}}/>
                        <span className="react__title">궁금붕어</span>
                    </div>
                    {
                        o2Modal===true
                        ?
                        <Modal>
                            <ModalWrapper>
                            <Carousel>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={o2SliderImg} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={sopkathonSlider2} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={o2SliderImg} alt=""/>
                                </Carousel.Item>
                                </Carousel>
                                <h2>창업가들을 위한 회고 커뮤니티 사이트, Open Together</h2>
                                <h5>타인과의 정보를 공유하여 성장하고 마침내 성공적인 결과를 만들어 낼 수 있는 가치 추구</h5>
                                <hr/>
                                <p></p>
                                <img className="closeIcon" src={closeIcon} alt="" onClick={()=>{setO2Modal(false)}}/>
                            </ModalWrapper>
                        </Modal>
                        :
                        null
                    }
                    {
                        sopkathonModal===true
                        ?
                        <Modal>
                            <ModalWrapper>
                                <Carousel>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={sopkathonSlider} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={sopkathonSlider2} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={o2SliderImg} alt=""/>
                                </Carousel.Item>
                                </Carousel>
                                <div>
                                    창업가들을 위한 회고 커뮤니티 사이트,Open Together
                                </div>
                                <img className="closeIcon" src={closeIcon} alt="" onClick={()=>{setSopkathonModal(false)}}/>
                            </ModalWrapper>
                        </Modal>
                        :
                        null
                    }
                </div>
            </ProjectWrapper>
        </div>
    );
};

export default ReactProject;
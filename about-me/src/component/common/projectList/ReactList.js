import {React,useState} from 'react';
import styled from 'styled-components';
import { Carousel} from 'react-bootstrap';
import {closeIcon,aboutmeSlider,aboutMe, o2Img,o2SliderImg,
    o2SliderImg2,o2SliderImg3,o2SliderImg4,o2SliderImg5,o2SliderImg6,
    o2SliderImg7,o2SliderImg8,sopkathonImg,sopkathonSlider,sopkathonSlider2,
    sopkathonSlider3, toyproject,diaryApp,diaryApp2,shoppingmall,shoppingmall2,githubSlider} from '../../../assets/image/index';

const ProjectWrapper = styled.div`
    .react{
        font-family: 'Noto Sans KR', sans-serif;
        display : flex;
        justify-content : center;

        &__main{
            font-family: 'Noto Sans KR', sans-serif;
            display :flex;
            margin : 10px;
            justify-content : center;
            cursor : pointer;
            width : 300px;
            height : 300px;

        }
        &__img{
            transition: all 0.5s;
            opacity : 0.5;
            border-radius : 20px;
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
        background-color: white;
        width: 700px;
        height: 800px;
        z-index :1;

        .closeIcon{
            width:20px;
            float :right;
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
                font-size : 17px;
                margin: 10px 0px 0px 5px;
            }
            &__o2Title{
                font-size : 20px;
                font-weight : bold;
            }
        }

        p{
            margin-left : 10px;
            margin-right : 10px;
            text-align : start;
        }
        span{
            color : #eb285d;
        }
`;

const Modal = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index :1;
    overflow:hidden;
`;

const ReactProject = () => {
    const [o2Modal,setO2Modal] = useState(false);
    const [sopkathonModal, setSopkathonModal] = useState(false);
    const [aboutmeModal,setAboutmeModal] = useState(false);
    const [toyprojectModal,setToyprojectModal] = useState(false);

    function o2HandleModal(){
        setO2Modal(true);
    }

    function sopkathonHandleModal(){
        setSopkathonModal(true);
    }
    function aboutmeHandleModal(){
        setAboutmeModal(true);
    }
    function toyprojectHandleModal(){
        setToyprojectModal(true);
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
                    <div className="react__main">
                        <img className="react__img"src={aboutMe} alt="" onClick={()=>{aboutmeHandleModal()}}/>
                        <span className="react__title">About Me</span>
                    </div>
                    <div className="react__main">
                        <img className="react__img"src={toyproject} alt="" onClick={()=>{toyprojectHandleModal()}}/>
                        <span className="react__title">Toy Project</span>
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
                                    <img className="sop__slider"src={o2SliderImg2} alt=""/>
                                    </Carousel.Item>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={o2SliderImg5} alt=""/>
                                    </Carousel.Item>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={o2SliderImg3} alt=""/>
                                    </Carousel.Item>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={o2SliderImg4} alt=""/>
                                    </Carousel.Item>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={o2SliderImg6} alt=""/>
                                    </Carousel.Item>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={o2SliderImg7} alt=""/>
                                    </Carousel.Item>
                                    <Carousel.Item variant="dark">
                                    <img className="sop__slider"src={o2SliderImg8} alt=""/>
                                    </Carousel.Item>
                                </Carousel>
                                <div className="text">
                                    <h2 className="modal__title">창업가들을 위한 회고 커뮤니티 사이트, Open Together</h2>
                                    <h5 className="modal__subtitle">타인과의 정보를 공유하여 성장하고 마침내 성공적인 결과를 만들어 낼 수 있는 가치 추구</h5>
                                    <hr className="modal__hr"/>
                                    <p>창업가들, 예비창업가들의 앞으로 펼쳐질 창업을 위한 <span className="modal__o2Title">회고 커뮤니티 사이트</span>입니다.</p>
                                    <p>LearnMyself를 통해 회고 이야기를 공유할 수 있고, ShareTogether을 통해 창업가들의 성공 스토리를 공유할 수 있습니다.</p>
                                    <p><span>기획,디자인,서버,웹파트원과 협업한 장기 프로젝트</span>이며, 지금도 꾸준히 개발, QA, 운영하고 있습니다.</p>
                                    <p><span>React, Typescript</span>로 개발하였으며, 리팩토링과 함께 <span>Atomic Design와 NextJS </span>적용하였습니다.</p>
                                    <p>메인페이지(#1), LearnMyself(#2), ShareTogether(#3), 마이페이지(#4), 관리자 페이지(#7, #8) 등 약 20개의 뷰 구현하였으며  
                                        <span className="modal__o2Title"> 최우수상</span>을 수상하였습니다.</p>
                                </div>
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
                                <img className="sop__slider"src={sopkathonSlider3} alt=""/>
                                </Carousel.Item>
                                </Carousel>
                                <div className="text">
                                    <h2 className="modal__title">나만의 일기 작성하는, 궁금붕어</h2>
                                    <h5 className="modal__subtitle">오늘 뭐했붕어? 삼...이...일..... 땡!!! 오늘 있었던 일 3초 안에 대답 못하면 기억 조작!</h5>
                                    <hr className="modal__hr"/>
                                    <p>오늘 하루에 대한 질문이 날아오면 3초안에 대답해야하는 <span className="modal__o2Title">나만의 일기 웹서비스</span> 입니다.</p>
                                    <p>게임 시작과 함게 질문, 3초안에 대답을 못할시 랜덤 답변이 주어지며, 결과 이미지에 대한 저장 및 그룹 공유가 가능합니다.</p>
                                    <p><span>기획,디자인,서버,웹파트원과 협업한 무박2일 해커톤 프로젝트</span>이며, <span> '기억'을 주제로' 아이데이션 뿐만 아니라 기획 일부</span>에도 참여하였습니다.</p>
                                    <p><span>React, Javascript를 활용</span>하여 개발하였으며, 끊임없는 소통과 협업을 통해 <span className="modal__o2Title">대상</span>을 수상하였습니다.</p>
                                </div>
                                <img className="closeIcon" src={closeIcon} alt="" onClick={()=>{setSopkathonModal(false)}}/>
                            </ModalWrapper>
                        </Modal>
                        :
                        null
                    }
                    {
                        aboutmeModal===true
                        ?
                        <Modal>
                            <ModalWrapper>
                                <Carousel>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={aboutmeSlider} alt=""/>
                                </Carousel.Item>
                                </Carousel>
                                <div className="text">
                                    <h2 className="modal__title">나만의 포트폴리오, About Me</h2>
                                    <h5 className="modal__subtitle">간단한 자기소개, 인적 사항, 보유 기술 스택, 프로젝트/협업 경험, GitHub/velog 링크 등</h5>
                                    <hr className="modal__hr"/>
                                    <p>포트폴리오 용도로 제작한 <span className="modal__o2Title">React/JS 기반의 웹 사이트</span>입니다.</p>
                                    <p>지금 보고 있는 웹 사이트에 해당합니다.</p>
                                    <p>프론트엔드 공부와 더불어 배포 경험도 해볼 수 있었던 프로젝트 입니다. </p>
                                    <p><span>React, Javascript, bootstrap를 활용</span>하여 개발하였습니다.</p>
                                    <p></p>
                                    <p></p>
                                </div>
                                <img className="closeIcon" src={closeIcon} alt="" onClick={()=>{setAboutmeModal(false)}}/>
                            </ModalWrapper>
                        </Modal>
                        :
                        null
                    }
                    {
                        toyprojectModal===true
                        ?
                        <Modal>
                            <ModalWrapper>
                                <Carousel>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={diaryApp} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={diaryApp2} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={shoppingmall} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={shoppingmall2} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={githubSlider} alt=""/>
                                </Carousel.Item>
                                </Carousel>
                                <div>
                                    <h2 className="modal__title">개인 프로젝트 공부를 위한 Toy Project</h2>
                                    <h5 className="modal__subtitle">Diary App, Shopping mall, Github profile finder, Clone Coding 등 진행 </h5>
                                    <hr className="modal__hr"/>
                                    <p>IT 연합 창업동아리 SOPT 세미나, React 스터디에서 진행한 <span className="modal__o2Title"> 웹 사이트 리스트</span> 입니다.</p>
                                    <p>다이어리 앱(#1,#2), Ghibli 굿즈 쇼핑몰(#3,#4), Github profile finder(#5), Folin Clone Coding(#6) 등 꾸준히 토이 프로젝트를 진행하였습니다.</p>
                                    <p>React 공부를 중점적으로 하여 스터디와 세미나를 통해 코드리뷰 등 함께 공부하고 공유할수 있었습니다.</p>
                                    <p><span>React, Javascript를 활용하여 개발하였으며, 프론트엔드의 전반적인 공부를 하는데 좋은 경험</span>이 되었습니다.</p>
                                </div>
                                <img className="closeIcon" src={closeIcon} alt="" onClick={()=>{setToyprojectModal(false)}}/>
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
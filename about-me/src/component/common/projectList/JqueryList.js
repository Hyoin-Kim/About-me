import {React,useState} from 'react';
import styled from 'styled-components';
import { Carousel} from 'react-bootstrap';
import { kikiImg } from '../../../assets/image';
import {closeIcon, kikiSlider,kikiSlider2,kikiSlider3,kikiSlider4,kikiSlider5} from '../../../assets/image/index';


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

const JqueryList = () => {

    const [ghibliModal,setGhibliModal] = useState(false);
    function jqueryHandleModal(){
        setGhibliModal(true);
    }
    return (
        <JqueryWrapper>
                <div className="jquery">
                    <div className="jquery__main">
                        <img className="jquery__img" src={kikiImg} alt="" onClick={()=>{jqueryHandleModal()}}/>
                        <span className="jquery__title">Ghibli Blog</span>
                    </div>
                </div>

                {
                        ghibliModal===true
                        ?
                        <Modal>
                            <ModalWrapper>
                                <Carousel>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={kikiSlider} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={kikiSlider2} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={kikiSlider3} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={kikiSlider4} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item variant="dark">
                                <img className="sop__slider"src={kikiSlider5} alt=""/>
                                </Carousel.Item>
                                </Carousel>
                                <div>
                                    <h2 className="modal__title">친구들과 소통하고 공유할수 있는 Ghibli Blog</h2>
                                    <h5 className="modal__subtitle">Studio Ghibli 테마 기반의 게시판, 앨범 등 타인과 소통가능한 웹서비스 입니다.</h5>
                                    <hr className="modal__hr"/>
                                    <p>프론트단에서 JQuery를 활용한 Javascript, 백엔드의 laravel 프레임워크를 활용한 php언어로 개발하였습니다.</p>
                                    <p>앨범(#2), 게시판(#3), 친구추가(#4), 메세지함(#5), 게시물 좋아요/싫어요, 댓글 등의 기능 구현하였습니다.</p>
                                    <p>전체적인 웹 페이지 기획 및 UI/UX Wireframe 그려 원활한 개발 진행하였으며, MVC 패턴을 이용한 CRUD 활용하였습니다.</p>
                                    <p>프로젝트 기획, 개발, 리팩토링 모두 혼자 배우고 공부하며 구현한 프로젝트 입니다.</p>
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

export default JqueryList;
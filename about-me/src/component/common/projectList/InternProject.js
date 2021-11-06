import {React,useState} from 'react';
import styled from 'styled-components';
import {closeIcon,video,intern} from '../../../assets/image/index';


const InternWrapper = styled.div`
    .intern{
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
            margin-bottom : 30px;
            margin-right : 10px;
            z-index :1;
            cursor :pointer;
        }

        .o2{
            &__slider{
                width:698px;
            }
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

            &__mlTitle{
                font-size : 20px;
                font-weight : bold;
            }
        }

        p{
            font-family: 'Noto Sans KR', sans-serif;
            margin-left : 10px;
            margin-right : 10px;
            text-align : start;
        }
        span{
            color : #eb285d;
        }
        .video{
            width:698px;
            border-radius: 16px;
        }

`;

const Modal = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index :1;

`;
const InternProject = () => {

    const [ghibliModal,setGhibliModal] = useState(false);
    function internHandleModal(){
        setGhibliModal(true);

    }

    return (
            <InternWrapper>
                    <div className="intern">
                        <div className="intern__main">
                            <img className="intern__img" src={intern} alt="" onClick={()=>{internHandleModal()}}/>
                            <span className="intern__title">Intern VR Project</span>
                        </div>
                    </div>

                    {
                            ghibliModal===true
                            ?
                            <Modal>
                                <ModalWrapper>
                                    <video width="698px" controls>
                                        <source src={video}></source>
                                    </video>
                                    <div className="text">
                                        <h2 className="modal__title">예쉬컴퍼니 인턴 VR 자체 기획 및 개발</h2>
                                        <h5 className="modal__subtitle">실감 콘텐츠 개발 및 구축 관련 콘텐츠 팀 소속</h5>
                                        <hr className="modal__hr"/>
                                        <p><span>2020.07~2020.08 기간동안 근무하면서</span> VR 콘텐츠를 자체 기획하고 디자인, 개발하여 실제 VR존에서 체험가능한 영상물입니다.</p>
                                        <p><span className="modal__mlTitle">VR 시뮬레이터 연동 롤러코스터 컨셉 기획</span> 및 컨셉에 맞는 그래픽 에셋 자료조사를 하였으며,  </p>
                                        <p>Unity3D 엔진을 활용한 환경 레벨 디자인 및 C#을 활용하여 개발 진행하였습니다. </p>
                                        <p>미래 도시를 배경으로 추격전을 펼치는 컨셉으로 기획하여 사운드와 디자인 모두 자체 진행하였습니다. </p>
                                        <p>롤러코스터 레일 설정 및 연출 표현하였으며, 모션 시뮬레이터 레코딩 및 적용하였습니다. </p>
                                        <p><span>단기간에 Unity활용법과 C#에 대해 공부</span> 해볼수 있었던 계기가 되었으며, 처음부터 끝 마무리까지 책임감 있게 작업하여 좋은 결과물을 낼수 있었습니다. </p>
                                    </div>
                                    <img className="closeIcon" src={closeIcon} alt="" onClick={()=>{setGhibliModal(false)}}/>
                                </ModalWrapper>
                            </Modal>
                            :
                            null
                        }
            </InternWrapper>
        );
    };


export default InternProject;
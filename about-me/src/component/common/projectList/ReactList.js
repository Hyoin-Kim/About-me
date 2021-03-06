import { React, useState } from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import {
  closeIcon,
  aboutmeSlider,
  aboutMe,
  o2Img,
  o2SliderImg,
  o2SliderImg2,
  o2SliderImg3,
  o2SliderImg4,
  o2SliderImg5,
  o2SliderImg6,
  o2SliderImg7,
  o2SliderImg8,
  sopkathonImg,
  sopkathonSlider,
  sopkathonSlider2,
  sopkathonSlider3,
  toyproject,
  diaryApp,
  diaryApp2,
  shoppingmall,
  shoppingmall2,
  githubSlider,
  netflix,
} from "../../../assets/image/index";

const ProjectWrapper = styled.div`
  .react {
    font-family: "Noto Sans KR", sans-serif;
    display: flex;
    justify-content: center;

    &__main {
      font-family: "Noto Sans KR", sans-serif;
      display: flex;
      margin: 10px;
      justify-content: center;
      cursor: pointer;
      width: 300px;
      height: 300px;
    }
    &__img {
      transition: all 0.5s;
      opacity: 0.5;
      border-radius: 20px;
    }
    &__img:hover {
      transition: all 0.5s;
      opacity: 1;
    }
    &__title {
      font-weight: bold;
      position: absolute;
    }
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
  background-color: white;
  width: 700px;
  height: 800px;
  z-index: 1;

  .closeIcon {
    width: 20px;
    float: right;
    margin: 10px;
    z-index: 1;
    cursor: pointer;
  }

  .o2 {
    &__slider {
      width: 698px;
    }
  }

  .sop__slider {
    width: 698px;
    border-radius: 16px;
  }

  .modal {
    &__title {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 25px;
      font-weight: bold;
      margin: 5px;
    }
    &__subtitle {
      font-size: 17px;
      margin: 10px 0px 0px 5px;
    }
    &__o2Title {
      font-size: 20px;
      font-weight: bold;
    }
  }

  p {
    margin-left: 10px;
    margin-right: 10px;
    text-align: start;
  }
  span {
    color: #eb285d;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  overflow: hidden;
`;

const ReactProject = () => {
  const [o2Modal, setO2Modal] = useState(false);
  const [sopkathonModal, setSopkathonModal] = useState(false);
  const [aboutmeModal, setAboutmeModal] = useState(false);
  const [toyprojectModal, setToyprojectModal] = useState(false);

  function o2HandleModal() {
    setO2Modal(true);
  }

  function sopkathonHandleModal() {
    setSopkathonModal(true);
  }
  function aboutmeHandleModal() {
    setAboutmeModal(true);
  }
  function toyprojectHandleModal() {
    setToyprojectModal(true);
  }
  return (
    <div>
      <ProjectWrapper>
        <div className="react">
          <div className="react__main">
            <img
              className="react__img"
              src={o2Img}
              alt=""
              onClick={() => {
                o2HandleModal();
              }}
            />
            <span className="react__title">Open Together</span>
          </div>
          <div className="react__main">
            <img
              className="react__img"
              src={sopkathonImg}
              alt=""
              onClick={() => {
                sopkathonHandleModal();
              }}
            />
            <span className="react__title">????????????</span>
          </div>
          <div className="react__main">
            <img
              className="react__img"
              src={aboutMe}
              alt=""
              onClick={() => {
                aboutmeHandleModal();
              }}
            />
            <span className="react__title">About Me</span>
          </div>
          <div className="react__main">
            <img
              className="react__img"
              src={toyproject}
              alt=""
              onClick={() => {
                toyprojectHandleModal();
              }}
            />
            <span className="react__title">Toy Project</span>
          </div>
          {o2Modal === true ? (
            <Modal>
              <ModalWrapper>
                <Carousel>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={o2SliderImg} alt="" />
                  </Carousel.Item>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={o2SliderImg2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={o2SliderImg5} alt="" />
                  </Carousel.Item>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={o2SliderImg3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={o2SliderImg4} alt="" />
                  </Carousel.Item>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={o2SliderImg6} alt="" />
                  </Carousel.Item>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={o2SliderImg7} alt="" />
                  </Carousel.Item>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={o2SliderImg8} alt="" />
                  </Carousel.Item>
                </Carousel>
                <div className="text">
                  <h2 className="modal__title">??????????????? ?????? ?????? ???????????? ?????????, Open Together</h2>
                  <h5 className="modal__subtitle">
                    ???????????? ????????? ???????????? ???????????? ????????? ???????????? ????????? ????????? ??? ??? ?????? ?????? ??????
                  </h5>
                  <hr className="modal__hr" />
                  <p>
                    ????????????, ????????????????????? ????????? ????????? ????????? ??????{" "}
                    <span className="modal__o2Title">?????? ???????????? ?????????</span>?????????.
                  </p>
                  <p>
                    LearnMyself??? ?????? ?????? ???????????? ????????? ??? ??????, ShareTogether??? ?????? ??????????????? ?????? ????????????
                    ????????? ??? ????????????.
                  </p>
                  <p>
                    <span>??????,?????????,??????,??????????????? ????????? ?????? ????????????</span>??????, ????????? ????????? ??????, QA, ????????????
                    ????????????.
                  </p>
                  <p>
                    <span>React, Typescript</span>??? ??????????????????, ??????????????? ?????? <span>Atomic Design??? NextJS </span>
                    ?????????????????????.
                  </p>
                  <p>
                    ???????????????(#1), LearnMyself(#2), ShareTogether(#3), ???????????????(#4), ????????? ?????????(#7, #8) ??? ???
                    20?????? ??? ??????????????????
                    <span className="modal__o2Title"> ????????????</span>??? ?????????????????????.
                  </p>
                </div>
                <img
                  className="closeIcon"
                  src={closeIcon}
                  alt=""
                  onClick={() => {
                    setO2Modal(false);
                  }}
                />
              </ModalWrapper>
            </Modal>
          ) : null}
          {sopkathonModal === true ? (
            <Modal>
              <ModalWrapper>
                <Carousel>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={sopkathonSlider} alt="" />
                  </Carousel.Item>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={sopkathonSlider2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={sopkathonSlider3} alt="" />
                  </Carousel.Item>
                </Carousel>
                <div className="text">
                  <h2 className="modal__title">????????? ?????? ????????????, ????????????</h2>
                  <h5 className="modal__subtitle">
                    ?????? ????????????? ???...???...???..... ???!!! ?????? ????????? ??? 3??? ?????? ?????? ????????? ?????? ??????!
                  </h5>
                  <hr className="modal__hr" />
                  <p>
                    ?????? ????????? ?????? ????????? ???????????? 3????????? ??????????????????{" "}
                    <span className="modal__o2Title">????????? ?????? ????????????</span> ?????????.
                  </p>
                  <p>
                    ?????? ????????? ?????? ??????, 3????????? ????????? ????????? ?????? ????????? ????????????, ?????? ???????????? ?????? ?????? ??? ??????
                    ????????? ???????????????.
                  </p>
                  <p>
                    <span>??????,?????????,??????,??????????????? ????????? ??????2??? ????????? ????????????</span>??????,{" "}
                    <span> ????????? ????????? ??????????????? ?????? ????????? ?????? ??????</span>?????? ?????????????????????.
                  </p>
                  <p>
                    <span>React, Javascript??? ??????</span>?????? ??????????????????, ???????????? ????????? ????????? ??????{" "}
                    <span className="modal__o2Title">??????</span>??? ?????????????????????.
                  </p>
                </div>
                <img
                  className="closeIcon"
                  src={closeIcon}
                  alt=""
                  onClick={() => {
                    setSopkathonModal(false);
                  }}
                />
              </ModalWrapper>
            </Modal>
          ) : null}
          {aboutmeModal === true ? (
            <Modal>
              <ModalWrapper>
                <Carousel>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={aboutmeSlider} alt="" />
                  </Carousel.Item>
                </Carousel>
                <div className="text">
                  <h2 className="modal__title">????????? ???????????????, About Me</h2>
                  <h5 className="modal__subtitle">
                    ????????? ????????????, ?????? ??????, ?????? ?????? ??????, ????????????/?????? ??????, GitHub/velog ?????? ???
                  </h5>
                  <hr className="modal__hr" />
                  <p>
                    ??????????????? ????????? ????????? <span className="modal__o2Title">React/JS ????????? ??? ?????????</span>?????????.
                  </p>
                  <p>?????? ?????? ?????? ??? ???????????? ???????????????.</p>
                  <p>??????????????? ????????? ????????? ?????? ????????? ?????? ??? ????????? ???????????? ?????????. </p>
                  <p>
                    <span>React, Javascript, bootstrap??? ??????</span>?????? ?????????????????????.
                  </p>
                  <p></p>
                  <p></p>
                </div>
                <img
                  className="closeIcon"
                  src={closeIcon}
                  alt=""
                  onClick={() => {
                    setAboutmeModal(false);
                  }}
                />
              </ModalWrapper>
            </Modal>
          ) : null}
          {toyprojectModal === true ? (
            <Modal>
              <ModalWrapper>
                <Carousel>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={netflix} alt="" />
                  </Carousel.Item>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={diaryApp} alt="" />
                  </Carousel.Item>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={diaryApp2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={shoppingmall} alt="" />
                  </Carousel.Item>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={shoppingmall2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item variant="dark">
                    <img className="sop__slider" src={githubSlider} alt="" />
                  </Carousel.Item>
                </Carousel>
                <div>
                  <h2 className="modal__title">?????? ???????????? ????????? ?????? Toy Project</h2>
                  <h5 className="modal__subtitle">
                    Netflix, Diary App, Shopping mall, Github profile finder, Clone Coding ??? ??????{" "}
                  </h5>
                  <hr className="modal__hr" />
                  <p>
                    IT ?????? ??????????????? SOPT ?????????, React ??????????????? ?????????{" "}
                    <span className="modal__o2Title"> ??? ????????? ?????????</span> ?????????.
                  </p>
                  <p>
                    Netflix ???????????????(#1), ???????????? ???(#2,#3), Ghibli ?????? ?????????(#4,#5), Github profile finder(#6),
                    Folin Clone Coding ??? ????????? ?????? ??????????????? ?????????????????????.
                  </p>
                  <p>
                    React ????????? ??????????????? ?????? ???????????? ???????????? ?????? ???????????? ??? ?????? ???????????? ???????????? ???????????????.
                  </p>
                  <p>
                    <span>
                      React, Javascript??? ???????????? ??????????????????, ?????????????????? ???????????? ????????? ????????? ?????? ??????
                    </span>
                    ??? ???????????????.
                  </p>
                </div>
                <img
                  className="closeIcon"
                  src={closeIcon}
                  alt=""
                  onClick={() => {
                    setToyprojectModal(false);
                  }}
                />
              </ModalWrapper>
            </Modal>
          ) : null}
        </div>
      </ProjectWrapper>
    </div>
  );
};

export default ReactProject;

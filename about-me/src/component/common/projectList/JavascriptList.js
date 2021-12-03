import { React, useState } from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import { kikiImg } from "../../../assets/image";
import { closeIcon, js, jsSlider, jsSlider2, jsSlider3, jsSlider4, jsSlider5 } from "../../../assets/image/index";

const JsWrapper = styled.div`
  .js {
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
      font-family: "Noto Sans KR", sans-serif;
      font-size: 17px;
      margin: 10px 0px 0px 5px;
    }
    &__jsTitle {
      font-size: 20px;
      font-weight: bold;
    }
  }

  p {
    font-family: "Noto Sans KR", sans-serif;
    margin-left: 10px;
    margin-right: 10px;
    text-align: start;
  }
  span {
    color: #eb285d;
  }

  .text {
    margin: 10px;
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
`;
const JavascriptList = () => {
  const [ghibliModal, setGhibliModal] = useState(false);
  function jsHandleModal() {
    setGhibliModal(true);
  }

  return (
    <JsWrapper>
      <div className="js">
        <div className="js__main">
          <img
            className="js__img"
            src={js}
            alt=""
            onClick={() => {
              jsHandleModal();
            }}
          />
          <span className="js__title">Vanilla JS Project</span>
        </div>
      </div>

      {ghibliModal === true ? (
        <Modal>
          <ModalWrapper>
            <Carousel>
              <Carousel.Item variant="dark">
                <img className="sop__slider" src={jsSlider} alt="" />
              </Carousel.Item>
              <Carousel.Item variant="dark">
                <img className="sop__slider" src={jsSlider4} alt="" />
              </Carousel.Item>
              <Carousel.Item variant="dark">
                <img className="sop__slider" src={jsSlider5} alt="" />
              </Carousel.Item>
              <Carousel.Item variant="dark">
                <img className="sop__slider" src={jsSlider2} alt="" />
              </Carousel.Item>
              <Carousel.Item variant="dark">
                <img className="sop__slider" src={jsSlider3} alt="" />
              </Carousel.Item>
            </Carousel>
            <div className="text">
              <h2 className="modal__title">Vanilla JS 기반 웹 프로젝트</h2>
              <h5 className="modal__subtitle">Weather App, Paint App, To do List, Velog Clone, Smartphone-emulation</h5>
              <hr className="modal__hr" />
              <p>
                <span className="modal__jsTitle">순수 자바스크립트 하나로 개발한 토이 프로젝트</span> 입니다.
              </p>
              <p>Weather App(#1), To do List(#2), Velog Clone(#3), Paint App(#4), Smartphone-emulation(#5) </p>
              <p>등 로컬스토리지를 활용하여 개발을 진행하였습니다.</p>
              <p>Smartphone-emulation(#5)은 알람(추가/삭제), 메모(추가/삭제/상세보기), 갤러리 기능을 구현하였습니다.</p>
              <p>이외의 토이 프로젝트 기능은 Github을 통해 확인 가능합니다.</p>
            </div>
            <div>
              <img
                className="closeIcon"
                src={closeIcon}
                alt=""
                onClick={() => {
                  setGhibliModal(false);
                }}
              />
            </div>
          </ModalWrapper>
        </Modal>
      ) : null}
    </JsWrapper>
  );
};

export default JavascriptList;

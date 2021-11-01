import React from 'react';
import styled from 'styled-components';
import {project} from '../../assets/image/index';

const SkillsWrapper = styled.div`

    .skills{
        display : flex;
        justify-content : center;

        &__img{
            margin-right : 10px;
            width : 40px;
            height : 40px;
            display : flex;
            margin-top :10px;
        }

        &__title{
            transition: all 0.5s;
            -webkit-text-stroke: 4px #3e3e42;
            font-variation-settings: "wght" 900, "ital" 1;
            font-size: 50px;
            text-align: center;
            color: transparent;
            font-family: "Meta", sans-serif;
            text-shadow: 10px 10px 0px #d6f4f4,
            15px 15px 0px #F5A9F2,
            20px 20px 0px #CC2EFA,
            cursor: pointer
        }

        &__title:hover {
            font-variation-settings: "wght" 100, "ital" 0;
            text-shadow: none;
        }
    }
      
      .myskills{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;

        &__menu{
            margin: 20px;
        }

        &__detail{
            margin: 20px;
            font-family: 'Noto Sans KR', sans-serif;
        }
      }
      

`;

const Project = () => {
    return (
        <div>
            <SkillsWrapper>
                <div>
                    <div className="skills">
                        <img className="skills__img" src={project} alt=""/>
                        <h1 className="skills__title">Projects</h1>
                    </div>
                    <nav class="myskills">
                        <div className="myskills__menu">
                            <a className="myskills__detail" href="#">ALL</a>
                            <a className="myskills__detail" href="#">FULL-STACK</a>
                            <a className="myskills__detail" href="#">WEB-FRONT</a>
                            <a className="myskills__detail" href="#">TOY-PROJECT</a>
                            <a className="myskills__detail" href="#">MACHINE LEARNING</a>
                        </div>
                    </nav>

                    <nav>
                        <div>
                            <div>Open Together</div>
                            <div>궁금붕어</div>
                            <div>Ghibli Blog</div>
                            <div>드론 촬영물에서의 개인정보 보호를 위한 AI 기반 클라우드 서비스</div>
                            <div>About Me</div>
                            <div>Diary App</div>
                            <div>Shopping Mall</div>
                            <div>Vanilla JS Project</div>
                        </div>
                    </nav>

                </div>
                
            </SkillsWrapper>
        </div>
    );
};

export default Project;
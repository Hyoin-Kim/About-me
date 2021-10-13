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
                    <div className="container">
                    </div>
                </div>
                
            </SkillsWrapper>
        </div>
    );
};

export default Project;
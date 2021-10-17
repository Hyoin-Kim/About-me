import React from 'react';
import styled from 'styled-components';
import {skills,html,react,typescript,styledcomponent,jQuery,redux,nextjs,python,java,mysql,php,notion,figma,zeplin,slack,github2,ubuntu} from '../../assets/image/index';

const SkillsWrapper = styled.div`

font-family: 'Noto Sans KR', sans-serif;

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

        &__card{
            text-align: -webkit-center;
        }

        &__front{
            justify-content : center;
            background-color : white;
            border : 5px solid;
            border-color : #FFBF00;
            width : 1000px;
            height : 700px;
            border-radius : 30px;
            margin : 40px;
        }

        &__back{
            justify-content : center;
            background-color : white;
            border : 5px solid;
            border-color : #FFBF00;
            width : 1000px;
            height : 450px;
            border-radius : 30px;
            margin : 40px;
        }

        &__version{
            justify-content : center;
            background-color : white;
            border : 5px solid;
            border-color : #FFBF00;
            width : 1000px;
            height : 300px;
            border-radius : 30px;
            margin : 40px;
        }

        &__detail{
            font-size : 30px;
            font-weight : bold;
            padding : 20px;
        }

        &__content{
            justify-content : space-between;
         }

        &__img-html{
            display : inline-block;
            width : 350px;
            height: 150px;
        }
        &__img-ts{
            display : inline-block;
            width : 300px;
            height: 100px;
        }
        &__img-react{
            display : inline-block;
            width : 300px;
            height: 200px;
        }
        &__img-redux{
            display : inline-block;
            width : 300px;
            height: 160px;
        }
        &__img-jQuery{
            display : inline-block;
            width : 300px;
            height: 180px;
        }
        &__img-next{
            display : inline-block;
            width : 250px;
            height: 120px;
            padding-left :20px;
        }
        &__img-styled{
            display : inline-block;
            width : 220px;
            height: 200px;
        }
        &__img-java{
            display : inline-block;
            width : 280px;
            height: 180px;
        }
        &__img-python{
            display : inline-block;
            width : 350px;
            height: 150px;
        }
        &__img-php{
            display : inline-block;
            width : 280px;
            height: 170px;
        }
        &__img-mysql{
            display : inline-block;
            width : 220px;
            height: 170px;
        }
        &__img-notion{
            display : inline-block;
            width : 280px;
            height: 170px;
        }
        &__img-slack{
            display : inline-block;
            width : 330px;
            height: 170px;
        }

        &__img-content{
            display : inline-block;
        }
    }
`;

const Skills = () => {
    return (
        <div>
            <SkillsWrapper>
                <div>
                    <div className="skills">
                        <img className="skills__img" src={skills} alt=""/>
                        <h1 className="skills__title">SKILLS</h1>
                    </div>
                    <div className="skills__card">
                        <div className="skills__front">
                            <div className="skills__detail">
                                Front-end Skills
                            </div>
                            <img className="skills__img-html" src={html} alt=""/>
                            <img className="skills__img-react" src={react} alt=""/>
                            <img className="skills__img-ts" src={typescript} alt=""/>
                            <img className="skills__img-jQuery" src={jQuery} alt=""/>
                            <img className="skills__img-redux" src={redux} alt=""/>
                            <img className="skills__img-next" src={nextjs} alt=""/>
                            <img className="skills__img-styled" src={styledcomponent} alt=""/>
                        </div>
                        <div className="skills__back">
                            <div className="skills__detail">
                                Back-end Skills
                            </div>
                            <img className="skills__img-java" src={java} alt=""/>
                            <img className="skills__img-python" src={python} alt=""/>
                            <img className="skills__img-mysql" src={mysql} alt=""/>
                            <img className="skills__img-php" src={php} alt=""/>
                        </div>
                        <div className="skills__back">
                            <div className="skills__detail">
                                Communication Skills
                            </div>
                            <img className="skills__img-figma" src={figma} alt=""/>
                            <img className="skills__img-zeplin" src={zeplin} alt=""/>
                            <img className="skills__img-notion" src={notion} alt=""/>
                            <img className="skills__img-slack" src={slack} alt=""/>
                        </div>
                        <div className="skills__version">
                            <div className="skills__detail">
                                Version Control Skills
                            </div>
                            <img className="skills__img-python" src={ubuntu} alt=""/>
                            <img className="skills__img-slack" src={github2} alt=""/>
                        </div>
                    </div>
                </div>
            </SkillsWrapper>
        </div>
    );
};

export default Skills;
import {React,useState} from 'react';
import styled from 'styled-components';
import {project} from '../../assets/image/index';
import ProjectReact from './projectList/ReactList';
import JavascriptList from './projectList/JavascriptList';
import JqueryList from './projectList/JqueryList';
import MachineLearning from './projectList/MachineLearning';

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
            text-align : center;
        }

        &__detail{
            margin: 20px;
            font-family: 'Noto Sans KR', sans-serif;
            font-size : 20px;
            font-weight : bold;
            border: none;
            background-color : white;
            transition: all 0.5s;
        }
        &__detail:hover{
            color : #eb285d;
            transition: all 0.5s;
            font-size : 25px;
        }
        &__detail:focus{
            color : #eb285d;
            transition: all 0.5s;
            font-size : 25px;
        }
      }
`;

const Project = () => {
    const [reactButton,setReactButton] = useState(false);
    const [jsButton,setJsButton] = useState(false);
    const [jqureyButton,setJqueryButton] = useState(false);
    const [mlButton,setMlButton] = useState(false);

    function handleAll(){


    }
    function handleReact(){
        setReactButton(true);
        setJsButton(false);
        setJqueryButton(false);
        setMlButton(false);
    }
    function handleJs(){
        setJsButton(true);
        setReactButton(false);
        setJqueryButton(false);
        setMlButton(false);
    }
    function handleJquery(){
        setJqueryButton(true);
        setJsButton(false);
        setReactButton(false);
        setMlButton(false);
    }
    function handleMl(){
        setMlButton(true);
        setJqueryButton(false);
        setJsButton(false);
        setReactButton(false);
    }
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
                            <button className="myskills__detail" onClick={()=>{handleAll()}}>ALL</button>
                            <button className="myskills__detail" onClick={()=>{handleReact()}}>REACT</button>
                            <button className="myskills__detail" onClick={()=>{handleJs()}}>JAVASCRIPT</button>
                            <button className="myskills__detail" onClick={()=>{handleJquery()}}>JQUERY/PHP</button>
                            <button className="myskills__detail" onClick={()=>{handleMl()}}>MACHINE LEARNING</button>
                            {
                                reactButton===true ? (
                                    <ProjectReact/>
                                ) : null
                            }
                            {
                                jsButton===true ? (
                                    <JavascriptList/>
                                ) : null
                            }
                            {
                                mlButton===true ? (
                                    <MachineLearning/>
                                ) : null
                            }
                            {
                                jqureyButton===true ? (
                                    <JqueryList/>
                                ) : null
                            }
                        </div>
                    </nav>

                    <nav>
                        <div>

                            
                            
                            
                        </div>
                    </nav>

                </div>
                
            </SkillsWrapper>
        </div>
    );
};

export default Project;
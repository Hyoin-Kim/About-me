import React from 'react';
import styled from 'styled-components';
import { kikiImg } from '../../../assets/image';

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

const JqueryList = () => {
    return (
        <JqueryWrapper>
                <div className="jquery">
                    <div className="jquery__main">
                        <img className="jquery__img"src={kikiImg} alt=""/>
                        <span className="jquery__title">Ghibli Blog</span>
                    </div>
                </div>
        </JqueryWrapper>
    );
};

export default JqueryList;
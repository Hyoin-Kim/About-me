import React from 'react';
import {ReactList,JqueryList,MachineLearning,JavascriptList} from '../../index';
import styled from 'styled-components';
import InternProject from './InternProject';

const Wrapper = styled.div`
    .main{
        text-align : center;
    }

    .list{
        display:inline-block;  
    }    
`;

const AllList = () => {
    return (
        <Wrapper>
            <div className="main">
                <ReactList />
                <div className="list">
                    <JavascriptList/>
                </div>
                <div className="list">
                    <JqueryList/>
                </div>
                <div className="list">
                    <InternProject/>
                </div>
                <div className="list">
                    <MachineLearning/>
                </div>
            </div>
        </Wrapper>
    );
};

export default AllList;
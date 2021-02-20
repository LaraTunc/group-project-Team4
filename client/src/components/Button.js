import React from "react";
import styled from "styled-components";

const Button = ({children, onClick})=>{
    return(
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.button`
    width:100%;
    position: relative;
    z-index: 2;
    bottom: 0;
    background-color: #6565ee;
    color: white;
    padding: 10px;
    font-weight: bold;
    border-radius:5px;
`;

export default Button;
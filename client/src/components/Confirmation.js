import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { CartButton } from './CartComponents';

const Confirmation = ()=> {
    let history = useHistory();

    return (
        <Wrapper>
            <Title><h3>Thank you for your order! Order details have been sent to your email.</h3></Title>
            <CartButton
                handleClick={()=> history.push("/")}
            >
                Back to Homepage
            </CartButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
display: flex; 
flex-direction:column;
margin: 0% 5%;
height:100vh;
justify-content:center;
`;

const Title = styled.div`
display:flex;
justify-content:center;
`;

export default Confirmation; 
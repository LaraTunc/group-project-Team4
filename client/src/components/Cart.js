import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { CartSummary, CartButton } from './CartComponents';

const Cart = ()=>{
    let history = useHistory();

    return (
        <Wrapper>
            <Title><h3>My Cart</h3></Title>
            <CartSummary/>
            <CartButton
                handleClick={()=> history.push("/checkout")}
            >
                Proceed to Checkout
            </CartButton>
        </Wrapper>
    ); 
};

const Wrapper = styled.div`
display: flex; 
flex-direction:column;
margin: 0% 5%;
`;

const Title = styled.div`
display:flex;
justify-content:center;
`;


export default Cart; 
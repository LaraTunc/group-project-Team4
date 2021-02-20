import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { CartSummary, CartButton } from './CartComponents';
import Button from "../components/Button";

const Cart = ()=>{
    let history = useHistory();
    const cart = useSelector((state) => state.myCartReducer);

    return (
        <Wrapper>
            <CartSummary/>
            {cart.length===0 
            ? 
                <CartButton
                    handleClick={()=> history.push("/products")}
                >
                    Search products
                </CartButton>
            : 
                <CartButton handleClick={()=> history.push("/checkout")}>
                    Proceed to Checkout
                </CartButton>
            }
        </Wrapper>
    ); 
};

const Wrapper = styled.div`
display: flex; 
flex-direction:column;
margin: 0% 5%;
`;


export default Cart; 
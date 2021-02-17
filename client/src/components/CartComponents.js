import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export const CartSummary = ()=> { 
    const myCart = useSelector((state) => state);
    
    return (
        <Wrapper> 
            <Headers>
                    <Placeholder1/>
                    <Item>ITEM</Item>
                    <Price>PRICE</Price>
                    <Remove>REMOVE</Remove>
                </Headers>
                <CartItem/>
                <Total>
                    <Placeholder1/>
                    <Totals>
                        <p>Total:</p>
                        <p>Shipping estimate:</p>
                        <p>Order Total:</p>
                    </Totals>
                    <Prices>
                        <p>$240.00 CAD</p>
                        <p>$0.00 CAD</p>
                    </Prices>
                    <Placeholder2/>
                </Total>
        </Wrapper>
    );
};

export const CartButton = ({children, handleClick})=>{
    return (
        <ButtonDiv>
                <Button
                    onClick={handleClick}
                >
                    {children}
                </Button>
        </ButtonDiv>
    );
};


const Wrapper = styled.div`
margin-top: 50px;
`;

const Headers = styled.div`
display:flex; 
`;

const Placeholder1 = styled.div`
flex:3;
`;

const Item = styled.div`
flex:10;
`;

const Price = styled.div`
flex:3;
`;

const Remove = styled.div`
flex:1;
`;

const Total = styled.div`
width:100%;
display:flex;
`;

const Totals = styled.div`
display:flex;
flex-direction:column;
flex:10;
`;

const Prices = styled.div`
display:flex;
flex-direction:column;
flex:3;
`;

const Placeholder2 = styled.div`
flex:1;
`;

const ButtonDiv = styled.div`
width:100%;
display:flex;
justify-content:center;
margin-bottom: 40px;
`;

const Button = styled.button`
background:black;
color:white;
margin-top: 40px;
padding:15px;
`;
import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

const Cart = ()=>{
    return (
        <Wrapper>
            <Title><h3>My Cart</h3></Title>
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

const Wrapper = styled.div`
width: 100%; 
display: flex; 
flex-direction:column;
*{
    border: 1px solid green;
};
`;

const Title = styled.div`
display:flex;
justify-content:center;
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

export default Cart; 
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { removeItem } from '../actions';
import { useHistory } from "react-router-dom";

const CartItem = ({item})=>{
    const dispatch = useDispatch();
    let history = useHistory();

    const handleRemove = (item)=>{ 
        dispatch(removeItem(item));
        history.push("/cart");
    };

    return (
        <Wrapper>
            <ItemImage><img src={item.imageSrc} alt="item"/></ItemImage>
            <Item>
                <Brand>{item.name}</Brand>
                <p><b>Product Information:</b></p>
                <p><b>Technology type:</b> {item.category}</p>
                <p><b>Body location:</b> {item.body_location}</p>
            </Item>
            <Price>{item.price}</Price>
            <Remove>
                <button 
                onClick={()=>handleRemove(item)}
                style={{cursor: 'pointer'}}
                >
                    X
                </button>
            </Remove>
        </Wrapper>
    ); 
};

const Wrapper = styled.div`
width:100%; 
border-top: 1px solid grey;
border-bottom: 1px solid grey;
display:flex;
height: 200px;
`; 

const ItemImage = styled.div`
flex:3;
height:100%; 
display: flex;
justify-content:center;
* {
    height:100%; 
};
`;

const Item = styled.div`
flex:10;
display: flex; 
flex-direction:column; 
`;

const Brand = styled.div`
font-weight:bolder;
`;

const Price = styled.div`
flex:3;
`;

const Remove = styled.div`
flex:1;
`;


export default CartItem; 
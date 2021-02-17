import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
    fetchItemsData,
    receiveItemsData,
    receiveItemsDataError
} from '../actions';
import { useSelector } from "react-redux";
import { addItem } from '../actions';

const ItemGrid = () => {
    const dispatch = useDispatch();
    const [companies, setCompanies] = useState();
    const status = useSelector(state => (
        state.itemGridReducer.status))
    const currentItems = useSelector(state => ({
        ...state.itemGridReducer.currentItems}));
        
    useEffect(() => {
        dispatch(fetchItemsData())
        fetch('/products')
        .then(res => res.json())
        .then(products => {
            dispatch(receiveItemsData(products.data))
        })
        .catch(error => {
            dispatch(receiveItemsDataError(error))
        })
    }, []);

    useEffect( () => {
        fetch('/companies')
        .then(res => res.json())
        .then(json => {
            setCompanies(json.data);
        })        
    }, [])


    return (
        <>
        { 
            !status ? 
        <div>LOADING ICON</div> 
        : (
            <Wrapper>
                { currentItems && (
                Object.values(currentItems).map((item) => {
                    if (item.numInStock > 0) {
                    return (
                    <ItemWrapper>
                        <ItemLink href={`/product/${item._id}`} />
                        <Image src={item.imageSrc} />
                        {
                        companies && 
                        companies.map((company) => {
                            if (item.companyId === company._id) {
                                return <Brand>{company.name}</Brand>
                            }
                    })
                    }
                        <Description>{item.name}</Description>
                        <Price>{item.price}</Price>
                        <Button onClick={() => {
                            dispatch(addItem(item))
                        }}>Add to cart</Button>
                    </ItemWrapper>
                    )
                }
                })
                )
            }
            </Wrapper>
        )
    }
    </>
    )
}

export default ItemGrid;

const Wrapper = styled.div`
padding: 20px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
grid-gap: 24px;
`;

const ItemWrapper = styled.div`
display: flex;
flex-wrap: wrap;
position: relative;
padding: 15px 15px 0px 15px;
`;

const Button = styled.button`
height: 45px;
width: 100%;   
background-color: #6565EE;
position: relative;
z-index: 1;
flex-direction: flex-end;
bottom: 0;
margin-bottom: 0;
color: #fff;
font-weight: bold;
`;

const ItemLink = styled.a`
height: 100%;
width: 100%;
position: absolute;
top: 0;
left: 0;
text-decoration: none;
background-color: #FFF;
opacity: 0; 
`;

const Image = styled.img`
display: block;
max-width: 100%;
min-height: 180px;
padding-bottom: 5px;
`;

const Brand = styled.p`
color: #000;
font-weight: bold;
`;

const Description = styled.p`
width: 100%;
`;

const Price = styled.p`
width: 100%;
`;
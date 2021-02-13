import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
    fetchItemsData,
    receiveItemsData,
    receiveItemsDataError
} from '../actions';
import { useSelector } from "react-redux";

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
                    </ItemWrapper>
                    )
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
position: relative;
padding: 15px;
`;

const ItemLink = styled.a`
height: 100%;
width: 100%;
position: absolute;
top: 0;
left: 0;
text-decoration: none;
z-index: 10;
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
`;

const Price = styled.p`
`;
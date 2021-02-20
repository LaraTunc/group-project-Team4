import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { requestItemDetails, receiveItemDetails, receiveItemDetailsError } from '../actions';
import { addItem } from '../actions';
import { requestCompanies, receiveCompanies, receiveCompaniesError } from '../actions.js';

const ItemDetails = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const currentItem = useSelector((state) => state.itemDetailsReducer.currentItem);
    const status = useSelector((state) => state.itemDetailsReducer.status);
    const companies = useSelector((state) => state.companiesReducer.companies);
    const [itemCompany, setItemCompany] = useState();

    useEffect(() => {
        dispatch(requestItemDetails());
        fetch(`/product/${productId}`)
        .then((res) => res.json())
        .then((response) => dispatch(receiveItemDetails(response.data)))
        .catch((error) => dispatch(receiveItemDetailsError(error)))
    }, []);

    useEffect(() => {
        dispatch(requestCompanies());
        fetch('/companies')
        .then((res) => res.json())
        .then((response) => dispatch(receiveCompanies(response.data)))
        .catch((error) => dispatch(receiveCompaniesError(error)))
    }, []);

    useEffect(() => {
        if (companies && currentItem) {
            let companyName = (companies.filter((company) => {
                return currentItem.companyId === company["_id"]
            }));
            setItemCompany(companyName);
        }
    }, [companies, currentItem]);

    const handleClick=() => {
        dispatch(addItem(currentItem));
    };

    return (
        <>
        {status === 'loading'
        ? <h1>Loading...</h1>
        : (!currentItem)
        ? <h1>Loading...</h1>
        :
        <ProductContainer>
            <ProductImage src={currentItem["imageSrc"]} alt={currentItem["name"]} />
            <ProductInfoContainer>
                {itemCompany
                    ? <CompanyName>{itemCompany[0]["name"]}</CompanyName>
                    : null
                }
                <h3>{currentItem["name"]}</h3>
                <Price>{currentItem["price"]}</Price>
                <ProductInfoHeading>Product Information:</ProductInfoHeading>
                <ul>
                    <ListItem><Span>Body Location: </Span>{currentItem["body_location"]}</ListItem>
                    <ListItem><Span>Technology Type: </Span> {currentItem["category"]}</ListItem>
                </ul>
                <Button onClick={() => handleClick()}>Add to Cart</Button>
            </ProductInfoContainer>
        </ProductContainer>
        }   
        </>
    )
};

const ProductContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: relative;
    left: 5%;
    top: 20px;
`;

const ProductImage = styled.img`
    width: 300px;
    height: 300px;
`;

const ProductInfoContainer = styled.div`
    width: 400px;
`;

const CompanyName = styled.h4`
    color: #6565EE;
    height: 5px;
`;

const Price = styled.p`
    font-weight: bold;
    height: 5px;
`;

const ProductInfoHeading = styled.h4`
    height: 5px;
`;

const ListItem = styled.li`
    list-style: none;
    height: 25px;
`;

const Span = styled.span`
    font-weight: bold;
`;

const Button = styled.button`
    margin-top: 15px;
    color: #6565EE;

    &:hover {
        cursor: pointer;
    }
`;

export default ItemDetails;


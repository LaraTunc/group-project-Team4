import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ItemsByBodyLocation from "./ItemsByBodyLocation";
import Companies from "./Companies";
import ProductsByCategory from './ProductsByCategory';
import { requestCompanies, receiveCompanies, receiveCompaniesError } from '../actions.js';
import { fetchItemsData, receiveItemsData, receiveItemsDataError } from '../actions';

const Homepage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestCompanies());
        fetch('/companies')
        .then((res) => res.json())
        .then((response) => dispatch(receiveCompanies(response.data)))
        .catch((error) => dispatch(receiveCompaniesError(error)))
    }, []);

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

    return (
        <>
            <ItemsByBodyLocation />
            <Companies />
            <ProductsByCategory />
        </>
    )

}


export default Homepage;
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    fetchItemsData,
    receiveItemsData,
    receiveItemsDataError
} from '../actions';
import { useSelector } from "react-redux";

const ItemGrid = () => {
    const dispatch = useDispatch();
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
    }, [])

    return (
        <>
        { 
            !status ? 
        <div>LOADING ICON</div> 
        : (
            <div>
                { currentItems && (
                Object.values(currentItems).map((item) => {
                    return (
                    <div>
                        <img src={item.imageSrc} />
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                    )
                })
                )
            }
            </div>
        )
    }
    </>
    )
}

export default ItemGrid;
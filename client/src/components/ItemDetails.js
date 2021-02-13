import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from '../actions';

// onClick of item in grid sends get request

const ItemDetails = () => {
    const dispatch = useDispatch();
    const currentItem = useSelector((state) => state.currentItem);
    const status = useSelector((state) => state.status);

    // To be added on an Add to Cart button 
    handleClick=() => {
        dispatch(addItem(currentItem));
    };

    return (
        <>
        <h1>item details page</h1>
        </>
    )
}

// onClick function to get item details
import { requestItemDetails, receiveItemDetails, receiveItemDetailsError } from '.././actions';
getItemDetails = () => {
    dispatch(requestItemDetails());
    fetch('/product/${item}')
    .then((res) => res.json())
    .then((response) => dispatch(receiveItemDetails(response)))
    .catch((error) => dispatch(receiveItemDetailsError(error)))
}
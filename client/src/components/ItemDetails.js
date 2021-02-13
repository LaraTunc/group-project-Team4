import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// onClick of item in grid sends get request

const ItemDetails = () => {
    const currentItem = useSelector((state) => state.currentItem);
    const status = useSelector((state) => state.status);

    return (
        <>
        <h1>item details page</h1>
        <ProductContainer>
            <ProductImage src={currentItem["imageSrc"]} alt={currentItem["name"]} />
            <div>
                <h1>{currentItem["name"]}</h1>
                <p>{currentItem["price"]}</p>
                <p>Body Location: {currentItem["body_location"]}</p>
                <button>Add to Cart</button>
            </div>
        </ProductContainer>
        </>
    )
};

const ProductContainer = styled.div`
    display: flex;
`;

const ProductImage = styled.img`
    width: 300px;
    height: 300px;
`;

export default ItemDetails;

// onClick function to get item details
// import { requestItemDetails, receiveItemDetails, receiveItemDetailsError } from '.././actions';
// getItemDetails = () => {
//     dispatch(requestItemDetails());
//     fetch('/product/${item}')
//     .then((res) => res.json())
//     .then((response) => dispatch(receiveItemDetails(response)))
//     .catch((error) => dispatch(receiveItemDetailsError(error)))
// }
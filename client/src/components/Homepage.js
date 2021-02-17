import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ItemsByBodyLocation from "./ItemsByBodyLocation";
import Companies from "./Companies";
import ProductsByCategory from './ProductsByCategory';
// import { requestCompanies, receiveCompanies, receiveCompaniesError } from '../actions.js';

const Homepage = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
        // dispatch(requestCompanies());
        // fetch('/companies')
        // .then((res) => res.json())
        // .then((response) => dispatch(receiveCompanies(response.data)))
        // .catch((error) => dispatch(receiveCompaniesError(error)))
    // }, []);

    return (
        <>
            <ItemsByBodyLocation />
            <Companies />
            <ProductsByCategory />
        </>
    )

}

export default Homepage;

// create separate components for featured products of company & products by body part?
// grab items from reducer > sort by key "body_location"
// could do a picture of products at the top with links to "shop by wrist or arm"
    // would be done by picking an example of each and rendering as flex next to each other (??)
// similar structure as above except with examples of company products
// could pick a random selection from the object each time page loads 
// could also have products by category (e.g. medical, fitness)
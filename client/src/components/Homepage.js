import React from "react";
import { useSelector } from "react-redux";
import ItemsByBodyLocation from "./ItemsByBodyLocation";

const Homepage = () => {

    return (
        <>
            <ItemsByBodyLocation />
        </>
    )

}

export default Homepage;

// dispatch company action inside homepage?
// create separate components for featured products of company & products by body part?
// grab items from reducer > sort by key "body_location"
// could do a picture of products at the top with links to "shop by wrist or arm"
    // would be done by picking an example of each and rendering as flex next to each other (??)
// similar structure as above except with examples of company products
// could pick a random selection from the object each time page loads 
// could also have products by category (e.g. medical, fitness)
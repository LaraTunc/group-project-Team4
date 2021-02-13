import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ItemsByBodyLocation = () => {
    // const currentItems = useSelector((state) => state.currentItems);
    const [currentItems, setCurrentItems] = useState();

    useEffect(() => {
        fetch('/products')
        .then((res) => res.json())
        .then((response) => setCurrentItems(response.data));
    }, []);

    if(currentItems) {
        const wristItemArray = currentItems.filter((item) => item["body_location"] === "Wrist");
        console.log(wristItemArray);
    }
    // potential problem with the below is currentItems might not exist on component first render
    // const wristItemArray = currentItems.filter((item) => item["body_location"] === "Wrist");
    // const armItemArray = currentItems.filter((item) => item["body_location"] === "Arms");
    // const headItemArray = currentItems.filter((item) => item["body_location"] === "Head");
    // const chestItemArray = currentItems.filter((item) => item["body_location"] === "Chest");
    // const waistItemArray = currentItems.filter((item) => item["body_location"] === "Waist");
    // const handsItemArray = currentItems.filter((item) => item["body_location"] === "Hands");
    // const neckItemArray = currentItems.filter((item) => item["body_location"] === "Neck");
    // const feetItemArray = currentItems.filter((item) => item["body_location"] === "Feet");
    // const torsoItemArray = currentItems.filter((item) => item["body_location"] === "Torso");

    return (
        <h1>items by body location!</h1>
    )
}

export default ItemsByBodyLocation;
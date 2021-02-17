import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ProductsByCategory = () => {
    // const currentItems = useSelector((state) => state.currentItems);
    const [currentItems, setCurrentItems] = useState();
    const [sortedItems, setSortedItems] = useState({
        entertainment: null,
        fitness: null,
        medical: null,
        lifestyle: null,
    })

    useEffect(() => {
        fetch('/products')
        .then((res) => res.json())
        .then((response) => setCurrentItems(response.data));
    }, []);

    useEffect(() => {
        if(currentItems) {
            let entertainmentArray = currentItems.filter((item) => item["category"] === "Entertainment");
            let fitnessArray = currentItems.filter((item) => item["category"] === "Fitness");
            let medicalArray = currentItems.filter((item) => item["category"] === "Medical");
            let lifestyleArray = currentItems.filter((item) => item["category"] === "Lifestyle");
            setSortedItems({
                ...sortedItems,
                entertainment: entertainmentArray,
                fitness: fitnessArray,
                medical: medicalArray,
                lifestyle: lifestyleArray,
            })
        }
    }, [currentItems]);

    return (
        <>
            {!currentItems
            ? <h1>Products By Category Loading...</h1>
            :
            <>
                <h1>Shop by Category</h1>
                <CategoryContainer>
                    {!sortedItems["entertainment"]
                    ? <h1>Entertainment</h1>
                    :
                        <div>
                            <img src={sortedItems["entertainment"][0]["imageSrc"]} alt="entertainment product" />
                            <h1>Entertainment</h1>
                        </div>
                    }
                    {!sortedItems["fitness"]
                    ? <h1>Fitness</h1>
                    :
                        <div>
                            <img src={sortedItems["fitness"][0]["imageSrc"]} alt="fitness product" />
                            <h1>Fitness</h1>
                        </div>
                    }
                    {!sortedItems["medical"]
                    ? <h1>Medical</h1>
                    :
                        <div>
                            <img src={sortedItems["medical"][0]["imageSrc"]} alt="medical product" />
                            <h1>Medical</h1>
                        </div>
                    }
                    {!sortedItems["lifestyle"]
                    ? <h1>Lifestyle</h1>
                    :
                        <div>
                            <img src={sortedItems["lifestyle"][0]["imageSrc"]} alt="lifestyle product" />
                            <h1>Lifestyle</h1>
                        </div>
                    }
                </CategoryContainer>
            </>
            }
        </>
    )
}

const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export default ProductsByCategory;
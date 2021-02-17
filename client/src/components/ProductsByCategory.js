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
            <ComponentContainer>
                <ComponentTitle>Shop by Category</ComponentTitle>
                <CategoryContainer>
                    {!sortedItems["entertainment"]
                    ? <CategoryTitle>Entertainment</CategoryTitle>
                    :
                        <div>
                            <img src={sortedItems["entertainment"][0]["imageSrc"]} alt="entertainment product" />
                            <CategoryTitle>Entertainment</CategoryTitle>
                        </div>
                    }
                    {!sortedItems["fitness"]
                    ? <CategoryTitle>Fitness</CategoryTitle>
                    :
                        <div>
                            <img src={sortedItems["fitness"][0]["imageSrc"]} alt="fitness product" />
                            <CategoryTitle>Fitness</CategoryTitle>
                        </div>
                    }
                    {!sortedItems["medical"]
                    ? <CategoryTitle>Medical</CategoryTitle>
                    :
                        <div>
                            <img src={sortedItems["medical"][0]["imageSrc"]} alt="medical product" />
                            <CategoryTitle>Medical</CategoryTitle>
                        </div>
                    }
                    {!sortedItems["lifestyle"]
                    ? <CategoryTitle>Lifestyle</CategoryTitle>
                    :
                        <div>
                            <img src={sortedItems["lifestyle"][0]["imageSrc"]} alt="lifestyle product" />
                            <CategoryTitle>Lifestyle</CategoryTitle>
                        </div>
                    }
                </CategoryContainer>
            </ComponentContainer>
            }
        </>
    )
}

const ComponentContainer = styled.div`
    position: relative;
    width: 95%;
    left: 5px;
`;

const ComponentTitle = styled.h1`
    margin-left: 10px;
    font-size: 24pt;
    color: #6565EE;
`;

const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
`;

const CategoryTitle = styled.h1`
    text-align: center;
    font-size: 16pt;
`;

export default ProductsByCategory;
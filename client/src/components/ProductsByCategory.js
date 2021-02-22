import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ProductsByCategory = () => {
    const currentItems = useSelector(state => state.itemGridReducer.currentItems);
    const [sortedItems, setSortedItems] = useState({
        entertainment: null,
        fitness: null,
        medical: null,
        lifestyle: null,
    })

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
                <CategoriesContainer>
                    {!sortedItems["entertainment"]
                    ? <CategoryTitle>Entertainment</CategoryTitle>
                    :
                        <IndivCategoryContainer>
                            <Image src={sortedItems["entertainment"][3]["imageSrc"]} alt="entertainment product" />
                            <CategoryTitle>Entertainment</CategoryTitle>
                        </IndivCategoryContainer>
                    }
                    {!sortedItems["fitness"]
                    ? <CategoryTitle>Fitness</CategoryTitle>
                    :
                        <IndivCategoryContainer>
                            <Image src={sortedItems["fitness"][0]["imageSrc"]} alt="fitness product" />
                            <CategoryTitle>Fitness</CategoryTitle>
                        </IndivCategoryContainer>
                    }
                    {!sortedItems["medical"]
                    ? <CategoryTitle>Medical</CategoryTitle>
                    :
                        <IndivCategoryContainer>
                            <Image src={sortedItems["medical"][1]["imageSrc"]} alt="medical product" />
                            <CategoryTitle>Medical</CategoryTitle>
                        </IndivCategoryContainer>
                    }
                    {!sortedItems["lifestyle"]
                    ? <CategoryTitle>Lifestyle</CategoryTitle>
                    :
                        <IndivCategoryContainer>
                            <Image src={sortedItems["lifestyle"][0]["imageSrc"]} alt="lifestyle product" />
                            <CategoryTitle>Lifestyle</CategoryTitle>
                        </IndivCategoryContainer>
                    }
                </CategoriesContainer>
            </ComponentContainer>
            }
        </>
    )
}

const ComponentContainer = styled.div`
    position: relative;
    width: 95%;
    left: 5px;
    top: 1200px;
    bottom: 10px;
`;

const ComponentTitle = styled.h1`
    margin-left: 10px;
    font-size: 24pt;
    color: #6565EE;
`;

const CategoriesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
`;

const IndivCategoryContainer = styled.div`
    position: relative;
    flex: 0 0 auto;
    padding: 4px;
    border: 2px solid #dcdcdc;

    &:hover {
        transform: scale(1.1);
    }
`;

const CategoryTitle = styled.h1`
    text-align: center;
    font-size: 16pt;
`;

const Image = styled.img`
    width: 150x;
    height: 125px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
`;

export default ProductsByCategory;
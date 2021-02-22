import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Companies = () => {
    const companies = useSelector((state) => state.companiesReducer.companies);
    const currentItems = useSelector((state) => state.itemGridReducer.currentItems);
    const [products, setProducts] = useState({
        fitbit: null,
        sony: null,
        polar: null,
        garmin: null,
    });

    useEffect(() => {
        if(companies && currentItems) {
            let fitbitProducts = currentItems.filter((item) => {
                return item["companyId"] === companies[6]["_id"];
            })
            let sonyProducts = currentItems.filter((item) => {
                return item["companyId"] === companies[65]["_id"];
            })
            let polarProducts = currentItems.filter((item) => {
                return item["companyId"] === companies[17]["_id"];
            })
            let garminProducts = currentItems.filter((item) => {
                return item["companyId"] === companies[8]["_id"];
            })
            setProducts({
                ...products,
                fitbit: fitbitProducts,
                sony: sonyProducts,
                polar: polarProducts,
                garmin: garminProducts,
                })
        }
    }, [companies, currentItems]);

    return (
        <>
            {!companies && currentItems
            ? <h1>Companies loading...</h1>
            :
            <ComponentContainer>
                <ComponentTitle>Shop by Company</ComponentTitle>
                <CompanyContainer>
                    {!products["fitbit"]
                    ? <CategoryTitle>Fitbit</CategoryTitle>
                    :
                        <ItemContainer>
                            <Image src={products["fitbit"][0]["imageSrc"]} alt="fitbit product" />
                            <CategoryTitle>Fitbit</CategoryTitle>
                        </ItemContainer>
                    }
                    {!products["sony"]
                    ? <CategoryTitle>Sony</CategoryTitle>
                    :
                        <ItemContainer>
                            <Image src={products["sony"][0]["imageSrc"]} alt="sony product" />
                            <CategoryTitle>Sony</CategoryTitle>
                        </ItemContainer>
                    }
                    {!products["polar"]
                    ? <CategoryTitle>Polar</CategoryTitle>
                    :
                        <ItemContainer>
                            <Image src={products["polar"][0]["imageSrc"]} alt="polar product" />
                            <CategoryTitle>Polar</CategoryTitle>
                        </ItemContainer>
                    }
                    {!products["garmin"]
                    ? <CategoryTitle>Garmin</CategoryTitle>
                    :
                        <ItemContainer>
                            <Image src={products["garmin"][0]["imageSrc"]} alt="garmin product" />
                            <CategoryTitle>Garmin</CategoryTitle>
                        </ItemContainer>
                    }
                </CompanyContainer>
            </ComponentContainer>
            }
        </>
    )
}

const ComponentContainer = styled.div`
    position: absolute;
    width: 95%;
    left: 5px;
    top: 900px;
`;

const ComponentTitle = styled.h1`
    margin-left: 10px;
    font-size: 24pt;
    color: #6565EE;
`;

const CategoryTitle = styled.h1`
    text-align: center;
    font-size: 16pt;
`;

const CompanyContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const ItemContainer = styled.div`
    flex: 0 0 auto;
    padding: 4px;
    border: 2px solid #dcdcdc;

    &:hover {
        transform: scale(1.1);
    }
`;

const Image = styled.img`
    width: 150px;
    height: 125px;
`;

export default Companies;
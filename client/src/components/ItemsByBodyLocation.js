import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import styled from "styled-components";

const ItemsByBodyLocation = () => {
    // const currentItems = useSelector((state) => state.currentItems);
    const [currentItems, setCurrentItems] = useState();
    const [productByBodyLocation, setProductByBodyLocation] = useState({
        wrist: null,
        arm: null,
        head: null,
        chest: null,
        waist: null,
        hands: null,
        neck: null,
        feet: null,
        torso: null,
    })

    useEffect(() => {
        fetch('/products')
        .then((res) => res.json())
        .then((response) => setCurrentItems(response.data));
    }, []);

    useEffect(() => {
        if(currentItems) {
            const wristItemArray = currentItems.filter((item) => item["body_location"] === "Wrist");
            const armItemArray = currentItems.filter((item) => item["body_location"] === "Arms");
            const headItemArray = currentItems.filter((item) => item["body_location"] === "Head");
            const chestItemArray = currentItems.filter((item) => item["body_location"] === "Chest");
            const waistItemArray = currentItems.filter((item) => item["body_location"] === "Waist");
            const handsItemArray = currentItems.filter((item) => item["body_location"] === "Hands");
            const neckItemArray = currentItems.filter((item) => item["body_location"] === "Neck");
            const feetItemArray = currentItems.filter((item) => item["body_location"] === "Feet");
            const torsoItemArray = currentItems.filter((item) => item["body_location"] === "Torso");
            setProductByBodyLocation({
                ...productByBodyLocation,
                wrist: wristItemArray,
                arm: armItemArray,
                head: headItemArray,
                chest: chestItemArray,
                waist: waistItemArray,
                hands: handsItemArray,
                neck: neckItemArray,
                feet: feetItemArray,
                torso: torsoItemArray,
            })
        }
    }, [currentItems]);

    return (
        <>
            {!currentItems
            ? <h1>Items by Body Location Loading...</h1>
            :
            <ComponentContainer>
                <ComponentTitle>Shop by Body Location</ComponentTitle>
                <BigContainer>
                    <ContainerOne>
                        {!productByBodyLocation["wrist"]
                        ? <CategoryTitle>Wrist Products</CategoryTitle>
                        :
                            <div>
                                <img src={productByBodyLocation["wrist"][0]["imageSrc"]} alt="wrist product" />
                                <CategoryTitle>Wrist Products</CategoryTitle>
                            </div>
                        }
                        {!productByBodyLocation["arm"]
                        ? <CategoryTitle>Arm Products</CategoryTitle>
                        :
                            <div>
                                <img src={productByBodyLocation["arm"][0]["imageSrc"]} alt="arm product" />
                                <CategoryTitle>Arm Products</CategoryTitle>
                            </div>
                        }
                        {!productByBodyLocation["head"]
                        ? <CategoryTitle>Head Products</CategoryTitle>
                        :
                            <div>
                                <img src={productByBodyLocation["head"][0]["imageSrc"]} alt="head product" />
                                <CategoryTitle>Head Products</CategoryTitle>
                            </div>
                        }
                    </ContainerOne>
                    <ContainerTwo>
                        {!productByBodyLocation["chest"]
                        ? <CategoryTitle>Chest Products</CategoryTitle>
                        :
                            <div>
                                <img src={productByBodyLocation["chest"][0]["imageSrc"]} alt="chest product" />
                                <CategoryTitle>Chest Products</CategoryTitle>
                            </div>
                        }
                        {!productByBodyLocation["waist"]
                        ? <CategoryTitle>Waist Products</CategoryTitle>
                        :
                            <div>
                                <img src={productByBodyLocation["waist"][0]["imageSrc"]} alt="waist product" />
                                <CategoryTitle>Waist Products</CategoryTitle>
                            </div>
                        }
                        {!productByBodyLocation["hands"]
                        ? <CategoryTitle>Hands Products</CategoryTitle>
                        :
                            <div>
                                <img src={productByBodyLocation["hands"][0]["imageSrc"]} alt="hand product" />
                                <CategoryTitle>Hands Products</CategoryTitle>
                            </div>
                        }
                    </ContainerTwo>
                    <ContainerThree>
                    {!productByBodyLocation["neck"]
                        ? <CategoryTitle>Neck Products</CategoryTitle>
                        :
                            <div>
                                <img src={productByBodyLocation["neck"][0]["imageSrc"]} alt="neck product" />
                                <CategoryTitle>Neck Products</CategoryTitle>
                            </div>
                        }
                        {!productByBodyLocation["feet"]
                        ? <CategoryTitle>Feet Products</CategoryTitle>
                        :
                            <div>
                                <img src={productByBodyLocation["feet"][0]["imageSrc"]} alt="feet product" />
                                <CategoryTitle>Feet Products</CategoryTitle>
                            </div>
                        }
                        {!productByBodyLocation["torso"]
                        ? <CategoryTitle>Torso Products</CategoryTitle>
                        :
                            <div>
                                <img src={productByBodyLocation["torso"][0]["imageSrc"]} alt="torso product" />
                                <CategoryTitle>Torso Products</CategoryTitle>
                            </div>
                        }
                    </ContainerThree>
                </BigContainer>
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

const BigContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContainerOne = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const ContainerTwo = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const ContainerThree = styled.div`
    display: flex;
    justify-content: space-evenly;
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

export default ItemsByBodyLocation;
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
                    {!productByBodyLocation["wrist"]
                    ? <CategoryTitle>Wrist</CategoryTitle>
                    :
                        <ItemContainer>
                            <Image src={productByBodyLocation["wrist"][0]["imageSrc"]} alt="wrist product" />
                            <CategoryTitle>Wrist</CategoryTitle>
                        </ItemContainer>
                    }
                    {!productByBodyLocation["arm"]
                    ? <CategoryTitle>Arm</CategoryTitle>
                    :
                        <ItemContainer>
                            <Image src={productByBodyLocation["arm"][0]["imageSrc"]} alt="arm product" />
                            <CategoryTitle>Arm</CategoryTitle>
                        </ItemContainer>
                    }
                    {!productByBodyLocation["head"]
                    ? <CategoryTitle>Head</CategoryTitle>
                    :
                        <ItemContainer>
                            <Image src={productByBodyLocation["head"][0]["imageSrc"]} alt="head product" />
                            <CategoryTitle>Head</CategoryTitle>
                        </ItemContainer>
                    }
                    {!productByBodyLocation["chest"]
                    ? <CategoryTitle>Chest</CategoryTitle>
                    :
                        <ItemContainer>
                            <Image src={productByBodyLocation["chest"][0]["imageSrc"]} alt="chest product" />
                            <CategoryTitle>Chest</CategoryTitle>
                        </ItemContainer>
                    }
                    {!productByBodyLocation["waist"]
                    ? <CategoryTitle>Waist</CategoryTitle>
                    :
                        <ItemContainer>
                            <Image src={productByBodyLocation["waist"][0]["imageSrc"]} alt="waist product" />
                            <CategoryTitle>Waist</CategoryTitle>
                        </ItemContainer>
                    }
                    {!productByBodyLocation["hands"]
                    ? <CategoryTitle>Hand</CategoryTitle>
                    :
                        <ItemContainer>
                            <Image src={productByBodyLocation["hands"][0]["imageSrc"]} alt="hand product" />
                            <CategoryTitle>Hand</CategoryTitle>
                        </ItemContainer>
                    }
                    {!productByBodyLocation["neck"]
                    ? <CategoryTitle>Neck</CategoryTitle>
                    :
                        <ItemContainer>
                            <Image src={productByBodyLocation["neck"][0]["imageSrc"]} alt="neck product" />
                            <CategoryTitle>Neck</CategoryTitle>
                        </ItemContainer>
                    }
                    {!productByBodyLocation["feet"]
                    ? <CategoryTitle>Foot</CategoryTitle>
                    :
                        <ItemContainer>
                            <Image src={productByBodyLocation["feet"][0]["imageSrc"]} alt="feet product" />
                            <CategoryTitle>Foot</CategoryTitle>
                        </ItemContainer>
                    }
                    {!productByBodyLocation["torso"]
                    ? <CategoryTitle>Torso</CategoryTitle>
                    :
                        <ItemContainer>
                            <Image src={productByBodyLocation["torso"][0]["imageSrc"]} alt="torso product" />
                            <CategoryTitle>Torso</CategoryTitle>
                        </ItemContainer>
                    }
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
    flex-wrap: nowrap;
    overflow-x: auto;
    margin-left: 40px;
    margin-right: 10px;
    padding: 15px;
`;

const ItemContainer = styled.div`
    flex: 0 0 auto;
    margin: 0 45px;

    &:hover {
        transform: scale(1.1);
    }
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

const Image = styled.img`
    width: 150px;
    height: 125px;
`;

export default ItemsByBodyLocation;
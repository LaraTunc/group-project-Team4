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
            <>
                <h1>Shop by Body Location</h1>
                <BigContainer>
                    <ContainerOne>
                        {!productByBodyLocation["wrist"]
                        ? <h1>Wrist Products</h1>
                        :
                            <div>
                                <img src={productByBodyLocation["wrist"][0]["imageSrc"]} alt="wrist product" />
                                <h1>Wrist Products</h1>
                            </div>
                        }
                        {!productByBodyLocation["arm"]
                        ? <h1>Arm Products</h1>
                        :
                            <div>
                                <img src={productByBodyLocation["arm"][0]["imageSrc"]} alt="arm product" />
                                <h1>Arm Products</h1>
                            </div>
                        }
                        {!productByBodyLocation["head"]
                        ? <h1>Head Products</h1>
                        :
                            <div>
                                <img src={productByBodyLocation["head"][0]["imageSrc"]} alt="head product" />
                                <h1>Head Products</h1>
                            </div>
                        }
                    </ContainerOne>
                    <ContainerTwo>
                        {!productByBodyLocation["chest"]
                        ? <h1>Chest Products</h1>
                        :
                            <div>
                                <img src={productByBodyLocation["chest"][0]["imageSrc"]} alt="chest product" />
                                <h1>Chest Products</h1>
                            </div>
                        }
                        {!productByBodyLocation["waist"]
                        ? <h1>Waist Products</h1>
                        :
                            <div>
                                <img src={productByBodyLocation["waist"][0]["imageSrc"]} alt="waist product" />
                                <h1>Waist Products</h1>
                            </div>
                        }
                        {!productByBodyLocation["hands"]
                        ? <h1>Hands Products</h1>
                        :
                            <div>
                                <img src={productByBodyLocation["hands"][0]["imageSrc"]} alt="hand product" />
                                <h1>Hand Product</h1>
                            </div>
                        }
                    </ContainerTwo>
                    <ContainerThree>
                    {!productByBodyLocation["neck"]
                        ? <h1>Neck Products</h1>
                        :
                            <div>
                                <img src={productByBodyLocation["neck"][0]["imageSrc"]} alt="neck product" />
                                <h1>Neck Products</h1>
                            </div>
                        }
                        {!productByBodyLocation["feet"]
                        ? <h1>Feet Products</h1>
                        :
                            <div>
                                <img src={productByBodyLocation["feet"][0]["imageSrc"]} alt="feet product" />
                                <h1>Feet Products</h1>
                            </div>
                        }
                        {!productByBodyLocation["torso"]
                        ? <h1>Torso Products</h1>
                        :
                            <div>
                                <img src={productByBodyLocation["torso"][0]["imageSrc"]} alt="torso product" />
                                <h1>Torso Products</h1>
                            </div>
                        }
                    </ContainerThree>
                </BigContainer>
            </>
            }
        </>
    )
}

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

export default ItemsByBodyLocation;
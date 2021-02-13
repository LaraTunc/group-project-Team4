import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Companies = () => {
// const companies = useSelector((state) => state.companies);
// const currentItems = useSelector((state) => state.currentItems);
const [companies, setCompanies] = useState();
const [currentItems, setCurrentItems] = useState();
const [products, setProducts] = useState({
    fitbit: null,
    sony: null,
    polar: null,
    garmin: null,
});

useEffect(() => {
    fetch('/companies')
    .then((res) => res.json())
    .then((response) => setCompanies(response.data));
}, []);

useEffect(() => {
    fetch('/products')
    .then((res) => res.json())
    .then((response) => setCurrentItems(response.data));
}, []);

useEffect(() => {
    if(currentItems) {
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
}, [currentItems]);

console.log(products);
console.log(products["fitbit"]);

return (
    <>
        {!companies
        ? <h1>Companies loading...</h1>
        :
        <>
            <h1>Shop by Company</h1>
            <CompanyContainer>
                {!products["fitbit"]
                ? <h1>Fitbit</h1>
                :
                    <div>
                        <Image src={products["fitbit"][0]["imageSrc"]} alt="fitbit product" />
                        <h1>Fitbit</h1>
                    </div>
                }
                {!products["sony"]
                ? <h1>Sony</h1>
                :
                    <div>
                        <Image src={products["sony"][0]["imageSrc"]} alt="sony product" />
                        <h1>Sony</h1>
                    </div>
                }
                {!products["polar"]
                ? <h1>Polar</h1>
                :
                    <div>
                        <Image src={products["polar"][0]["imageSrc"]} alt="polar product" />
                        <h1>Polar</h1>
                    </div>
                }
                {!products["garmin"]
                ? <h1>Garmin</h1>
                :
                    <div>
                        <Image src={products["garmin"][0]["imageSrc"]} alt="garmin product" />
                        <h1>Garmin</h1>
                    </div>
                }
            </CompanyContainer>
        </>
        }
    </>
)
}

const CompanyContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Image = styled.img`
    width: 250px;
    height: 200px;
`;

export default Companies;
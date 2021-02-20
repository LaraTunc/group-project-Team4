import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import ItemsByBodyLocation from "./ItemsByBodyLocation";
import Companies from "./Companies";
import ProductsByCategory from "./ProductsByCategory";
import {
  requestCompanies,
  receiveCompanies,
  receiveCompaniesError,
} from "../actions.js";
import { requestItems, receiveItems, receiveItemsError } from "../actions";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCompanies());
    fetch("/companies")
      .then((res) => res.json())
      .then((response) => dispatch(receiveCompanies(response.data)))
      .catch((error) => dispatch(receiveCompaniesError(error)));
  }, []);

  useEffect(() => {
    dispatch(requestItems());
    fetch("/products")
      .then((res) => res.json())
      .then((products) => {
        dispatch(receiveItems(products.data));
      })
      .catch((error) => {
        dispatch(receiveItemsError(error));
      });
  }, []);

  return (
    <Container>
      <ImageContainer>
        <Image
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.michaelsolomon.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fwearable-technology.jpg&f=1&nofb=1"
          alt="running with tech"
        />
        <HeadingContainer>
          <Heading>Wearable Technology</Heading>
        </HeadingContainer>
      </ImageContainer>
      <ItemsByBodyLocation />
      <Companies />
      <ProductsByCategory />
    </Container>
  );
};

const Container = styled.div`
  margin: 10px 0;
`;

const ImageContainer = styled.div`
  position: relative;
  left: 15%;
  width: 1200px;
  height: 650px;
`;

const Heading = styled.h2`
  display: none;
  position: absolute;
  left: 35%;
  top: 40%;
  z-index: 3;
`;

const HeadingContainer = styled.div`
  position: absolute;
  width: 960px;
  height: 640px;

  &:hover {
    display: block;
    background-color: gray;
    opacity: 0.5;
    ${Heading} {
      display: block;
    }
  }
`;

const Image = styled.img`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  /* &:hover {
        border: 5px solid black;
    } */
`;

export default Homepage;

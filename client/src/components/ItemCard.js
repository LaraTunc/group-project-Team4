import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";

const ItemCard = ({ item, company }) => {
  const dispatch = useDispatch();

  return (
    <ItemWrapper key={item._id}>
      <ItemLink href={`/product/${item._id}`} />
      <Image src={item.imageSrc} />
      <Brand key={item.companyId}>{company?.name}</Brand>
      <Description>{item.name}</Description>
      <Price>{item.price}</Price>
      <Button onClick={() => dispatch(addItem(item))}>Add to cart</Button>
    </ItemWrapper>
  );
};

export default ItemCard;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  text-align: left;
  padding: 15px;
`;

const ItemLink = styled.a`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-decoration: none;
  z-index: 1;
  background-color: #fff;
  opacity: 0;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 250px;
  padding: 5px;
`;

const Brand = styled.p`
  color: #000;
  font-weight: bold;
  padding: 5px;
`;

const Button = styled.button`
  position: relative;
  z-index: 2;
  bottom: 0;
  background-color: #6565ee;
  color: white;
  padding: 10px;
  font-weight: bold;
`;

const Description = styled.p``;

const Price = styled.p``;

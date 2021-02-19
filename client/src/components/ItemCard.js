import React from "react";
import styled from "styled-components";

const ItemCard = ({ item, company }) => {
  return (
    <ItemWrapper key={item._id}>
      <ItemLink href={`/product/${item._id}`} />
      <Image src={item.imageSrc} />
      <Brand key={item.companyId}>{company?.name}</Brand>
      <Description>{item.name}</Description>
      <Price>{item.price}</Price>
    </ItemWrapper>
  );
};

export default ItemCard;

const ItemWrapper = styled.div`
  position: relative;
  padding: 15px;
`;

const ItemLink = styled.a`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-decoration: none;
  z-index: 10;
  background-color: #fff;
  opacity: 0;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  min-height: 180px;
  padding-bottom: 5px;
`;

const Brand = styled.p`
  color: #000;
  font-weight: bold;
`;

const Description = styled.p``;

const Price = styled.p``;

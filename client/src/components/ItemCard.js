import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const ItemCard = ({ item, company }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(addItem(item));

  return (
    <ItemWrapper key={item._id}>
      <ItemLink stock={item.numInStock} to={`/product/${item._id}`} />
      <Image src={item.imageSrc} />
      <Brand key={item.companyId}>{company?.name}</Brand>
      <Description>{item.name}</Description>
      <Price>{item.price}</Price>
      {item.numInStock === 0 ? (
        <Button style={{ backgroundColor: "grey" }} disabled>
          Out of stock
        </Button>
      ) : (
        <Button onClick={handleClick}>Add to cart</Button>
      )}
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

const ItemLink = styled(Link)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-decoration: none;
  z-index: 1;
  background-color: #fff;
  opacity: ${(props) => (props.stock === 0 ? 0.3 : 0)};
  pointer-events: ${(props) => (props.stock === 0 ? "none" : "auto")};
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

const Description = styled.p``;

const Price = styled.p``;

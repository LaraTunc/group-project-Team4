import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { requestItems, receiveItems, receiveItemsError } from "../actions";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import Pages from "./Pages";

const ItemGrid = () => {
  const dispatch = useDispatch();
  const [companies, setCompanies] = useState();
  const [page, setPage] = useState(1);
  const [pageNums, setPageNums] = useState([]);
  const status = useSelector((state) => state.itemGridReducer.status);
  const currentItems = useSelector((state) => ({
    ...state.itemGridReducer.currentItems,
  }));

  useEffect(() => {
    dispatch(requestItems());
    fetch(`/products/pages?page=${page}&limit=50`)
      .then((res) => res.json())
      .then((products) => {
        dispatch(receiveItems(products.data));
        setPageNums(products.pages);
      })
      .catch((error) => {
        dispatch(receiveItemsError(error));
      });
  }, [page]);

  useEffect(() => {
    fetch("/companies")
      .then((res) => res.json())
      .then((json) => {
        setCompanies(json.data);
      });
  }, []);

  if (!status) {
    return <div>LOADING...</div>;
  }

  return (
    <Wrapper>
      <GridWrapper>
        {currentItems &&
          companies &&
          Object.values(currentItems).map((item) => {
            const company = companies.find(
              (company) => item.companyId === company._id
            );
            return <ItemCard item={item} key={item._id} company={company} />;
          })}
      </GridWrapper>
      <Pages pageNums={pageNums} page={page} setPage={setPage} />
    </Wrapper>
  );
};

export default ItemGrid;

const Wrapper = styled.div`
  text-align: center;
`;

const GridWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 24px;
`;

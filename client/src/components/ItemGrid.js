import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  fetchItemsData,
  receiveItemsData,
  receiveItemsDataError,
} from "../actions";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";

const ItemGrid = () => {
  const dispatch = useDispatch();
  const [companies, setCompanies] = useState();
  const [page, setPage] = useState(1);
  const pageNums = [1, 2, 3, 4, 5, 6];
  const status = useSelector((state) => state.itemGridReducer.status);
  const currentItems = useSelector((state) => ({
    ...state.itemGridReducer.currentItems,
  }));

  useEffect(() => {
    dispatch(fetchItemsData()); // revise to requestItems
    fetch(`/products/pages?page=${page}&limit=50`)
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        dispatch(receiveItemsData(products.data));
      })
      .catch((error) => {
        dispatch(receiveItemsDataError(error));
      });
  }, [page]);

  useEffect(() => {
    fetch("/companies")
      .then((res) => res.json())
      .then((json) => {
        setCompanies(json.data);
      });
  }, []);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

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
            return <ItemCard item={item} company={company} />;
          })}
      </GridWrapper>
      <ButtonWrapper>
        {page > 1 && <Button onClick={prevPage}>previous</Button>}
        {pageNums.map((pageNum) => (
          <Button onClick={() => setPage(pageNum)}>{pageNum}</Button>
        ))}
        {page < 6 && <Button onClick={nextPage}>next</Button>}
      </ButtonWrapper>
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

const ButtonWrapper = styled.div`
  margin-top: 10px;
  bottom: 0;
`;

const Button = styled.button`
  padding: 10px;
`;

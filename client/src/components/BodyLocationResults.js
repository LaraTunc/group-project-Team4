import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const BodyLocationResults = () => {
  const { category } = useParams();
  const currentItems = useSelector(
    (state) => state.itemGridReducer.currentItems
  );
  const companies = useSelector((state) => state.companiesReducer.companies);

  return (
    <Container>
      <h1>Products for: {category} </h1>
      <Wrapper>
        {currentItems
          ?.filter((item) => item["body_location"].toLowerCase() === category)
          .map((item) => {
            return (
              <ItemWrapper>
                <img src={item.imageSrc} alt={`${category} product`} />
                {companies &&
                  companies.map((company) => {
                    if (item.companyId === company["_id"]) {
                      return <p>{company.name}</p>;
                    }
                  })}
                <p>{item.name}</p>
                <p>{item.price}</p>
              </ItemWrapper>
            );
          })}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  left: 3%;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 24px;
`;

const ItemWrapper = styled.div`
  position: relative;
  padding: 15px;
`;

export default BodyLocationResults;

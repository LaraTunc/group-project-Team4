import React from "react";
import styled from "styled-components";

const Pages = ({ pageNums, page, setPage }) => {
  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return (
    <ButtonWrapper>
      {page > pageNums[0] && <Button onClick={prevPage}>previous</Button>}
      {pageNums.map((pageNum) => (
        <Button key={pageNum} onClick={() => setPage(pageNum)}>
          {pageNum}
        </Button>
      ))}
      {page < pageNums.length && <Button onClick={nextPage}>next</Button>}
    </ButtonWrapper>
  );
};

export default Pages;

const ButtonWrapper = styled.div`
  margin-top: 10px;
  bottom: 0;
`;

const Button = styled.button`
  padding: 10px;
`;

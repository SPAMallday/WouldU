import styled from "styled-components";
import React, { useState, useEffect } from "react";
import testinput from "./testinput";
import Element from "./Element";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

export default function SearchResult ({value}) {
  // const { searchQuery, filterKinds } = props;
  // eslint-disable-next-line
  const [limit, setLimit] = React.useState(15);
  const [page, setPage] = React.useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    console.log( value )
  }
  );
  
  return (
    <>
      <StyledWrapper>
        <div id="result">
          {value && value.slice(0, limit).map((result) => (
            <Link to={`/detail/${result.alcohol_no}`} key={`detail + ${result.alcohol_no}`}>
              <Element
                id={result.alcohol_no}
                img_link={result.alcohol_image}
                name={result.alcohol_name}
                brewery={result.brewery}
                // ingredients={result.}
                size={result.size}
                alcohol={result.abv}
                // desc={result.}
                key={`${result.alcohol_no}`}
              />
            </Link>
          ))}
        </div>
      </StyledWrapper>
        <Pagination
          total={20}
          limit={limit}
          page={page}
          setPage={setPage}
        />
    </>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: black;
  }
  #result {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    
  }
`;
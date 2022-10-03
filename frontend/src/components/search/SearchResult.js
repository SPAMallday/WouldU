import styled from "styled-components";
import React, { useState, useEffect } from "react";
import testinput from "./testinput";
import Element from "./Element";
import { Link } from "react-router-dom";
// import Pagination from "./Pagination";
import Pagination from "react-js-pagination";

export default function SearchResult ({value, params, setParams}) {
  // const { searchQuery, filterKinds } = props;
  // eslint-disable-next-line
  const [limit, setLimit] = useState(15);
  const [totalPage, setTotalPage] = useState(1);

  const handlePageChange = (page) => {
    // setPage(page);
    setParams(prevState => ({...prevState, 
      page: page
    }))
  };

  useEffect(() => {
    if (value.length > 0) {
      console.log(value[0].total_count)
      setTotalPage(value[0].total_count)
    }
  }, [value]);
  
  return (
    <>
      <StyledWrapper>
        <div id="result">
          {value && value.map((result) => (
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
        {/* <Pagination
          total={value.length}
          limit={limit}
          page={page}
          setPage={setPage}
        /> */}
      <Pagination
        activePage={params.page} // 현재 페이지
        itemsCountPerPage={limit} // 한 페이지랑 보여줄 아이템 갯수
        totalItemsCount={totalPage} // 총 아이템 갯수
        pageRangeDisplayed={5} // paginator의 페이지 범위
        prevPageText={"‹"} // "이전"을 나타낼 텍스트
        nextPageText={"›"} // "다음"을 나타낼 텍스트
        onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
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
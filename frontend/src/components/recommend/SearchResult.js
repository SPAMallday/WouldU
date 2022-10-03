import styled from "styled-components";
import SearchResultElement from "components/recommend/SearchResultElement";
import Pagination from "react-js-pagination";
import React, { useState, useEffect } from "react";

// 검색결과 배열 테스트용
const test = [
  {
    alcohol_no: 1,
    alcohol_name: "1000억 유산균 막걸리",
    abv: 5,
    material: "쌀, 누룩",
    detail: "유산균이 어쩌고",
    brewery: "국순당",
    award: "2010년 어쩌고",
    like_count: 1,
    food: "전, 회무침",
    tag: "저도수",
    region_code: "R1",
    size: 750,
    alcohol_code: "A5",
    alcohol_image: "https://a402o1a4.s3.ap-northeast-2.amazonaws.com/1.png",
  },
];

export default function SearchResult(props) {
  const { searchData, params, setParams, setHandleClick, setReviewTarget } = props;


  const [limit, setLimit] = useState(15);
  const [totalPage, setTotalPage] = useState(1);

  const handlePageChange = (page) => {
    // setPage(page);
    setParams(prevState => ({...prevState, 
      page: page
    }))
  };

  useEffect(() => {
    if (searchData.length > 0) {
      console.log(searchData[0].total_count)
      setTotalPage(searchData[0].total_count)
    }
  }, [searchData]);

  return (
    <>
      <StyledWrapper>
        <div id="result">
            {searchData && searchData.map((result) => (
            <div
              key={`detail + ${result.alcohol_no}`}
              onClick={() => {
                setHandleClick(true);
                setReviewTarget({
                  alcohol_no: result.alcohol_no,
                  alcohol_image: result.alcohol_image,
                  alcohol_name: result.alcohol_name,
                  brewery: result.brewery,
                  size: result.size,
                  abv: result.abv,
                });
              }}
            >
              <SearchResultElement
                id={result.alcohol_no}
                img_link={result.alcohol_image}
                name={result.alcohol_name}
                brewery={result.brewery}
                size={result.size}
                alcohol={result.abv}
                key={`${result.alcohol_no}`}
              />
            </div>
          ))}
        </div>
      </StyledWrapper>
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
  width: 1800px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  #result {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
  }
`;

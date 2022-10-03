import styled from "styled-components";
import * as React from "react";
import SearchResultElement from "components/recommend/SearchResultElement";

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
  const { searchQuery, setHandleClick, setReviewTarget } = props;

  const filterName = test.filter(q => {
    return q.alcohol_name
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(searchQuery.toLocaleLowerCase().replace(" ", ""));
  });

  const listItems = filterName.map(e => (
    <div
      key={`detail + ${e.alcohol_no}`}
      onClick={() => {
        setHandleClick(true);
        setReviewTarget({
          alcohol_no: e.alcohol_no,
          alcohol_image: e.alcohol_image,
          alcohol_name: e.alcohol_name,
          brewery: e.brewery,
          size: e.size,
          abv: e.alcohol,
        });
      }}
    >
      <SearchResultElement
        id={e.alcohol_no}
        img_link={e.alcohol_image}
        name={e.alcohol_name}
        brewery={e.brewery}
        size={e.size}
        alcohol={e.alcohol}
        key={`${e.alcohol_no}`}
      />
    </div>
  ));

  return (
    <StyledWrapper>
      <div id="result">{listItems}</div>
    </StyledWrapper>
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

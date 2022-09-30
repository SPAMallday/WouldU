import styled from "styled-components";
import * as React from "react";
import testinput from "components/search/testinput";
import SearchResultElement from "components/recommend/SearchResultElement"

export default function SearchResult(props) {
  const { searchQuery, setHandleClick, setReviewTarget } = props;

  const filterName = testinput.filter(q => {
    return q.name
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(searchQuery.toLocaleLowerCase().replace(" ", ""));
  });

  const listItems = filterName.map(e => (
    <div key={`detail + ${e.id}`} onClick={() => { setHandleClick(true); setReviewTarget(e.id) }}>
      <SearchResultElement
        id={e.id}
        img_link={e.img_link}
        name={e.name}
        brewery={e.brewery}
        size={e.size}
        alcohol={e.alcohol}
        key={`${e.id}`}
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

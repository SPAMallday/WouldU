import * as React from "react";
import styled from "styled-components";
import SearchFilterButton from "./SearchFilterButton";

export default function SearchFilter(props) {
  const { filterKinds, setFilterKinds } = props;

  return (
    <StyledWrapper>
      <div>
        <h3 id="filter-title">종류</h3>
        <div id="filter-elements">
          <SearchFilterButton
            buttonName="탁주"
            filterKinds={filterKinds}
            setFilterKinds={setFilterKinds}
          />
          <SearchFilterButton
            buttonName="약주·청주"
            filterKinds={filterKinds}
            setFilterKinds={setFilterKinds}
          />
          <SearchFilterButton
            buttonName="과실주"
            filterKinds={filterKinds}
            setFilterKinds={setFilterKinds}
          />
          <SearchFilterButton
            buttonName="증류주"
            filterKinds={filterKinds}
            setFilterKinds={setFilterKinds}
          />
          <SearchFilterButton
            buttonName="리쿠르/기타주류"
            filterKinds={filterKinds}
            setFilterKinds={setFilterKinds}
          />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 800px;
  height: auto;
  border: solid;
  margin: 0px 0px 20px;

  #filter-elements {
    display: flex;
  }
`;

import * as React from "react";
import styled from "styled-components";
import SearchFilterButton from "./SearchFilterButton";

export default function SearchFilter(props) {
  const { filterKinds, setFilterKinds } = props;

  return (
    <StyledWrapper>
      <div id="filter-frame">
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
            buttonName="리큐르/기타주류"
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
  border: 3px dashed #85c88a;
  border-radius: 10px;
  margin: 0px 0px 20px;
  padding: 15px;

  #filter-frame {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  #filter-title {
    font-family: "GD";
    margin: 0px 10px 0px 0px;
  }

  #filter-elements {
    display: flex;
  }
`;

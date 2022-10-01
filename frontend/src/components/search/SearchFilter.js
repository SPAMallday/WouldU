import React, { useEffect, useState } from "react";
import { search } from "../../api/searchAPI";
import styled from "styled-components";
import SearchFilterButton from "./SearchFilterButton";

export default function SearchFilter(props) {
  const { params, setParams, setSearchData } = props;

  return (
    <StyledWrapper>
      <div>
        <h3 id="filter-title">종류</h3>
        <div id="filter-elements">
          <SearchFilterButton
            buttonValue="A5"
            buttonName="탁주"
            params={params}
            setParams={setParams}
            setSearchData={setSearchData}
          />
          <SearchFilterButton
            buttonValue="A3"
            buttonName="약주·청주"
            params={params}
            setParams={setParams}
            setSearchData={setSearchData}
          />
          <SearchFilterButton
            buttonValue="A1"
            buttonName="과실주"
            params={params}
            setParams={setParams}
            setSearchData={setSearchData}
          />
          <SearchFilterButton
            buttonValue="A2"
            buttonName="증류주"
            params={params}
            setParams={setParams}
            setSearchData={setSearchData}
          />
          <SearchFilterButton
            buttonValue="A4"
            buttonName="리쿠르/기타주류"
            params={params}
            setParams={setParams}
            setSearchData={setSearchData}
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

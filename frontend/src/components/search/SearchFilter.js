import React, { useEffect, useState } from "react";
import { search } from "../../api/searchAPI";
import styled from "styled-components";
import SearchFilterButton from "./SearchFilterButton";

export default function SearchFilter(props) {
  const { params, setParams, setSearchData } = props;

  return (
    <StyledWrapper>
      <div id="filter-frame">
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
            buttonName="리큐르/기타주류"
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

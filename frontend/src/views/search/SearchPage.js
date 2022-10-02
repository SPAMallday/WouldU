import Header from "components/nav/Header";
import styled from "styled-components";
import SearchBar from "components/search/SearchBar";
import SearchFilter from "components/search/SearchFilter";
import SearchResult from "components/search/SearchResult";
import * as React from "react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filterKinds, setFilterKinds] = React.useState([]);

  return (
    <>
      <Header />
      <StyledWrapper>
        <div id="background">
          <div id="searchtools">
            <SearchBar setSearchQuery={setSearchQuery} />
            <SearchFilter
              filterKinds={filterKinds}
              setFilterKinds={setFilterKinds}
            />
            <SearchResult searchQuery={searchQuery} filterKinds={filterKinds} />
          </div>
        </div>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  background-color: #f7ecde;
  height: 88vh;
  
  #background {
    height: 100%;
  }
  #searchtools {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
  }
`;

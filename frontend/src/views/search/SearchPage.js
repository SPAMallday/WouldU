import Header from "components/nav/Header";
import styled from "styled-components";
import SearchFrame from "components/search/SearchFrame";
import SearchResult from "components/search/SearchResult";

export default function SearchPage() {
  return(
    <StyledWrapper>
      <Header />
      <SearchFrame />
      <SearchResult />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;
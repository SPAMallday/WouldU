import Header from "components/nav/Header";
import styled from "styled-components";
import SearchBar from "components/search/SearchBar";
import SearchResult from "components/recommend/SearchResult";
import ReviewForRecommend from "components/recommend/ReviewForRecommend";
import * as React from "react";

export default function SearchForRecommendPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [handleClick, setHandleClick] = React.useState(false);
  const [reviewTarget, setReviewTarget] = React.useState({});

  return (
    <>
      <Header />
      <StyledWrapper>
        {!handleClick ? (
          <>
            자신이 먹어본 술을 찾아, 리뷰를 남겨보세요!
            <SearchBar setSearchQuery={setSearchQuery} />
            <SearchResult
              searchQuery={searchQuery}
              setHandleClick={setHandleClick}
              setReviewTarget={setReviewTarget}
            />
          </>
        ) : (
          <ReviewForRecommend
            setHandleClick={setHandleClick}
            reviewTarget={reviewTarget}
          />
        )}
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

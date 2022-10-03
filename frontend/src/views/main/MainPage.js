import Header from "components/nav/Header"
import PhotoCarousel from "components/main/PhotoCarousel";
// import SearchWindow from "components/main/SearchWindow";
import styled from "styled-components";
import PopularWordCard from "components/main/PopularWordCard";
import RecentReviewCard from "components/main/RecentReviewCard";

export default function MainPage() {
  return(
    <StyledWrapper>
      <Header />
      <PhotoCarousel />
      <div id="popularwordslist">
        <PopularWordCard />
        <RecentReviewCard />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: #f7ecde;

  #popularwordslist {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
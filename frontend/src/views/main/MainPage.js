import styled from "styled-components";

// 디자인 v2
import Nav from "components/nav/Nav";
import PhotoCarousel from "components/main/PhotoCarousel";
import PopularWordCard from "components/main/PopularWordCard";
import RecentReviewCard from "components/main/RecentReviewCard";
import SametypeUserCard_V2 from "components/main/SametypeUserCard";

export default function MainPage() {
  return (
    <StyledWrapper>
      <Nav type="main" />
      <PhotoCarousel />
      <div id="popularwordslist">
        <PopularWordCard />
        <RecentReviewCard />
      </div>

      <div id="sametype">
        <SametypeUserCard_V2 />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #popularwordslist {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 40px;
  }
  #sametype {
    margin-top: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
`;

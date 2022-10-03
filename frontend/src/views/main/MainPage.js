import Header from "components/nav/Header";
import PhotoCarousel from "components/main/PhotoCarousel";
// import SearchWindow from "components/main/SearchWindow";
import styled from "styled-components";
import PopularWordCard from "components/main/PopularWordCard";
import RecentReviewCard from "components/main/RecentReviewCard";
import SametypeUserCard from "components/main/SametypeUserCard";

// 디자인 v2
import MainNav from "components/nav/MainNav";
import PhotoCarousel_V2 from "components/main/PhotoCarousel_v2";
import PopularWordCard_V2 from "components/main/PopularWordCard_v2";
import RecentReviewCard_V2 from "components/main/RecentReviewCard_v2";
import SametypeUserCard_V2 from "components/main/SametypeUserCard_v2";

export default function MainPage() {
  // return (
  //   <StyledWrapper>
  //     <Header />
  //     <PhotoCarousel />
  //     <div id="popularwordslist">
  //       <PopularWordCard />
  //       <RecentReviewCard />
  //     </div>

  //     <div id="sametype">
  //       <SametypeUserCard />
  //     </div>
  //   </StyledWrapper>
  // );
  return (
    <StyledWrapper>
      <MainNav />
      <PhotoCarousel_V2 />
      <div id="popularwordslist">
        <PopularWordCard_V2 />
        <RecentReviewCard_V2 />
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

import styled from "styled-components";

export default function RecentReviewCard() {
  return(
    <StyledWrapper>
      <div>
        최근 리뷰 목록 보여주는 카드
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 40vw;
  height: 40vh;
  border: solid #5B6DCD 10px;
`;
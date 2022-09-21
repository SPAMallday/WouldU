import styled from "styled-components";

export default function PopularWordCard() {
  return(
    <StyledWrapper>
      <div>
        실시간 인기 검색어 순위 카드
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 40vw;
  height: 40vh;
  border: solid #5B6DCD 10px;
`;
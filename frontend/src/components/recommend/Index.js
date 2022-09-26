import Header from "components/nav/Header";
import styled from "styled-components";
import * as React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return(
    <StyledWrapper>
      <div>
        <Link to="/recommend/based_on_evaluation">
          술 평가 기반 추천 받으러 가기
        </Link>
      </div>
      <div>
        술 평가하러 가기
      </div>
      <div>
        간편하게 나에게 맞는 술 찾기
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    border: solid black;
  }
`;

import Header from "components/nav/Header";
import styled from "styled-components";
import * as React from "react";
import RecommendIndex from "components/recommend/RecommendIndex";
import space_example from "assets/img/space_example.jpg";
import { Link } from "react-router-dom";

export default function RecommendPage() {
  
  return (
    <>
      <StyledWrapper>
        <button>
          <Link to="/">
            뒤로 가기
          </Link>
        </button>
        <RecommendIndex />
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
// 그냥 예시로 넣어놨음
  background-image: url(${ space_example });
  height: 80vh;
`;

import Header from "components/nav/Header";
import styled from "styled-components";
import * as React from "react";
import Index from "components/recommend/Index";

export default function RecommendPage() {
  
  return (
    <>
      <Header />
      <StyledWrapper>
        <Index />
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

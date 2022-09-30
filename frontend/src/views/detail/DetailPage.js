import Header from "components/nav/Header";
import styled from "styled-components";
import Information from "components/detail/Information";
import Similar from "components/detail/Similar";
import Review from "components/detail/Review";
import * as React from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  let params = useParams();
  
  return (
    <>
      <Header />
      <StyledWrapper>
        <Information detailId={params.detail_id} />
        <Similar detailId={params.detail_id}/>
        <Review />
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

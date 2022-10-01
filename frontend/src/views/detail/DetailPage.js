import Header from "components/nav/Header";
import styled from "styled-components";
import Information from "components/detail/Information";
import Similar from "components/detail/Similar";
import Review from "components/detail/Review";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { alcoholDetail, similaralcohol } from "../../api/recommendAPI";

export default function DetailPage() {
  let params = useParams();
  const [alcohol, setAlcohol] = useState({});
  const [userno, setUserno] = useState("");
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    setUserno(sessionStorage.getItem("no"));

    alcoholDetail(params.detail_id).then(res => {
      console.log(res);
      setAlcohol(res);
    });

    similaralcohol(params.detail_id).then(res => {
      console.log(res);
      setSimilar();
    });
  }, []);

  return (
    <>
      <Header />
      <StyledWrapper>
        <Information
          detailId={params.detail_id}
          alcohol={alcohol}
          userno={userno}
        />
        <Similar alcohol={alcohol} similar={similar} />
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

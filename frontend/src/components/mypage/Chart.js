import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Piechart from "./piechart";
import Barchart from "./barchart";

export default function Chart(prop) {
  const [favorite, setfavorite] = useState("");
  const [average, setaverage] = useState("");

  useEffect(() => {
    setfavorite();
    setaverage();
  }, []);

  const onClickRecom = () => {
    console.log("fa", favorite);
    console.log("av", average);
  };

  return (
    <StyledWrapper>
      <div id="main">
        <div id="categoryBox">
          <h3>{prop.userName}님이 좋아하는 주종 차트</h3>
          <Piechart cateData={prop.cateData} />
          <button type="button" id="btn_recom" onClick={onClickRecom}>
            술 추천 받으러 가기
          </button>
        </div>
        <div id="averageBox">
          <h3>내가 고른 술들의 평균값</h3>
          <Barchart rateData={prop.rateData} />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #main {
    width: 1300px;
    height: 500px;
    background: pink;
  }
  #categoryBox {
    display: inline-block;
    width: 650px;
    height: 500px;
  }
  #averageBox {
    width: 650px;
    height: 500px;
    float: right;
    background: blue;
  }
  #btn_recom {
    margin-top: 10px;
  }
`;

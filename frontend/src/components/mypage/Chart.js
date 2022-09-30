import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Piechart from "./piechart";
import Barchart from "./barchart";
import Button from "@mui/material/Button";

/**
 * 버튼연결하기
 * @param {주종차트, 술 평균값} prop
 * @returns
 */
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
          <h3 id="title">{prop.userName}님이 좋아하는 주종 차트</h3>
          <Piechart cateData={prop.cateData} />

          <Button
            variant="contained"
            id="btn_recom"
            onClick={onClickRecom}
            color="secondary"
          >
            술 추천 받으러 가기
          </Button>
        </div>
        <div id="averageBox">
          <h3 id="title">{prop.userName}님이 먹은 술의 평균값</h3>
          <Barchart rateData={prop.rateData} />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #main {
    margin-top: 50px;
    width: 1300px;
    height: 550px;
    background: #bb9b9b;
  }
  #categoryBox {
    display: inline-block;
    width: 650px;
    height: 550px;
    background-color: #bb9b9b;
  }
  #averageBox {
    width: 650px;
    height: 550px;
    float: right;
    background: #bb9b9b;
  }
  #title {
    margin-top: 20px;
  }
  #btn_recom {
    margin-top: 20px;
  }
`;

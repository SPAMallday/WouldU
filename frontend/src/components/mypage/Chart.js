import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Piechart from "./piechart";
import Barchart from "./barchart";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
/**
 * 버튼연결하기
 * @param {주종차트, 술 평균값} prop
 * @returns
 */
export default function Chart(prop) {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const onClickRecom = () => {
    navigate("/recommend");
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
    width: 1300px;
    height: 550px;
    margin-top: 50px;

    border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
    border-style: solid;
    border-width: 2px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-family: "GD";
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    box-sizing: border-box;
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    display: flex;

    background-color: #ffe3e1;
  }
  #categoryBox {
    display: inline-block;
    width: 650px;
    height: 550px;
  }
  #averageBox {
    width: 650px;
    height: 550px;
    float: right;
  }
  #title {
    margin-top: 20px;
  }
  #btn_recom {
    margin-top: 20px;
    margin-left: -30px;
  }
`;

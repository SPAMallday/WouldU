import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Piechart from "./piechart";
import Barchart from "./barchart";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { textAlign } from "@mui/system";
/**
 * 버튼연결하기
 * @param {주종차트, 술 평균값} prop
 * @returns
 */
export default function Chart(prop) {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const [average, setAverage] = useState(true);

  useEffect(() => {}, []);

  const onClickRecom = () => {
    navigate("/recommend");
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleAverage = () => {
    setAverage(!average);
  };

  return (
    <StyledWrapper>
      <div id="main">
        <div id="categoryBox">
          {toggle === true ? (
            <div>
              <h3 id="title">{prop.userName}님이 좋아하는 주종 차트</h3>
              <div style={{ textAlign: "right" }}>
                <Button id="tgbutton" onClick={handleToggle}>
                  유저
                </Button>
              </div>
              <Piechart cateData={prop.cateData} />
            </div>
          ) : (
            <div>
              <h3 id="title">{prop.userName}님과 비슷한 유저들의 주종 차트</h3>
              <div style={{ textAlign: "right" }}>
                <Button id="tgbutton" onClick={handleToggle}>
                  사용자
                </Button>
              </div>
              <Piechart cateData={prop.othercateData} />
            </div>
          )}

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
          {average === true ? (
            <div>
              <h3 id="title">{prop.userName}님이 먹은 술의 평균값</h3>
              <div style={{ textAlign: "right" }}>
                <Button id="tgbutton1" onClick={handleAverage}>
                  유저
                </Button>
              </div>
              <Barchart rateData={prop.rateData} />
            </div>
          ) : (
            <div>
              <h3 id="title">같은 유형의 사용자들이 먹은 술의 평균값</h3>
              <div style={{ textAlign: "right" }}>
                <Button id="tgbutton1" onClick={handleAverage}>
                  사용자
                </Button>
              </div>
              <Barchart rateData={prop.otherrateData} />
            </div>
          )}
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

    background-color: #f7ecde;
  }

  #tgbutton {
    margin-right: 80px;
    background-color: brown;
    color: white;
    font-family: "GD";
  }

  #tgbutton1 {
    margin-right: 40px;
    background-color: brown;
    color: white;
    font-family: "GD";
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
    font-family: "GD";
    margin-left: -20px;
  }
`;

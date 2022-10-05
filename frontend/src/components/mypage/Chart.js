import React from "react";
import styled from "@emotion/styled";
import Piechart from "./piechart";
import Barchart from "./barchart";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

/**
 * 버튼연결하기
 * @param {주종차트, 술 평균값} prop
 * @returns
 */
export default function Chart(prop) {
  const navigate = useNavigate();

  const onClickRecom = () => {
    navigate("/recommend");
  };

  const [alignment, setAlignment] = React.useState("left");
  const [alignment2, setAlignment2] = React.useState("left");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleAlignment2 = (event, newAlignment) => {
    setAlignment2(newAlignment);
  };

  return (
    <StyledWrapper>
      <div id="main">
        <div id="categoryBox">
          {alignment === "left" ? (
            <div>
              <h3 id="title">{prop.userName}님이 좋아하는 주종 차트</h3>
              <div style={{ textAlign: "right" }}>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                  id="tgbutton"
                >
                  <ToggleButton value="left">사용자</ToggleButton>
                  <ToggleButton value="right">유저</ToggleButton>
                </ToggleButtonGroup>
              </div>
              {prop.cateData.length > 0 ? null : (
                <div id="reviewnull1">완료된 리뷰가 없습니다.😥</div>
              )}
              <Piechart cateData={prop.cateData} />
            </div>
          ) : (
            <div>
              <h3 id="title">같은 유형의 주종 차트</h3>
              <div style={{ textAlign: "right" }}>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                  id="tgbutton"
                >
                  <ToggleButton value="left">사용자</ToggleButton>
                  <ToggleButton value="right">유저</ToggleButton>
                </ToggleButtonGroup>
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
          {alignment2 === "left" ? (
            <div>
              <h3 id="title">{prop.userName}님이 먹은 술의 평균값</h3>
              <div style={{ textAlign: "right" }}>
                <ToggleButtonGroup
                  value={alignment2}
                  exclusive
                  onChange={handleAlignment2}
                  id="tgbutton"
                >
                  <ToggleButton value="left">사용자</ToggleButton>
                  <ToggleButton value="right">유저</ToggleButton>
                </ToggleButtonGroup>
              </div>
              {prop.rateData.바디감 === 0 &&
              prop.rateData.단맛 === 0 &&
              prop.rateData.신맛 === 0 &&
              prop.rateData.향 === 0 ? null : (
                <div id="reviewnull">현재 등록된 평가가 없습니다.😥</div>
              )}
              <Barchart rateData={prop.rateData} />
            </div>
          ) : (
            <div>
              <h3 id="title">같은 유형이 먹은 술의 평균값</h3>
              <div style={{ textAlign: "right" }}>
                <ToggleButtonGroup
                  value={alignment2}
                  exclusive
                  onChange={handleAlignment2}
                  id="tgbutton"
                >
                  <ToggleButton value="left">사용자</ToggleButton>
                  <ToggleButton value="right">유저</ToggleButton>
                </ToggleButtonGroup>
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
  #reviewnull {
    margin-bottom: -24px;
  }
  #reviewnull1 {
    margin-top: 150px;
    margin-bottom: -174px;
  }

  #tgbutton {
    margin-right: 40px;
    font-family: "GD";
    border: #f7ecde;
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
    margin-top: -20px;
  }
`;

import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "components/nav/Header";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import SelectType from "components/search/SelectType";
import ResultFiltering from "components/recommend/ResultFiltering";

//import axios from "axios";

/**
 * 신맛,단맛,바디감,향, 도수로 검색하는 페이지
 * post 연결해야함
 * @returns
 */
export default function BasedonFilteringPage() {
  const [sweet, setSweet] = useState(3);
  const [sour, setSour] = useState(3);
  const [body, setBody] = useState(3);
  const [smell, setSmell] = useState(3);
  const [value, setValue] = useState([0, 50]);
  const [goToResult, setGoToResult] = useState(false);

  const onClick = () => {
    setGoToResult(true)    
  };

  const alchol = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 30,
      label: "30",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 50,
      label: "50",
    },
  ];

  const handleChange = (event, newValue) => {
    setSweet(newValue);
  };
  const handleChange1 = (event, newValue) => {
    setSour(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setBody(newValue);
  };
  const handleChange3 = (event, newValue) => {
    setSmell(newValue);
  };

  //도수
  const handleChange4 = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <StyledWrapper>
      <Header />
      {!goToResult ? (
      <div id="main">
        <h2>일회성 검색</h2>
        <div id="searchForm">
          <SelectType
            handleChange={handleChange}
            handleChange1={handleChange1}
            handleChange2={handleChange2}
            handleChange3={handleChange3}
          />
          <div>
            <h5 id="textSub">도수</h5>
            <Box sx={{ width: 400 }} id="slider">
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                getAriaValueText={valuetext}
                onChange={handleChange4}
                valueLabelDisplay="auto"
                marks={alchol}
                min={0}
                max={50}
                color="secondary"
              />
            </Box>
          </div>
          <div id="btBox">
            <Button
              type="button"
              id="btn_search"
              variant="contained"
              onClick={onClick}
              color="secondary"
            >
              검색
            </Button>
          </div>
        </div>
      </div>
      ):
      (
        <div>
          <ResultFiltering setGoToResult={setGoToResult} sweet={sweet} sour={sour} body={body} smell={smell} value={value} />
        </div>
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #main {
    text-align: center;
  }
  #searchForm {
    margin: auto;
    width: 600px;
    height: 800px;
    border: 1px solid;
  }
  #textSub {
    text-align: left;
    width: 400px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  #slider {
    margin: auto;
  }
  #btn_search {
    margin-top: 60px;
  }
`;

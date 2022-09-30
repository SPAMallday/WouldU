import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

//import axios from "axios";

/**
 * swiper로 구성된 선택 컴포
 * @param {*} prop (단맛,신맛,바디감,향)
 * @returns
 */
export default function SelectType(prop) {
  const marks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <StyledWrapper>
      <div>
        <h5 id="textSub">단맛</h5>
        <Box sx={{ width: 400 }} id="slider">
          <Slider
            defaultValue={3}
            getAriaValueText={valuetext}
            onChange={prop.handleChange}
            valueLabelDisplay="auto"
            marks={marks}
            min={1}
            max={5}
            color="secondary"
          />
        </Box>
      </div>
      <div>
        <h5 id="textSub">신맛</h5>
        <Box sx={{ width: 400 }} id="slider">
          <Slider
            defaultValue={3}
            getAriaValueText={valuetext}
            onChange={prop.handleChange1}
            valueLabelDisplay="auto"
            marks={marks}
            min={1}
            max={5}
            color="secondary"
          />
        </Box>
      </div>
      <div>
        <h5 id="textSub">바디감</h5>
        <Box sx={{ width: 400 }} id="slider">
          <Slider
            defaultValue={3}
            getAriaValueText={valuetext}
            onChange={prop.handleChange2}
            valueLabelDisplay="auto"
            marks={marks}
            min={1}
            max={5}
            color="secondary"
          />
        </Box>
      </div>
      <div>
        <h5 id="textSub">향</h5>
        <Box sx={{ width: 400 }} id="slider">
          <Slider
            defaultValue={3}
            getAriaValueText={valuetext}
            onChange={prop.handleChange3}
            valueLabelDisplay="auto"
            marks={marks}
            min={1}
            max={5}
            color="secondary"
          />
        </Box>
      </div>
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
`;

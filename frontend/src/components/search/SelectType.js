import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

//import axios from "axios";

/**
 * swiper로 구성된 선택 컴포
 * @param {*} prop (단맛,신맛,바디감,향)
 * @returns
 */
export default function SelectType(prop) {
  function valuetext(value) {
    return `${value}`;
  }

  // function repeatRadio(start, end) {
  //   var elements = [];

  //   for (var i = start; i <= end; i++) {
  //     let color = "primary";
  //     if (end % 2 === 0 && (end / 2 === i || end / 2 + 1 === i)) {
  //       color = "default";
  //     } else if (end % 2 !== 0 && end / 2 + 1 === i) {
  //       color = "default";
  //     }

  //     elements.push(
  //       <FormControlLabel
  //         value={i}
  //         control={<Radio className="Mui-checked" color={color} />}
  //         labelPlacement="bottom"
  //       />,
  //     );
  //   }
  //   return elements;
  // }

  return (
    <StyledWrapper>
      <div>
        {/* <FormControl>
          <FormLabel>단맛</FormLabel>
          <RadioGroup row className="radioGroup">
            <FormControlLabel
              value={0}
              control={<Radio className="Mui-checked" color="success" />}
              label="전혀 달지 않아요"
              labelPlacement="bottom"
            />
            {repeatRadio(1, 4)}
            <FormControlLabel
              value="5"
              control={<Radio className="Mui-checked" color="success" />}
              label="아주 달아요"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl> */}

        <h5 id="textSub">단맛</h5>
        <Box sx={{ width: 400 }} id="slider">
          <Slider
            defaultValue={3}
            getAriaValueText={valuetext}
            onChange={prop.handleChange}
            valueLabelDisplay="auto"
            marks={[
              {
                value: 0,
                label: "전혀 달지 않아요",
              },
              {
                value: 5,
                label: "아주 달아요",
              },
            ]}
            min={0}
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
            marks={[
              {
                value: 0,
                label: "전혀 시지 않아요",
              },
              {
                value: 5,
                label: "아주 셔요",
              },
            ]}
            min={0}
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
            marks={[
              {
                value: 1,
                label: "아주 가벼워요",
              },
              {
                value: 5,
                label: "아주 무거워요",
              },
            ]}
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
            marks={[
              {
                value: 1,
                label: "약해요",
              },
              {
                value: 5,
                label: "강해요",
              },
            ]}
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
  // .radioGroup {
  //   width: 100%;
  // }
  // .radioGroup label {
  //   width: 11%;
  // }
  // .radioGroup label span:nth-child(2) {
  //   overflow: hidden;
  //   white-space: nowrap;
  //   text-overflow: ellipsis;
  // }
`;

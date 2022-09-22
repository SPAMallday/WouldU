import React, { useState } from "react";
import styled from "@emotion/styled";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Header from "components/nav/Header";
import { Link } from "react-router-dom";

//import axios from "axios";

export default function JoinQ() {
  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3, setQ3] = useState("");

  const handleQ1 = e => {
    setQ1(e.target.value);
  };

  const handleQ2 = e => {
    setQ2(e.target.value);
  };
  const handleQ3 = e => {
    setQ3(e.target.value);
  };

  const onClickLogin = () => {
    console.log("Q1", Q1);
    console.log("Q2", Q2);
    console.log("Q3", Q3);

    // 회원가입 axios 부분
    /* 
    axios.post("/join", null, {
      params: {
        전달받은 데이터
      },
    })
    .then(res => {
      console.log(res)
      // 설문조사 axios 부분
      axios.post("/survey", null, {
      params: {
        Q1 : Q1,
        Q2 : Q2,
        Q3 : Q3,
      },
    })
    .then(res => {
      console.log(res)
      //페이지 이동 필요
    })
    .catch()
    })
    .catch()
    */
  };

  return (
    <StyledWrapper>
      <Header />
      <div id="main">
        <h2>음주유형검사</h2>
        <div id="surveyForm">
          <div id="surveyBox">
            {/*---1번 질문---*/}
            <FormControl id="surveyItem">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                color="secondary"
              >
                Q1. 나는 조용하게 먹는것이 좋다.
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                id="radioGroup"
                value={Q1}
                onChange={handleQ1}
              >
                <FormControlLabel
                  value="YES"
                  control={<Radio color="secondary" />}
                  label="예"
                />
                <FormControlLabel
                  value="NO"
                  control={<Radio color="secondary" />}
                  label="아니요"
                  id="radioNo"
                />
              </RadioGroup>
            </FormControl>

            {/*---2번 질문---*/}
            <FormControl id="surveyItem">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                color="secondary"
              >
                Q2. 나는 낯을 많이 가린다.
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                id="radioGroup"
                value={Q2}
                onChange={handleQ2}
              >
                <FormControlLabel
                  value="YES"
                  control={<Radio color="secondary" />}
                  label="예"
                />
                <FormControlLabel
                  value="NO"
                  control={<Radio color="secondary" />}
                  label="아니요"
                  id="radioNo"
                />
              </RadioGroup>
            </FormControl>

            {/*---2번 질문---*/}
            <FormControl id="surveyItem">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                color="secondary"
              >
                Q3. 나는 사람들과 대화하는 게 어렵다.
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                id="radioGroup"
                value={Q3}
                onChange={handleQ3}
              >
                <FormControlLabel
                  value="YES"
                  control={<Radio color="secondary" />}
                  label="예"
                />
                <FormControlLabel
                  value="NO"
                  control={<Radio color="secondary" />}
                  label="아니요"
                  id="radioNo"
                />
              </RadioGroup>
            </FormControl>
            <Link to="/">
              <div id="btBox">
                <button type="button" id="btn_join" onClick={onClickLogin}>
                  회원가입
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #main {
    text-align: center;
  }

  #surveyBox {
    width: 400px;
    display: inline-block;
    background: gray;
  }

  #radioGroup {
    margin: auto;
  }

  #surveyItem {
    margin-top: 30px;
  }

  #radioNo {
    margin-left: 30px;
    margin-right: 0px;
  }

  #inputBox {
    width: 300px;
    margin: 40px auto;
  }

  #btBox {
    margin: 70px;
  }

  #btn_join {
    width: 170px;
  }

  #label_text {
  }

  #surveyForm {
    border: 1px solid;
    display: inline-block;
    width: 600px;
  }
`;

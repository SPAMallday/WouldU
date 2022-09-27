import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Header from "components/nav/Header";
import { Link, useLocation } from "react-router-dom";

//import axios from "axios";

export default function JoinQ() {
  // 전체 응답 저장용
  const [reply, setReply] = useState([]);
  //문항마다 저장
  const [Q1, setQ1] = useState(false);
  const [Q2, setQ2] = useState(false);
  const [Q3, setQ3] = useState(false);
  const [Q4, setQ4] = useState(false);
  const [Q5, setQ5] = useState(false);

  //step1에서 데이터 전해주기 위한 것
  const location = useLocation();

  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (
      Q1 !== false &&
      Q2 !== false &&
      Q3 !== false &&
      Q4 !== false &&
      Q5 !== false
    ) {
      setDisable(true);
    }
  }, [Q1, Q2, Q3, Q4, Q5]);
  //데이터 조작
  const handleQ1 = e => {
    setQ1(e.target.value);
  };
  const handleQ2 = e => {
    setQ2(e.target.value);
  };
  const handleQ3 = e => {
    setQ3(e.target.value);
  };
  const handleQ4 = e => {
    setQ4(e.target.value);
  };
  const handleQ5 = e => {
    setQ5(e.target.value);
  };
  const handelReply = () => {
    if (Q1 !== null) {
      setReply(reply.push(Q1));
    }
    setReply(reply.push(Q2));
    setReply(reply.push(Q3));
    setReply(reply.push(Q4));
    setReply(reply.push(Q5));
  };

  const onClickJoin = event => {
    handelReply();
    let data = {
      user_id: location.state.user_id,
      password: location.state.password,
      nickname: location.state.nickname,
      gender: location.state.gender,
      birth: location.state.birth,
      reply_list: reply,
    };

    console.log(data);

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
      
    })
    .catch()
    */
  };

  return (
    <StyledWrapper>
      <Header />
      <div id="main">
        <h3>Step 2</h3>
        <h5>음주유형검사</h5>
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
                  value="Y"
                  control={<Radio color="secondary" />}
                  label="예"
                />
                <FormControlLabel
                  value="N"
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
                Q2. 나는 나만의 향수가 3개 이상 있다.
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
                  value="Y"
                  control={<Radio color="secondary" />}
                  label="예"
                />
                <FormControlLabel
                  value="N"
                  control={<Radio color="secondary" />}
                  label="아니요"
                  id="radioNo"
                />
              </RadioGroup>
            </FormControl>
            {/*---3번 질문---*/}
            <FormControl id="surveyItem">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                color="secondary"
              >
                Q3. 나는 낯을 많이 가린다.
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
                  value="Y"
                  control={<Radio color="secondary" />}
                  label="예"
                />
                <FormControlLabel
                  value="N"
                  control={<Radio color="secondary" />}
                  label="아니요"
                  id="radioNo"
                />
              </RadioGroup>
            </FormControl>
            {/*---4번 질문---*/}
            <FormControl id="surveyItem">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                color="secondary"
              >
                Q4. 나는 디퓨저를 사용중이다.
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                id="radioGroup"
                value={Q4}
                onChange={handleQ4}
              >
                <FormControlLabel
                  value="Y"
                  control={<Radio color="secondary" />}
                  label="예"
                />
                <FormControlLabel
                  value="N"
                  control={<Radio color="secondary" />}
                  label="아니요"
                  id="radioNo"
                />
              </RadioGroup>
            </FormControl>
            {/*---5번 질문---*/}
            <FormControl id="surveyItem">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                color="secondary"
              >
                Q5. 나는 친구들과 약속후에 다음날은 쉰다.
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                id="radioGroup"
                value={Q5}
                onChange={handleQ5}
              >
                <FormControlLabel
                  value="Y"
                  control={<Radio color="secondary" />}
                  label="예"
                />
                <FormControlLabel
                  value="N"
                  control={<Radio color="secondary" />}
                  label="아니요"
                  id="radioNo"
                />
              </RadioGroup>
            </FormControl>
            {disable ? (
              <Link to="/" onClick={onClickJoin}>
                <div id="btBox">
                  <Button variant="contained" id="btn_join" color="secondary">
                    회원가입
                  </Button>
                </div>
              </Link>
            ) : (
              <div id="btBox">
                <Button
                  variant="contained"
                  id="btn_join"
                  color="secondary"
                  disabled
                >
                  회원가입
                </Button>
              </div>
            )}
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
    margin: 40px;
  }

  #btn_join {
    width: 170px;
  }

  #surveyForm {
    display: inline-block;
    width: 600px;
  }
`;

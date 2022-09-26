import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "components/nav/Header";
import { Link } from "react-router-dom";

export default function JoinID() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPWD, setInputPWD] = useState("");
  const [inputNick, setInputNick] = useState("");
  const [birth, setBirth] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [inputMonth, setInputMonth] = useState("");
  const [inputDay, setInputDay] = useState("");
  const [inputGender, setInputGender] = useState("");

  // 나중에 비밀번호 규칙추가하기
  // 비밀번호 확인용
  /** 
  useEffect(() => {
    console.log(inputPWD);
  }, [inputPWD, inputPw]);
*/
  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  const handleInputPWD = e => {
    setInputPWD(e.target.value);
  };

  const handleInputNick = e => {
    setInputNick(e.target.value);
  };

  const handleInputYear = e => {
    setInputYear(e.target.value);
    setBirth(e.target.value + "-" + inputMonth + "-" + inputDay);
  };

  const handleInputMonth = e => {
    setInputMonth(e.target.value);
    setBirth(inputYear + "-" + e.target.value + "-" + inputDay);
  };

  const handleInputDay = e => {
    setInputDay(e.target.value);
    setBirth(inputYear + "-" + inputMonth + "-" + e.target.value);
  };

  const handleInputGender = e => {
    setInputGender(e.target.value);
  };

  const onClickNext = () => {
    console.log("ID", inputId);
    console.log("PW", inputPw);
    console.log("PWD", inputPWD);
    console.log(birth);
  };

  return (
    <StyledWrapper>
      <Header />
      <div id="main">
        <div id="joinForm">
          <h3>step 1</h3>

          <div id="joinBox">
            <div>
              <div id="label_text">
                <label> 아이디 </label>
              </div>
              <div>
                <input
                  type="text"
                  name="input_id"
                  value={inputId}
                  onChange={handleInputId}
                ></input>
              </div>
            </div>
            <div>
              <div id="label_text">
                <label> 비밀번호 </label>
              </div>
              <div>
                <input
                  type="password"
                  name="input_pw"
                  value={inputPw}
                  onChange={handleInputPw}
                ></input>
              </div>
            </div>
            <div>
              <div id="label_text">
                <label> 비밀번호 재확인 </label>
              </div>
              <div>
                <input
                  type="password"
                  name="input_pwd"
                  value={inputPWD}
                  onChange={handleInputPWD}
                ></input>
              </div>
            </div>
            <div>
              <div id="label_text">
                <label> 닉네임 </label>
              </div>
              <div>
                <input
                  type="text"
                  name="input_nick"
                  value={inputNick}
                  onChange={handleInputNick}
                ></input>
              </div>
            </div>
            <div>
              <div id="label_text">
                <label> 생년월일 </label>
              </div>
              <div>
                <input
                  type="text"
                  name="input_year"
                  value={inputYear}
                  onChange={handleInputYear}
                ></input>
                <select value={inputMonth} onChange={handleInputMonth}>
                  <option value="">월</option>
                  <option value="1">1월</option>
                  <option value="2">2월</option>
                  <option value="3">3월</option>
                  <option value="4">4월</option>
                  <option value="5">5월</option>
                  <option value="6">6월</option>
                  <option value="7">7월</option>
                  <option value="8">8월</option>
                  <option value="9">9월</option>
                  <option value="10">10월</option>
                  <option value="11">11월</option>
                  <option value="12">12월</option>
                </select>
                <input
                  type="text"
                  name="input_day"
                  value={inputDay}
                  onChange={handleInputDay}
                ></input>
              </div>
            </div>
            <div>
              <div id="label_text">
                <label> 성별 </label>
              </div>
              <div>
                <select value={inputGender} onChange={handleInputGender}>
                  <option value="">성별</option>
                  <option value="남성">남성</option>
                  <option value="여성">여성</option>
                </select>
              </div>
            </div>
            <div id="btBox">
              <Link to="/survey">
                <button type="button" id="btn_next" onClick={onClickNext}>
                  다음
                </button>
              </Link>
            </div>
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

  #joinBox {
    display: inline-block;
    margin: auto;
  }

  #btBox {
    margin-top: 10px;
    margin-bottom: 30px;
  }

  #label_text {
    text-align: left;
  }

  #joinForm {
    border: 1px solid;
    display: inline-block;
    align-items: center;
    width: 500px;
  }

  #btn_next {
    width: 170px;
  }
`;

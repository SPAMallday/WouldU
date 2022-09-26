import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "components/nav/Header";
import { Link } from "react-router-dom";
//import axios from "axios";

export default function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log("ID", inputId);
    console.log("PW", inputPw);

    // 유효성 검사 필요
    // 로그인 axios 부분
    /* 
    axios.post("/login", null, {
      params: {
        id: inputId,
        password: inputPw,
      },
    })
    .then(res => {
      console.log(res)
      //로그인 정보 세션에 저장
      sessionStorage.setItem('user_id', inputId)
      //페이지 이동 필요
    })
    .catch()
    */
  };

  return (
    <StyledWrapper>
      <Header />
      <div id="main">
        <h2>Login</h2>
        <div id="loginForm">
          <div id="logoBox"></div>

          <div id="loginBox">
            <div id="inputBox">
              <div id="label_text">
                <label> ID : </label>
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

            <div id="inputBox">
              <div id="label_text">
                <label> PW : </label>
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

            <div id="btBox">
              <button type="button" id="btn_login" onClick={onClickLogin}>
                Login
              </button>
            </div>
            <Link to="/join">
              <div id="textJoin">
                <h3>회원가입</h3>
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

  #logoBox {
    width: 600px;
    height: 700px;
    background: black;
    float: left;
  }

  #loginBox {
    width: 600px;
    display: inline-block;
    background: gray;
    margin-top: 160px;
  }

  #inputBox {
    width: 200px;
    margin: 40px auto;
  }

  #btBox {
    margin: 70px;
  }

  #btn_login {
    width: 170px;
  }

  #label_text {
    text-align: left;
  }

  #loginForm {
    border: 1px solid;
    display: inline-block;
  }

  #textJoin {
    margin-right: 30px;
    text-align: right;
  }
`;

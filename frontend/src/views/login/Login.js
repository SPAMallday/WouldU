import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "components/nav/Header";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
    axios.post("/user/signin", null, {
      params: {
        user_id: inputId,
        password: inputPw,
      },
    })
    .then(res => {
      console.log(res)
      //로그인 정보 세션에 저장
      sessionStorage.setItem('user_id', inputId)
      sessionStorage.setItem('user_nick',res.nickname)
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
          <div id="loginBox">
            <div id="inputBox">
              <div>
                <TextField
                  label="아이디"
                  variant="outlined"
                  size="small"
                  value={inputId}
                  onChange={handleInputId}
                  id="input_area"
                />
              </div>
            </div>

            <div id="inputBox">
              <div>
                <TextField
                  autoComplete="current-password"
                  label="비밀번호"
                  type="password"
                  variant="outlined"
                  value={inputPw}
                  onChange={handleInputPw}
                  size="small"
                  id="input_area"
                />
              </div>
            </div>

            <div id="btBox">
              <Button
                id="btn_login"
                color="secondary"
                onClick={onClickLogin}
                variant="contained"
              >
                Login
              </Button>
            </div>
            <Link to="/join">
              <div id="textJoin">
                <h5>회원가입</h5>
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

  #loginBox {
    width: 600px;
    display: inline-block;
  }

  #input_area {
    width: 250px;
  }

  #inputBox {
    width: 300px;
    margin: 80px auto;
  }

  #btBox {
    margin: 70px;
  }

  #btn_login {
    width: 280px;
  }

  #loginForm {
    display: inline-block;
    margin-top: 50px;
  }

  #textJoin {
    width: 100px;
    margin: auto;
  }
`;

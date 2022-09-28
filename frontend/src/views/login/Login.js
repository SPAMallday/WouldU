import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "components/nav/Header";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import swal from "sweetalert";

export default function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  const onClickLogin = event => {
    if (inputId !== "") {
      if (inputPw !== "") {
        const data = {
          user_id: inputId,
          password: inputPw,
        };
        axios
          .post("http://localhost:8000/user/signin", data)
          .then(res => {
            console.log(res);
            sessionStorage.setItem("ID", inputId);
            sessionStorage.setItem("Nick", res.data.nickname);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        swal("Error!", "비밀번호를 입력해주세요!!", "error");
        event.preventDefault();
      }
    } else {
      swal("Error!", "아이디를 입력해주세요!!", "error");
      event.preventDefault();
    }

    console.log("ID", inputId);
    console.log("PW", inputPw);
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
              <Link to="/">
                <Button
                  id="btn_login"
                  color="secondary"
                  onClick={onClickLogin}
                  variant="contained"
                >
                  Login
                </Button>
              </Link>
            </div>
            <Link to="/join">
              <div id="textJoin">
                <h5 id="h_join">회원가입</h5>
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

  #h_join {
    color: purple;
  }
`;

import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "components/nav/Header";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import swal from "sweetalert";
import logo2 from "assets/img/logo2.png";
import Card from "@mui/material/Card";
import space from "assets/img/space_example.jpg";
import { login } from "../../api/userAPI";

export default function Login() {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  async function onClickLogin(event) {
    if (inputId !== "") {
      if (inputPw !== "") {
        const data = {
          user_id: inputId,
          password: inputPw,
        };
        login(data).then(res => {
          if (res.result === "success") {
            sessionStorage.setItem("ID", inputId);
            sessionStorage.setItem("no", res.user_no);
            sessionStorage.setItem("Nick", res.nickname);
            navigate(-1);
            swal("Welcome!", "로그인 성공", "success");
          } else {
            swal("Error!", "아이디 또는 비밀번호 오류입니다.", "error");
          }
        });
      } else {
        swal("Error!", "비밀번호를 입력해주세요!!", "error");
      }
    } else {
      swal("Error!", "아이디를 입력해주세요!!", "error");
    }
  }

  return (
    <StyledWrapper>
      <Header />
      <div id="main">
        <Card variant="outlined" sx={{ width: 1300, mt: 10 }}>
          <img src={logo2} alt="logo"></img>
          <div id="loginForm">
            <div id="loginBox">
              <div id="inputH">
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
                    id="input_area2"
                  />
                </div>
              </div>

              <div id="btBox">
                <Button
                  id="btn_login"
                  variant="contained"
                  onClick={onClickLogin}
                >
                  Login
                </Button>
              </div>
              <Link to="/join">
                <div id="textJoin">
                  <h5 id="h_join">회원가입</h5>
                </div>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  background-color: #fcfcfc;
  height: 100vh;
  #main {
    height: 78vh;
    display: flex;
    text-align: center;
    flex-direction: column-reverse;
    justify-content: center;
  }

  .css-rb59ar-MuiPaper-root-MuiCard-root {
    margin: 0 auto;
    width: 1200px;
    border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
    font-family: "GD";
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #f7ecde;
  }

  #main img {
    width: 500px;
  }

  #main h2 {
    margin-top: 50px;
  }

  #loginBox {
    margin-right: -100px;
    margin-bottom: 100px;
    width: 600px;
    display: inline-block;
  }

  #input_area {
    width: 250px;
  }

  #input_area2 {
    width: 250px;
  }

  #inputH {
    margin-top: 70px;
  }

  #inputBox {
    width: 300px;
    margin: 50px auto;
  }

  #btBox {
    margin: 70px;
  }

  #btn_login {
    margin-top: 20px;
    width: 280px;
    background-color: #fa7070;
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
    color: #fa7070;
  }
  a {
    text-decoration: none;
  }
`;

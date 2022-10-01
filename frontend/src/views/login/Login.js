import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "components/nav/Header";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import swal from "sweetalert";
import logo2 from "assets/img/logo2.png";
import Card from "@mui/material/Card";
import space from "assets/img/space_example.jpg";

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
        await axios
          .post("http://j7a402.p.ssafy.io:8080/user/signin", data)
          .then(res => {
            console.log(res);
            if (res.data.result === "success") {
              sessionStorage.setItem("ID", inputId);
              sessionStorage.setItem("no", res.data.user_no);
              sessionStorage.setItem("Nick", res.data.nickname);
              navigate("/");
            } else {
              swal("Error!", "아이디 또는 비밀번호 오류입니다.", "error");
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        swal("Error!", "비밀번호를 입력해주세요!!", "error");
      }
    } else {
      swal("Error!", "아이디를 입력해주세요!!", "error");
    }

    console.log("ID", inputId);
    console.log("PW", inputPw);
  }

  return (
    <StyledWrapper>
      <Header />
      <div id="main">
        <Card variant="outlined" sx={{ width: 1300, mt: 10 }}>
          <h2>Login</h2>
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
                    id="input_area"
                  />
                </div>
              </div>

              <div id="btBox">
                <Button
                  id="btn_login"
                  color="secondary"
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
  #main {
    height: 900px;
    text-align: center;
    background: url("${space}");
    background-size: 100% 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  }

  .css-rb59ar-MuiPaper-root-MuiCard-root {
    margin: 90px auto;
    border: 5px solid;
  }

  #main img {
    margin-top: -330px;
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

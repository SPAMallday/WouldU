import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "components/nav/Header";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import swal from "sweetalert";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { idCheck } from "../../api/userAPI";

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
  const [idOk, setIdOk] = useState(false);
  //const [passCheck, setPassCheck] = useState("숫자, 영문 포함한 8자 이상");
  const [passOk, setPassOk] = useState("중복확인 필수");
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (inputPw === inputPWD && inputPw !== "") {
      setPassOk("일치");
    } else {
      setPassOk("불일치");
    }

    if (
      inputId !== "" &&
      inputPw !== "" &&
      inputPWD !== "" &&
      inputGender !== "" &&
      inputYear !== "" &&
      inputMonth !== "" &&
      inputDay !== ""
    ) {
      setDisable(true);
    }
  }, [
    inputPw,
    inputPWD,
    inputId,
    inputGender,
    inputYear,
    inputMonth,
    inputDay,
  ]);
  // 나중에 비밀번호 규칙추가하기
  // 비밀번호 확인용
  /** 
  useEffect(() => {
    console.log(inputPWD);
    if(inputPw === inputPWD){
      setPassOk(true);
    }else {
      setPassOk(false);
    }
  }, [inputPWD, inputPw]);
 */

  //아이디 중복확인
  const onIdCheck = () => {
    if (inputId !== "") {
      idCheck(inputId).then(res => {
        if (res.data.result === "success") {
          setIdOk(true);
          swal({
            title: "Good ID!",
            text: "사용가능한 아이디입니다.",
            icon: "success",
            button: {
              text: "확인",
            },
          });
        } else {
          swal("OMG!", "중복된 아이디입니다.", "error");
        }
      });
    } else {
      swal("Error!", "아이디를 입력해주세요!!", "error");
    }
  };

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
    if (parseInt(e.target.value) > 0 && parseInt(e.target.value) < 10) {
      setBirth(
        inputYear + "-" + inputMonth + "-" + 0 + parseInt(e.target.value),
      );
    } else {
      setBirth(inputYear + "-" + inputMonth + "-" + e.target.value);
    }
  };

  const handleInputGender = e => {
    setInputGender(e.target.value);
  };

  const onClickNext = event => {
    //아이디 중복체크 완료해야 진행가능
    if (idOk === true) {
      if (passOk === "일치") {
        if (
          inputYear >= 1900 &&
          inputYear < 2003 &&
          inputMonth !== "" &&
          inputDay >= 1 &&
          inputDay <= 31
        ) {
        } else if (inputYear > 2002 && inputYear < 2023) {
          swal("Error!", "미성년자는 사용할수 없습니다.!", "error");
          event.preventDefault();
        } else {
          swal("Error!", "잘못된 날짜형식입니다!", "error");
          event.preventDefault();
        }
      } else {
        swal("Error!", "비밀번호가 일치하지 않습니다!", "error");
        event.preventDefault();
      }
    } else {
      swal("Error!", "아이디 중복확인 필수!", "error");
      console.log(false);
      //이동막기
      event.preventDefault();
    }
  };

  return (
    <StyledWrapper>
      <Header />
      <div id="bigdiv">
        <div id="main">
          <div id="joinForm">
            <h2>회원 정보</h2>
            <div id="joinBox">
              <div id="tf_id">
                <TextField
                  placeholder="아이디"
                  variant="outlined"
                  size="small"
                  value={inputId}
                  onChange={handleInputId}
                  id="input_area1"
                />
                <Button onClick={onIdCheck} id="btn_check">
                  중복확인
                </Button>
              </div>

              <div id="tf_item">
                <TextField
                  autoComplete="current-password"
                  placeholder="비밀번호"
                  type="password"
                  variant="outlined"
                  value={inputPw}
                  onChange={handleInputPw}
                  size="small"
                  id="input_area2"
                />
              </div>

              <div>
                <div id="tf_pass">
                  <TextField
                    placeholder="비밀번호 확인"
                    type="password"
                    variant="outlined"
                    value={inputPWD}
                    onChange={handleInputPWD}
                    size="small"
                    id="input_area3"
                  />
                </div>
                <h5 id="tx_ok">{passOk}</h5>
              </div>

              <div>
                <div id="div_nick">
                  <label> 닉네임 </label>
                </div>
                <TextField
                  placeholder="닉네임"
                  variant="outlined"
                  value={inputNick}
                  onChange={handleInputNick}
                  size="small"
                  id="input_area4"
                />
              </div>

              <div>
                <div id="tf_bitem">
                  <label> 생년월일 </label>
                </div>
                <div>
                  <TextField
                    placeholder="연도"
                    variant="outlined"
                    value={inputYear}
                    onChange={handleInputYear}
                    size="small"
                    id="input_birth1"
                  />
                  <FormControl sx={{ ml: 1, mr: 1, minWidth: 80 }} size="small">
                    <InputLabel id="demo-select-small">월</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={inputMonth}
                      label="월"
                      onChange={handleInputMonth}
                    >
                      <MenuItem value="01">1월</MenuItem>
                      <MenuItem value="02">2월</MenuItem>
                      <MenuItem value="03">3월</MenuItem>
                      <MenuItem value="04">4월</MenuItem>
                      <MenuItem value="05">5월</MenuItem>
                      <MenuItem value="06">6월</MenuItem>
                      <MenuItem value="07">7월</MenuItem>
                      <MenuItem value="08">8월</MenuItem>
                      <MenuItem value="09">9월</MenuItem>
                      <MenuItem value="10">10월</MenuItem>
                      <MenuItem value="11">11월</MenuItem>
                      <MenuItem value="12">12월</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    variant="outlined"
                    value={inputDay}
                    onChange={handleInputDay}
                    size="small"
                    id="input_birth2"
                    placeholder="일"
                  />
                </div>
              </div>

              <div id="tf_gender">
                <div id="div_gender">
                </div>
                <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                  <InputLabel id="demo-select-small">성별</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={inputGender}
                    label="성별"
                    onChange={handleInputGender}
                  >
                    <MenuItem value="1">남성</MenuItem>
                    <MenuItem value="2">여성</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div id="btBox">
                {disable ? (
                  <Link
                    to="/survey"
                    state={{
                      user_id: inputId,
                      password: inputPw,
                      nickname: inputNick,
                      gender: inputGender,
                      birth: birth,
                    }}
                    onClick={onClickNext}
                  >
                    <Button variant="contained" id="btn_next">
                      다음
                    </Button>
                  </Link>
                ) : (
                  <Button variant="contained" id="btn_next1" disabled>
                    다음
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  background-color: #f7ecde;
  height: 1130px;

  #bigdiv {
    display: flex;
    justify-content: center;
  }
  #main {
    text-align: center;
    width: 40vw;
    margin: 10px;
    padding: 10px;
    border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
    border-style: solid;
    border-width: 2px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-family: "GD";
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    box-sizing: border-box;
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;

    flex-direction: column;
    background-color: #dfe8cc;

    justify-content: center;
    align-items: center;
  }

  #main h2 {
    margin-top: 60px;
  }

  #joinBox {
    display: inline-block;
    margin: auto;
  }

  #tf_id {
    margin-top: 40px;
    margin-left: 95px;
  }
  #tf_pass {
    margin-top: 20px;
  }
  #tx_ok {
    text-align: right;
    margin-top: 10px;
    margin-right: 95px;
    font-size: 17px;
    color: #ff884b;
  }

  #tf_item {
    margin-top: 30px;
  }
  #tf_bitem {
    margin-top: 30px;
    margin-bottom: 10px;
    text-align: left;
    margin-left: 100px;
  }

  #tf_gender {
    margin: auto;
    margin-top: 40px;
    width: 350px;
    text-align: left;
  }

  #div_nick {
    text-align: left;
    margin-left: 100px;
    margin-bottom: 10px;
  }

  #div_gender {
    text-align: left;
    margin-left: 20px;
  }

  #joinForm {
    display: inline-block;
    align-items: center;
    width: 600px;
  }

  #btBox {
    margin-top: 40px;
    margin-bottom: 30px;
  }
  #btBox a {
    text-decoration: none;
  }

  #btn_next {
    width: 170px;
    border: solid #dbc8ac;
    border-radius: 10px;
    color: white;
    font-size: 24px;
    background-color: #367e18;
  }
  #btn_next1 {
    width: 170px;
    border: solid #dbc8ac;
    border-radius: 10px;
    color: white;
    font-size: 24px;
    background-color: #7F8487;
  }
  #btn_check {
    margin-left: 20px;
    color: #06283d;
    border: solid #dbc8ac;
    background-color: #e8dfca;
  }

  #input_area1 {
    width: 300px;
  }
  #input_area2 {
    width: 300px;
  }
  #input_area3 {
    width: 300px;
  }
  #input_area4 {
    width: 300px;
  }

  #input_birth1 {
    width: 90px;
  }
  #input_birth2 {
    width: 90px;
  }

  .MuiButtonBase-root {
    font-family: "GD";
  }
  .MuiInputBase-input {
    font-family: "GD";
  }

  .MuiInputBase-root {
    font-family: "GD";
    color: black;
  }
  .MuiInputBase-root input {
    font-family: "GD";
  }
  .MuiOutlinedInput-notchedOutline {
    font-family: "GD";
  }
  .css-yjsfm1 {
    font-family: "GD";
  }
  .MuiSelect-nativeInput {
    font-family: "GD";
  }
  #demo-select-small {
    font-family: "GD";
  }
  #input_birth2 {
    font-family: "GD";
  }
`;

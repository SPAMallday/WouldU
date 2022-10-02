import styled from "styled-components";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import React, { useEffect, useState } from "react";
/**
 * @todo sessionStorage에 logged로 로그인했는지 정보 저장할 것
 */
export default function Menu() {
  //const logged = window.sessionStorage.getItem("ID");
  const [logg, setlogg] = useState();
  useEffect(() => {
    setlogg(window.sessionStorage.getItem("ID"));
  }, []);
  const logout = () => {
    sessionStorage.clear();
    swal("logout!", "로그아웃 완료", "success");
    setlogg();
  };
  return (
    <StyledWrapper>
      <div id="menubuttons">
        <Link to="/search" state={{ fromIndexQuery: "" }}>
          <div id="search">검색</div>
        </Link>
        <Link to="/recommend">
          <div id="recommend">추천</div>
        </Link>
        {logg ? (
          <>
            <Link to="/mypage">
              <div id="mypage">마이페이지</div>
            </Link>
            <Link to="/">
              <div id="logout" onClick={logout}>
                로그아웃
              </div>
            </Link>
          </>
        ) : (
          <div id="login">
            <Link to="/login">
              로그인
            </Link>
          </div>
        )}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  font-family: "GD";
  font-size: 24px;
  background-color: #f7ecde;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  #menubuttons {
    display: flex;
  }
  #menubuttons div {
    margin: 10px;
    border-radius: 10px;
  }
  #menubuttons div:hover {
    box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.2) inset;
  }
  #menubuttons div a {
    padding: 5px 20px;
  }
`;
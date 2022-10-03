import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from "sweetalert";

import loginImg from "assets/img/navbar/login.png";
import logoutImg from "assets/img/navbar/logout.png";
import mypageImg from "assets/img/navbar/mypage.png";
import recommendImg from "assets/img/navbar/recommend.png";
import searchImg from "assets/img/navbar/search.png";

export default function MainNav() {
  //const logged = window.sessionStorage.getItem("ID");
  const [logg, setlogg] = useState();

  useEffect(() => {
    setlogg(window.sessionStorage.getItem("ID"));
  }, []);
  const logout = () => {
    sessionStorage.clear();
    setlogg();
    window.location.replace("/");
    swal("logout!", "로그아웃 완료", "success");
  };

  return (
    <StyledWrapper>
      <div id="container">
        <div id="menubuttons">
          <Link to="/search" state={{ fromIndexQuery: "" }}>
            <img className="navBtn" src={searchImg} alt="searchImg" />
          </Link>
          <Link to="/recommend">
            <img className="navBtn" src={recommendImg} alt="recommendImg" />
          </Link>
          {logg ? (
            <>
              <Link to="/mypage">
                <img className="navBtn" src={mypageImg} alt="mypageImg" />
              </Link>
              <Link to="/">
                <img
                  className="navBtn"
                  src={logoutImg}
                  alt="logoutImg"
                  onClick={logout}
                />
              </Link>
            </>
          ) : (
            <Link to="/login">
              <img className="navBtn" src={loginImg} alt="loginImg" />
            </Link>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "GD";
  font-size: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  #container {
    top: 0px;
    z-index: 3;
    width: 90%;
    height: 100px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 5px 0px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  #logo {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  #logo-image {
    width: 150px;
    height: 100px;
  }

  .navBtn {
    padding: 5px 15px;
    border-radius: 10px;
  }
  .navBtn:hover {
    box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.3) inset;
  }
`;

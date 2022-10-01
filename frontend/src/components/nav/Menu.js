import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * @todo sessionStorage에 logged로 로그인했는지 정보 저장할 것
 */
export default function Menu() {
  const logged = window.sessionStorage.getItem("logged");
  return (
    <StyledWrapper>
      <div id="menubuttons">
        <div id="search">
          <Link to="/search">
            검색
          </Link>
        </div>
        <div id="recommend">
          <Link to="/recommend">
            추천
          </Link>
        </div>
        {logged ? (
          <>
            <div id="mypage">
              <Link to="/">
                마이페이지
              </Link>
            </div>
            <div id="logout">
              <Link to="/">
                로그아웃
              </Link>
            </div>
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
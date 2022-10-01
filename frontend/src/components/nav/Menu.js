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
        <Link to="/search" state={{ fromIndexQuery: "" }}>
          <div id="search">검색</div>
        </Link>
        <Link to="/recommend">
          <div id="recommend">추천</div>
        </Link>
        {logged ? (
          <>
            <Link to="/">
              <div id="mypage">마이페이지</div>
            </Link>
            <Link to="/">
              <div id="logout">로그아웃</div>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <div id="login">로그인</div>
          </Link>
        )}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  #menubuttons {
    display: flex;
  }
  a > div {
    margin: 10px;
  }
`;

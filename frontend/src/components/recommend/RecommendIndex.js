import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import earth from "assets/img/earth.png";
import planet1 from "assets/img/planet3.png";
import planet2 from "assets/img/planet2.png";

/**
 * 리뷰를 한번도 하지 않은 유저에게는 '평가'만 활성화하여 보여지고, 안내 문구도 같이 출력해야 함
 */
export default function RecommendIndex() {
  const navigate = useNavigate();
  const [user_no, setno] = useState();
  useEffect(() => {
    setno(window.sessionStorage.getItem("no"));
  }, []);

  const sfr = () => {
    if (user_no === null) {
      swal("앗!", "로그인이 필요한 서비스입니다.", "info");
    } else {
      navigate("/recommend/search-for-recommend");
    }
  };
  const boe = () => {
    if (user_no === null) {
      swal("앗!", "로그인이 필요한 서비스입니다.", "info");
    } else {
      navigate("/recommend/based-on-evaluation");
    }
  };
  return (
    <StyledWrapper>
      <div onClick={boe}>
        <img src={planet1} alt="행성" />
        <div id="text">술 평가 기반 추천 받으러 가기</div>
      </div>
      <div onClick={sfr}>
        <img src={earth} alt="지구" />
        <div id="text">술 평가하러 가기</div>
      </div>
      <div>
        <Link to="/recommend/based-on-filtering">
          <img src={planet2} alt="행성" />
          <div id="text">간편하게 나에게 맞는 술 찾기</div>
        </Link>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  img {
    width: 200px;
    height: 200px;
  }
  img:hover {
    width: 250px;
    height: 250px;
  }

  #text {
    background-color: white;
  }
`;

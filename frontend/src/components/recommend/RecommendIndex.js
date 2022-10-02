import styled from "styled-components";
import * as React from "react";
import { Link } from "react-router-dom";
import planet4 from "assets/img/planet4.png";
import planet1 from "assets/img/planet1.png";
import planet2 from "assets/img/planet2.png";


/**
 * 리뷰를 한번도 하지 않은 유저에게는 '평가'만 활성화하여 보여지고, 안내 문구도 같이 출력해야 함
 */
export default function RecommendIndex() {
  return (
    <StyledWrapper>
      <div id="mars">
        <Link to="/recommend/based_on_evaluation">
            <img src={planet2} alt="화성" />
            <div id="text">추천 받으러 가는 행성</div>
        </Link>
      </div>
      <div id="jupiter">
        <Link to="/recommend/search_for_recommend">
          <img src={planet4} alt="목성" />
          <div id="text">전통주 평가하는 행성</div>
        </Link>
      </div>
      <div id="saturn">
        <Link to="/recommend/based_on_filtering">
          <img src={planet1} alt="토성" />
          <div id="text">간단히 추천해주는 행성</div>
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
  #mars {
    position: relative;
    top: -10vh;
    left: 3vw;
    width: 350px;
    height: 350px;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  #mars:hover {
    -webkit-transform: translateY(-18px);
    transform: translateY(-18px);
  }
  #jupiter {
    position: relative;
    top: -10vh;
    width: 350px;
    height: 350px;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  #jupiter:hover {
    -webkit-transform: translateY(-18px);
    transform: translateY(-18px);
  }
  #saturn {
    position: relative;
    width: 350px;
    height: 350px;
    top: -10vh;
    left: -3vw;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  #saturn:hover {
    -webkit-transform: translateY(-18px);
    transform: translateY(-18px);
  }
  a {
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #text {
    font-family: "GD";
    font-size: 28px;
    color: #293462;
    background-color: #ffdfaf;
    margin-top: 15px;
    border-radius: 10px;
    border: 3px solid #f2bb7b;
    display: inline-block;
    width: 300px;
    text-align: center;
  }
`;

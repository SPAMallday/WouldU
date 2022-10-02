import styled from "styled-components";
import * as React from "react";
import RecommendIndex from "components/recommend/RecommendIndex";
import recommendbackground from "assets/img/recommendbackground.jpg";
import { Link } from "react-router-dom";
import earth from "assets/img/earth.png";
import mousepointer from "assets/img/mousepointer.png";

export default function RecommendPage() {
  return (
    <StyledWrapper>
      <div id="earth">
        <Link to="/">
          <img src={earth} alt="지구" />
          <div id="back">돌아가기</div>
        </Link>
      </div>
      <RecommendIndex />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  cursor: url(${mousepointer}) 50 50, auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${recommendbackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  #earth {
    position: relative;
    top: 55vh;
    left: -43vw;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    width: 200px;
    height: 200px;
  }
  #earth:hover {
    -webkit-transform: translateY(-18px);
    transform: translateY(-18px);
  }
  #earth img {
    width: 100px;
  }
  #earth img:hover {
    width: 150px;
    height: 150px;
  }
  a {
    cursor: url(${mousepointer}) 50 50, auto;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #back {
    font-family: "GD";
    font-size: 18px;
    color: black;
    background-color: #aac4ff;
    margin-top: 10px;
    border-radius: 10px;
    border: 3px solid #b1b2ff;
    display: inline-block;
    width: 90px;
    text-align: center;
  }
`;

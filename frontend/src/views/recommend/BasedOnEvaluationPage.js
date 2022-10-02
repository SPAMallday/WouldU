import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "components/nav/Header";
import testinput from "components/search/testinput";
import { Link } from "react-router-dom";
import rocketicon from "assets/img/rocketicon.png"
import mousepointer from "assets/img/mousepointer.png";
import traditionalframe from "assets/img/traditionalframe.png";
import planet4 from "assets/img/planet4.png"

/**
 * @todo 백엔드에서 추천 결과5개 보내주기로 했어서 그거 띄우는 틀 만들었음.
 */
export default function BasedOnEvaluationPage() {
  const testIdList = [1, 3, 5, 6, 7];
  const filterTestList = testinput.filter(num => {
    return testIdList.includes(Number(num.id))
  })
  console.log(filterTestList)

  const testListItems = filterTestList.map(e => (
    <Link to={"/detail/" + e.id} key={`detail + ${e.id}`}>
      <div id="result-frame">
        <div id="tooltip">
          <img src={e.img_link} alt="img" />
          <span id="tooltiptext">
            <div id="information">
              <div id="alcoholtitle">{e.name}</div>
              <div>{e.brewery}</div>
              <div>
                {e.size}ml / {e.alcohol}도
              </div>
            </div>
          </span>
        </div>
      </div>
    </Link>
  ));
  console.log(testListItems[0])
  return (
    <>
      <Header />
      <StyledWrapper>
        <div id="background">
          <div id="basedonevaluationpageframe">
            <div id="introducetotal">
              <div id="introduceheader">
                "우주" 에서 평가하신 데이터를 바탕으로, 회원님과 어울리는
                전통주를 선정해 보았어요!
              </div>
              <div id="introducetext">
                사진에 손을 올리시면 전통주의 간단한 설명을 알 수 있으며,
                클릭하시면 해당 전통주의 상세페이지로 이동합니다.
              </div>
            </div>
            <div id="result">{testListItems}</div>
          </div>
          <div id="goevaluation">
            <Link to="/recommend/search_for_recommend">
              <img src={planet4} alt="목성" />
              <div id="goevaluation-text">평가하러 가기</div>
            </Link>
          </div>
          <div id="rocketframe">
            <Link to="/recommend">
              <img src={rocketicon} alt="로켓" />
              <div id="back">돌아가기</div>
            </Link>
          </div>
        </div>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  background-color: #f7ecde;
  height: 88vh;
  font-family: "GD";

  #background {
    height: 100%;
  }
  #basedonevaluationpageframe {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: auto;
  }
  #introducetotal {
    margin-top: 50px;
    text-align: center;
  }
  #introduceheader {
    font-size: 28px;
  }
  #introducetext {
    font-size: 20px;
  }
  #rocketframe {
    cursor: url(${mousepointer}) 50 50, auto;
    position: relative;
    top: -6vh;
    left: 1.4vw;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    width: 200px;
    height: 200px;
  }
  #rocketframe:hover {
    cursor: url(${mousepointer}) 50 50, auto;
    -webkit-transform: translateY(-18px);
    transform: translateY(-18px);
  }
  #rocketframe img {
    cursor: url(${mousepointer}) 50 50, auto;
    width: 100px;
  }
  #rocketframe img:hover {
    cursor: url(${mousepointer}) 50 50, auto;
    width: 150px;
    height: 150px;
  }
  #back {
    cursor: url(${mousepointer}) 50 50, auto;
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

  #goevaluation {
    cursor: url(${mousepointer}) 50 50, auto;
    position: relative;
    top: 15vh;
    left: 87.5vw;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    width: 200px;
    height: 200px;
  }
  #goevaluation:hover {
    cursor: url(${mousepointer}) 50 50, auto;
    -webkit-transform: translateY(-18px);
    transform: translateY(-18px);
  }
  #goevaluation img {
    cursor: url(${mousepointer}) 50 50, auto;
    width: 100px;
  }
  #goevaluation img:hover {
    cursor: url(${mousepointer}) 50 50, auto;
    width: 150px;
    height: 150px;
  }
  #goevaluation-text {
    cursor: url(${mousepointer}) 50 50, auto;
    font-family: "GD";
    font-size: 18px;
    color: black;
    background-color: #aac4ff;
    margin-top: 10px;
    border-radius: 10px;
    border: 3px solid #b1b2ff;
    display: inline-block;
    width: 115px;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #result {
    display: flex;
    width: 1300px;
    height: 320px;
    background-image: url(${traditionalframe});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #result-frame {
    width: 180px;
    height: 180px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 20px 30px;
    border: solid black;
    border-radius: 50%;
  }
  #result-frame:hover {
    -webkit-transform: translateY(18px);
    transform: translateY(18px);
  }
  #result-frame img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    margin: auto;
    object-fit: contain;
  }

  /* Tooltip container */
  #tooltip {
    position: relative;
    display: inline-block;
  }

  /* Tooltip text */
  #tooltip #tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: #ffcaca;
    color: black;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    top: 115%;
    left: 40%;
    margin-left: -81px;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  #tooltip:hover #tooltiptext {
    visibility: visible;
  }
  #tooltip #tooltiptext::after {
    content: " ";
    position: absolute;
    bottom: 100%; /* At the top of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #ffcaca transparent;
  }
  #information {
    font-size: 18px;
  }
  #alcoholtitle {
    font-size: 22px;
  }
`;
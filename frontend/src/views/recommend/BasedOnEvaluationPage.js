import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "components/nav/Header";
import Element from "components/search/Element";
import testinput from "components/search/testinput";
import { Link } from "react-router-dom";
import rocketicon from "assets/img/rocketicon.png"
import mousepointer from "assets/img/mousepointer.png";

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
      <Element
        id={e.id}
        img_link={e.img_link}
        name={e.name}
        brewery={e.brewery}
        ingredients={e.ingredients}
        size={e.size}
        alcohol={e.alcohol}
        desc={e.desc}
        key={`${e.id}`}
      />
    </Link>
  ))
  console.log(testListItems[0])
  return (
    <>
      <Header />
      <StyledWrapper>
        <div id="background">
          <div id="basedonevaluationpageframe">
            <div id="rocketframe">
              <Link to="/recommend">
                <img src={rocketicon} alt="지구" />
                <div id="back">돌아가기</div>
              </Link>
            </div>
            <div id="result">
              당신과 어울리는 전통주입니다.
              {testListItems}
            </div>
            <button>
              <Link to="/recommend/search_for_recommend">술 평가하러 가기</Link>
            </button>
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
    justify-content: space-evenly;
    align-items: center;
    width: auto;
  }
  #result {
    width: auto;
  }

  #rocketframe {
    cursor: url(${mousepointer}) 50 50, auto;
    position: relative;
    top: 45vh;
    left: -5vw;
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
  a {
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
`;
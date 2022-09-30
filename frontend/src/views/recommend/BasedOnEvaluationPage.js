import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "components/nav/Header";
import Element from "components/search/Element";
import testinput from "components/search/testinput";
import { Link } from "react-router-dom";

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
  return (
    <>
      <Header />
      <StyledWrapper>
        <button>
          <Link to="/recommend">
            뒤로 가기
          </Link>
        </button>
        <div id="result">
          당신과 어울리는 술입니다.
          {testListItems}
        </div>
      <button>
        <Link to="/recommend/search_for_recommend">
          술 평가하러 가기
        </Link>
      </button>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: auto;

  #result{
    width: 800px;
  }

`;
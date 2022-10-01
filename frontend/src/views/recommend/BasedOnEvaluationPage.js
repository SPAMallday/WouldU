import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "components/nav/Header";
import Element from "components/search/Element";
import { Link } from "react-router-dom";
import { userRecom, alcoholDetail } from "../../api/recommendAPI";

/**
 * @todo 백엔드에서 추천 결과5개 보내주기로 했어서 그거 띄우는 틀 만들었음.
 */
export default function BasedOnEvaluationPage() {
  const [ac_id, setAcid] = useState([]);
  const [alcohol, setAlcohol] = useState([]);

  useEffect(() => {
    //알콜 리스트 받아오고
    userRecom().then(res => {
      setAcid(res.recommend);
      setAlcohol([]);
      for (var i = 0; i < res.recommend.length; i++) {
        alcoholDetail(res.recommend[i]).then(res => {
          setAlcohol(alcohol => [...alcohol, res]);
        });
      }
    });

    //알콜 상세 받아오기
  }, []);

  const ListItems = alcohol.map(e => (
    <Link to={"/detail/" + e.alco_no} key={`detail + ${e.alco_no}`}>
      <Element
        id={e.alco_no}
        img_link={e.alco_img}
        name={e.alco_name}
        brewery={e.brewery}
        ingredients={e.material}
        size={e.size}
        alcohol={e.abv}
        desc={e.detail}
        key={`${e.alco_no}`}
      />
    </Link>
  ));

  return (
    <>
      <Header />
      <StyledWrapper>
        <button>
          <Link to="/recommend">뒤로 가기</Link>
        </button>
        <div id="result">
          당신과 어울리는 술입니다.
          {ListItems}
        </div>
        <button>
          <Link to="/recommend/search_for_recommend">술 평가하러 가기</Link>
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

  #result {
    width: 800px;
  }
`;

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function RecentReviewCard() {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/review-ranking`)
      .then(res => {
        console.log(res);
        setReviewList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // reg_date: "2022-09-28T17:06:10" 이런식으로 오는데 최근 식으로 정렬해야 함
  const listItem = reviewList.map(e => (
    <ListStyledWrapper key={`${e.ranking}`}>
      <div>
        {e.ranking}위 : {e.alcohol_name}
      </div>
    </ListStyledWrapper>
  ));

  return (
    <StyledWrapper>
      <h2>최근 리뷰가 작성된 전통주</h2>
      {listItem}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 40vw;
  height: 40vh;
  margin: 10px;
  padding: 10px;
  border: solid black 1px;
  border-radius: 10px;
  font-family: "GD";
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ListStyledWrapper = styled.div`

`;
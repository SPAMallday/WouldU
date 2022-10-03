import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import one from "assets/img/number/one.png";
import two from "assets/img/number/two.png";
import three from "assets/img/number/three.png";
import four from "assets/img/number/four.png";
import five from "assets/img/number/five.png";
import six from "assets/img/number/six.png";
import seven from "assets/img/number/seven.png";
import eight from "assets/img/number/eight.png";
import nine from "assets/img/number/nine.png";
import ten from "assets/img/number/ten.png";
import newtag from "assets/img/newtag.png";

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

  let now = new Date();
  let todayYear = now.getFullYear();
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();

  const checkToday = date => {
    if (
      todayYear === Number(date.slice(0, 4)) &&
      todayMonth === Number(date.slice(5, 7)) &&
      todayDate === Number(date.slice(8, 10))
    ) {
      return (
        <div>
          <img src={newtag} alt="신규" />
        </div>
      );
    }
  };

  if (reviewList && reviewList.length === 10) {
    return (
      <StyledWrapper>
        <h2>최근 리뷰가 작성된 전통주</h2>
        <table>
          <tbody>
            <tr>
              <td>
                &nbsp;{reviewList[0].ranking}.&nbsp;
                {reviewList[0].alcohol_name}
                {checkToday(reviewList[0].reg_date)}
              </td>
              <td>
                &nbsp;{reviewList[5].ranking}.&nbsp;
                {reviewList[5].alcohol_name}
                {checkToday(reviewList[5].reg_date)}
              </td>
            </tr>
            <tr>
              <td>
                &nbsp;{reviewList[1].ranking}.&nbsp;
                {reviewList[1].alcohol_name}
                {checkToday(reviewList[1].reg_date)}
              </td>
              <td>
                &nbsp;{reviewList[6].ranking}.&nbsp;
                {reviewList[6].alcohol_name}
                {checkToday(reviewList[6].reg_date)}
              </td>
            </tr>
            <tr>
              <td>
                &nbsp;{reviewList[2].ranking}.&nbsp;
                {reviewList[2].alcohol_name}
                {checkToday(reviewList[2].reg_date)}
              </td>
              <td>
                &nbsp;{reviewList[7].ranking}.&nbsp;
                {reviewList[7].alcohol_name}
                {checkToday(reviewList[7].reg_date)}
              </td>
            </tr>
            <tr>
              <td>
                &nbsp;{reviewList[3].ranking}.&nbsp;
                {reviewList[3].alcohol_name}
                {checkToday(reviewList[3].reg_date)}
              </td>
              <td>
                &nbsp;{reviewList[8].ranking}.&nbsp;
                {reviewList[8].alcohol_name}
                {checkToday(reviewList[8].reg_date)}
              </td>
            </tr>
            <tr>
              <td>
                &nbsp;{reviewList[4].ranking}.&nbsp;
                {reviewList[4].alcohol_name}
                {checkToday(reviewList[4].reg_date)}
              </td>
              <td>
                &nbsp;{reviewList[9].ranking}.&nbsp;
                {reviewList[9].alcohol_name}
                {checkToday(reviewList[9].reg_date)}
              </td>
            </tr>
          </tbody>
        </table>
      </StyledWrapper>
    );
  }
}

const StyledWrapper = styled.div`
  width: 40vw;
  height: 40vh;
  margin: 10px;
  padding: 10px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: "GD";
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-sizing: border-box;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  display: flex;
  flex-direction: column;
  background-color: #dfe8cc;

  justify-content: center;
  align-items: center;

  table {
    max-width: 600px;
  }
  tr {
    width: 600px;
    display: flex;
  }
  td {
    border: 2px solid #ccd6a6;
    border-radius: 5px;
    padding: 5px 5px;
    margin: 5px 10px;
    width: 300px;
    display: flex;
    align-items: center;
    font-size: 18px;
    background-color: #dae2b6;
  }

  img {
    width: 24px;
    margin-right: 7px;
  }
  div img {
    margin-left: 7px;
  }
`;

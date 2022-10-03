import React, { useState, useEffect } from "react";
import styled from "styled-components";
import newtag from "assets/img/newtag.png";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { recentReview } from "../../api/mainpageAPI";

export default function RecentReviewCard() {
  const [reviewList, setReviewList] = useState([]);
  const navigate = useNavigate();
  const onClick = alcohol_no => {
    navigate("/detail/" + alcohol_no);
  };

  function convList(list) {
    const convert = list.map((item, index) => {
      return (
        <Grid
          key={index}
          className="gridItem"
          onClick={() => {
            onClick(item.alcohol_no);
          }}
        >
          <Typography display="inline-flex">
            &nbsp;{item.ranking}.&nbsp;
            {item.alcohol_name}
          </Typography>
          {checkToday(item.reg_date)}
        </Grid>
      );
    });

    return convert;
  }

  useEffect(() => {
    recentReview().then(res => {
      //console.log(res);

      let resList = res;
      let temp = [];

      resList = convList(resList);

      if (resList.length > 5) {
        temp = [
          resList.slice(0, 5), // 1~5
          resList.slice(5), // 6부터 끝까지
        ];
      } else {
        temp = [resList, []];
      }

      setReviewList(temp);
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

  return (
    <StyledWrapper>
      <h2>최근 리뷰가 작성된 전통주</h2>
      {reviewList[0]?.length > 0 ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnSpacing={2}
        >
          <Grid
            xs
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            {reviewList[0].map(item => {
              return item;
            })}
          </Grid>
          {reviewList[1]?.length > 0 ? (
            <Grid
              xs
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              {reviewList[1].map(item => {
                return item;
              })}
            </Grid>
          ) : null}
        </Grid>
      ) : (
        <p>최근 리뷰 데이터를 불러올 수 없어요😥</p>
      )}
    </StyledWrapper>
  );
}

// &nbsp;{reviewList[9].ranking}.&nbsp;
//               {reviewList[9].alcohol_name}
//               {checkToday(reviewList[9].reg_date)}

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

  .gridItem {
    border: 2px solid #ccd6a6;
    border-radius: 5px;
    padding: 5px 5px;
    margin: 5px 0;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #dae2b6;
    justify-content: space-between;

    :hover {
      transform: scale(1.1);
      box-shadow: rgba(0, 0, 0, 0.65) 0px 3px 8px;
      background-color: #c4e2b6;
    }
  }

  .gridItem p {
    font-size: 18px;
    font-family: "GD";
  }

  img {
    width: 24px;
    margin-right: 7px;
  }
  div img {
    margin-left: 7px;
  }
`;

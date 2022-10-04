import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { likeRanking } from "../../api/mainpageAPI";

export default function PopularWordCard() {
  const [popularList, setPopularList] = useState([]);
  const navigate = useNavigate();
  const onClick = alcohol_no => {
    navigate("/detail/" + alcohol_no);
  };

  const imgList = [one, two, three, four, five, six, seven, eight, nine, ten];

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
          <img src={imgList[index]} alt={index + 1} />
          <Typography display="inline-flex">{item.alcohol_name}</Typography>
        </Grid>
      );
    });

    return convert;
  }

  useEffect(() => {
    likeRanking().then(res => {
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

      setPopularList(temp);
    });
  }, []);

  return (
    <StyledWrapper>
      <h2>실시간 좋아요 순위</h2>
      {popularList[0]?.length > 0 ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
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
            {popularList[0].map(item => {
              return item;
            })}
          </Grid>
          {popularList[1]?.length > 0 ? (
            <Grid
              xs
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              {popularList[1].map(item => {
                return item;
              })}
            </Grid>
          ) : null}
        </Grid>
      ) : (
        <p>실시간 좋아요 순위를 불러올 수 없어요😥</p>
      )}
    </StyledWrapper>
  );
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
  background-color: #ffe3e1;

  justify-content: center;
  align-items: center;

  .gridItem {
    border: 2px solid #f09494;
    border-radius: 5px;
    padding: 5px 5px;
    margin: 5px 0;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #ffd1d1;

    :hover {
      transform: scale(1.1);
      box-shadow: rgba(0, 0, 0, 0.9) 0px 3px 8px;
      background-color: #ffd1e8;
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
`;

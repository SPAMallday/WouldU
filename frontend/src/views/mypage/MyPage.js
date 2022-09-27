import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Chart from "components/mypage/Chart";
import MyCollection from "components/mypage/MyCollection";
import LikeList from "components/mypage/LikeList";
import ReviewList from "components/mypage/ReviewList";
import Header from "components/nav/Header";
import IconButton from "@mui/material/IconButton";
import BarChartIcon from "@mui/icons-material/BarChart";
import StarIcon from "@mui/icons-material/Star";
//import axios from "axios";

export default function MyPage() {
  useEffect(() => {
    console.log("hi");
    /** 페이지 이동했을때 값들 전부 가져와야한다.
    axios
      .get("/", null, {})
      .then(res => {
        console.log(res);
      })
      .catch();
      */
    setUserName("한재승");
    //주종차트데이터
    setCateData([
      { id: "탁주", value: 324 },
      { id: "과실주", value: 88 },
      { id: "증류주", value: 221 },
    ]);
    setRateData([
      { subject: "단맛", rating: 3 },
      { subject: "신맛", rating: 2 },
      { subject: "바디감", rating: 3 },
      { subject: "향", rating: 2 },
    ]);
    //데이터 받아왔을때 정렬하자
    setSpaceData([
      { space: "경기도", count: 8 },
      { space: "경상도", count: 6 },
      { space: "서울", count: 4 },
      { space: "충청도", count: 2 },
    ]);

    setLikeList([
      { name: "장수", img: "" },
      { name: "무병장수", img: "" },
      { name: "장수왕", img: "" },
      { name: "장수왕", img: "" },
      { name: "장수왕", img: "" },
      { name: "장수왕", img: "" },
      { name: "장수왕", img: "" },
    ]);
    setReviewList([
      {
        name: "장수",
        img: "",
        rating: 4,
        comment: "술이 달고 맛있다. 재구매 의사 있음",
      },
      {
        name: "무병장수",
        img: "",
        rating: 2,
        comment: "생각한것 만큼 맛있지 않았다. 직접 사서 먹진 않을 듯",
      },
      {
        name: "장수왕",
        img: "",
        rating: 5,
        comment: "내입맛이 딱 맞았다. 좋다.",
      },
      {
        name: "장수 생막걸리",
        img: "",
        rating: 4,
        comment: "술이 달고 맛있다. 재구매 의사 있음",
      },
      {
        name: "장수 생막걸리",
        img: "",
        rating: 1,
        comment: "술이 달고 맛있다. 재구매 의사 있음",
      },
    ]);
  }, []);

  const [userName, setUserName] = useState("");

  const [mpToggle, setToggle] = useState("true");

  //차트용 데이터들
  const [cateData, setCateData] = useState([]);
  const [rateData, setRateData] = useState([]);
  const [spaceData, setSpaceData] = useState([]);

  //랭킹용 데이터들
  const [likeList, setLikeList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  const onClickSummary = () => {
    setToggle(true);
  };
  const onClickList = () => {
    setToggle(false);
  };

  if (mpToggle) {
    return (
      <StyledWrapper>
        <Header />
        <div id="main">
          <div id="mainPage">
            <div id="mp_header">
              <h1 id="nameText">{userName}님 통계</h1>
              <div id="btnGroup">
                <IconButton
                  onClick={onClickSummary}
                  id="btnSummary"
                  size="large"
                >
                  <BarChartIcon sx={{ fontSize: 40, color: "orange" }} />
                </IconButton>
                <IconButton onClick={onClickList}>
                  <StarIcon sx={{ fontSize: 40, color: "orange" }} />
                </IconButton>
              </div>
            </div>
            <Chart
              userName={userName}
              cateData={cateData}
              rateData={rateData}
            />
            <MyCollection userName={userName} spaceData={spaceData} />
          </div>
        </div>
      </StyledWrapper>
    );
  } else {
    return (
      <StyledWrapper>
        <Header />
        <div id="main">
          <div id="mainPage">
            <div>
              <h1 id="nameText">{userName}님 리뷰</h1>
              <div id="btnGroup">
                <IconButton
                  onClick={onClickSummary}
                  id="btnSummary"
                  size="large"
                >
                  <BarChartIcon sx={{ fontSize: 40, color: "orange" }} />
                </IconButton>
                <IconButton onClick={onClickList}>
                  <StarIcon sx={{ fontSize: 40, color: "orange" }} />
                </IconButton>
              </div>
            </div>
            <LikeList likeList={likeList} />
            <ReviewList reviewList={reviewList} />
          </div>
        </div>
      </StyledWrapper>
    );
  }
}

const StyledWrapper = styled.div`
  #main {
    text-align: center;
  }
  #mainPage {
    margin: auto;
    width: 1300px;
    background: gray;
  }
  #mp_header {
    height: 100px;
  }
  #nameText {
    padding-top: 40px;
  }
  #btnGroup {
    text-align: right;
    margin-top: -20px;
    margin-right: 50px;
    margin-bottom: 10px;
  }
  #btnSummary {
    margin-right: 50px;
  }
`;

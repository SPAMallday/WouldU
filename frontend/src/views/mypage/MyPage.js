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
import Card from "@mui/material/Card";
import axios from "axios";
import { category, average } from '../../api/myPageAPI';

export default function MyPage() {
  const SERVER = "http://localhost:8000";

  const [userName, setUserName] = useState("");
  //차트용 데이터들
  const [cateData, setCateData] = useState([]);
  const [rateData, setRateData] = useState([]);

  const [spaceData, setSpaceData] = useState([]);


  // 먹은 술 주종 카테고리 차트
  // const category = async (url, no) => {
  //   try {
  //     const res = await axios.get(`${SERVER}` + url, {
  //       headers: { "user-no": no },
  //     });

  //     //console.log(res.data);
  //     res.data.forEach(data => {
  //       setCateData(cateData => [
  //         ...cateData,
  //         { id: data.alcohol_type, value: data.count },
  //       ]);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // 먹은 술 평균값 차트
  // const average = async (url, no) => {
  //   try {
  //     const res = await axios.get(`${SERVER}` + url, {
  //       headers: { "user-no": no },
  //     });

  //     console.log(res.data[0]);

  //     setRateData([
  //       { subject: "단맛", rating: res.data[0].단맛.toFixed(2) },
  //       { subject: "신맛", rating: res.data[0].신맛.toFixed(2) },
  //       { subject: "바디감", rating: res.data[0].바디감.toFixed(2) },
  //       { subject: "향", rating: res.data[0].향.toFixed(2) },
  //     ]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    setUserName(sessionStorage.getItem("Nick"));

    /** 페이지 이동했을때 값들 전부 가져와야한다.*/

    const user_no = sessionStorage.getItem("no");

    // category("/mypage/my-fav-alcohol", user_no);
    // average("/mypage/my-alcohol", user_no);


    category().then((res) => {
      res.forEach(data => {
        setCateData(cateData => [
          ...cateData,
          { id: data.alcohol_type, value: data.count },
        ]);
      });
    });
    average().then((res) => {
      setRateData([
        { subject: "단맛", rating: res[0].단맛.toFixed(2) },
        { subject: "신맛", rating: res[0].신맛.toFixed(2) },
        { subject: "바디감", rating: res[0].바디감.toFixed(2) },
        { subject: "향", rating: res[0].향.toFixed(2) },
      ]);
      // setRateData(res);
    });


    //주종차트데이터

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

  const [mpToggle, setToggle] = useState("true");

  //랭킹용 데이터들
  const [likeList, setLikeList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  const onClickSummary = () => {
    console.log(cateData);
    console.log(spaceData);
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
            <Card>
              <div id="mp_header">
                <h1 id="nameText">{userName}님 통계</h1>
                <div id="btnGroup">
                  <IconButton
                    onClick={onClickSummary}
                    id="btnSummary"
                    size="large"
                  >
                    <BarChartIcon sx={{ fontSize: 40, color: "purple" }} />
                  </IconButton>
                  <IconButton onClick={onClickList}>
                    <StarIcon sx={{ fontSize: 40, color: "purple" }} />
                  </IconButton>
                </div>
              </div>
              <Chart
                userName={userName}
                cateData={cateData}
                rateData={rateData}
              />
              <MyCollection userName={userName} spaceData={spaceData} />
            </Card>
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
            <Card>
              <div id="mp_header">
                <h1 id="nameText">{userName}님 리뷰</h1>
                <div id="btnGroup">
                  <IconButton
                    onClick={onClickSummary}
                    id="btnSummary"
                    size="large"
                  >
                    <BarChartIcon sx={{ fontSize: 40, color: "purple" }} />
                  </IconButton>
                  <IconButton onClick={onClickList}>
                    <StarIcon sx={{ fontSize: 40, color: "purple" }} />
                  </IconButton>
                </div>
              </div>
              <LikeList likeList={likeList} />
              <ReviewList reviewList={reviewList} />
            </Card>
          </div>
        </div>
      </StyledWrapper>
    );
  }
}

const StyledWrapper = styled.div`
  #main {
    text-align: center;
    background-color: #efeff7;
  }
  .css-bhp9pd-MuiPaper-root-MuiCard-root {
    background-color: #efeff7;
    box-shadow: none;
  }
  #mainPage {
    margin: auto;
    width: 1300px;
  }
  #mp_header {
    height: 100px;
    margin-top: 50px;
  }
  #nameText {
    padding-top: 40px;
  }
  #btnGroup {
    text-align: right;
    margin-top: -20px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  #btnSummary {
    margin-right: 50px;
  }
`;

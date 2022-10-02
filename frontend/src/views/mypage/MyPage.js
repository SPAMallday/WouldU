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
import spaces from "assets/img/space_example.jpg";

import {
  category,
  average,
  space,
  mylike,
  myreview,
} from "../../api/myPageAPI";

export default function MyPage() {
  const [userName, setUserName] = useState("");
  const [mpToggle, setToggle] = useState("true");

  //차트용 데이터들
  const [cateData, setCateData] = useState([]);
  const [rateData, setRateData] = useState([]);
  const [spaceData, setSpaceData] = useState([]);

  //랭킹용 데이터들
  const [likeList, setLikeList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    setUserName(sessionStorage.getItem("Nick"));

    /** 페이지 이동했을때 값들 전부 가져와야한다.*/

    //const user_no = sessionStorage.getItem("no");

    // category("/mypage/my-fav-alcohol", user_no);
    // average("/mypage/my-alcohol", user_no);

    category().then(res => {
      setCateData([]);
      res.forEach(data => {
        setCateData(cateData => [
          ...cateData,
          { id: data.alcohol_type, value: data.count },
        ]);
      });
    });
    average().then(res => {
      setRateData([
        { subject: "단맛", rating: res[0].단맛.toFixed(2) },
        { subject: "신맛", rating: res[0].신맛.toFixed(2) },
        { subject: "바디감", rating: res[0].바디감.toFixed(2) },
        { subject: "향", rating: res[0].향.toFixed(2) },
      ]);
      // setRateData(res);
    });
    space().then(res => {
      setSpaceData([]);
      res.forEach(data => {
        setSpaceData(spaceData => [
          ...spaceData,
          { space: data.region_name, count: data.count },
        ]);
      });
      spaceData.sort(function (a, b) {
        return b.count - a.count;
      });
    });
    mylike().then(res => {
      setLikeList([]);
      res.forEach(data => {
        setLikeList(likeList => [
          ...likeList,
          {
            alcohol_image: data.alcohol_image,
            alcohol_name: data.alcohol_name,
            alcohol_no: data.alcohol_no,
          },
        ]);
      });
    });
    myreview().then(res => {
      setReviewList([]);
      res.forEach(data => {
        setReviewList(reviewList => [
          ...reviewList,
          {
            alcohol_image: data.alcohol_image,
            alcohol_name: data.alcohol_name,
            alcohol_no: data.alcohol_no,
            comment: data.comment,
            score: data.score,
            review_no: data.review_no,
          },
        ]);
      });
    });
  }, []);

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
              <ReviewList
                reviewList={reviewList}
                setReviewList={setReviewList}
              />
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
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("${spaces}");
    background-size: 100% 100%;
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

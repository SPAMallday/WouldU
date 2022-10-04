import styled from "styled-components";
import RadarChart from "./RadarChart";
import SendReviewDialog from "./SendReviewDialog";
import { alcoholLike } from "../../api/recommendAPI";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import swal from "sweetalert";
import React, { useState, useEffect } from "react";
import heartdetailpage from "assets/img/heartdetailpage.png";

export default function Information(props) {
  const [like, setLike] = useState("");
  const [count, setCount] = useState("");
  const [tasteData, setTasteData] = useState();
  useEffect(() => {
    setLike(props.alcohol.user_like);
    if (props.alcohol.score >= 0) {
      setTasteData([
        {
          taste: "평점",
          전통주: Number(props.alcohol.score),
        },
        {
          taste: "단맛",
          전통주: Number(props.alcohol.sweet),
        },
        {
          taste: "바디감",
          전통주: Number(props.alcohol.body),
        },
        {
          taste: "신맛",
          전통주: Number(props.alcohol.sour),
        },
        {
          taste: "향",
          전통주: Number(props.alcohol.scent),
        },
      ]);
    }
    setCount(props.alcohol.like_count);
  }, [props]);

  const [openReview, setOpenReview] = useState(false);

  const detailInformationTags =
    props.alcohol && props.alcohol.alco_name
      ? props.alcohol.tag === ""
        ? []
        : [props.alcohol.tag.split(",")]
      : [];
  //console.log(detailInformationTags);
  const detailInformationTagslist =
    detailInformationTags[0] && detailInformationTags[0].length > 1
      ? detailInformationTags[0].map(e => <div key={e}>#{e}</div>)
      : detailInformationTags.map(e => <div key={e}>#{e}</div>);

  /**
   * @todo 유저 평점 집어넣어야 함
   */

  const changelike = () => {
    const data = {
      alco_no: props.alcohol.alco_no,
      user_no: props.userno,
    };

    if (props.userno !== null) {
      alcoholLike(data).then(res => {
        if (res === "success") {
          if (like === 1) {
            setLike(0);
            setCount(count - 1);
          } else {
            swal("Like!", "좋아요 추가 완료!", "success");
            setLike(1);
            setCount(count + 1);
          }
        }
      });
    } else {
      swal("앗!", "로그인이 필요한 서비스입니다.", "info");
    }
  };

  const handleReview = () => {
    if (props.userno !== null) {
      setOpenReview(true);
    } else {
      swal("앗!", "로그인이 필요한 서비스입니다.", "info");
    }
  };

  return (
    <StyledWrapper>
      <div id="picture-information">
        <div id="picture">
          <img src={props.alcohol.alco_img} alt={props.alcohol.alco_name} />
        </div>
        <div id="information">
          {like === 1 ? (
            <div id="divlike">
              <div id="textCount">{count}</div>
              <IconButton onClick={changelike} id="likeb">
                <FavoriteIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </div>
          ) : (
            <div id="divlike">
              <div id="textCount">{count}</div>
              <IconButton onClick={changelike} id="likeb">
                <FavoriteBorderIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </div>
          )}
          <div id="alcoholname">{props.alcohol.alco_name}</div>
          <div>양조장 : {props.alcohol.brewery}</div>
          <div>종류 : {props.alcohol.alco_type}</div>
          <div>재료 : {props.alcohol.material}</div>
          <div>용량 : {props.alcohol.size}ml</div>
          <div>도수 : {props.alcohol.abv}도</div>
          {props.alcohol.award === "" ? (
            <div>수상내역 : -</div>
          ) : (
            <div>수상내역 : {props.alcohol.award}</div>
          )}
          <div id="information-desc">설명 : {props.alcohol.detail}</div>
          <div id="information-tags">{detailInformationTagslist}</div>
          <div id="buttongroup-frame">
            <div id="buttongroup">
              <div>
                <button id="goreview" onClick={handleReview}>
                  리뷰 남기기
                </button>
                <SendReviewDialog
                  openReview={openReview}
                  setOpenReview={setOpenReview}
                  alcohol={props.alcohol}
                  setReview={props.setReview}
                  setAlcohol={props.setAlcohol}
                />
              </div>
              <button id="goshop">
                <a
                  href={`https://search.shopping.naver.com/search/all?query=${props.alcohol.alco_name}`}
                >
                  구매하러 가기
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="information-chart">
        <RadarChart tasteData={tasteData} />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  font-family: "GD";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #picture-information {
    display: flex;
    border: 3px ridge #f5f0bb;
    margin: 10px 0px;
    width: 80vw;
    min-width: 1200px;
    border-radius: 10px;
  }
  #picture {
    width: 300px;
    height: 300px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 7px;
    margin-top: 20px;
    margin-left: 20px;
  }
  #picture img {
    width: 290px;
    height: 290px;
    margin: auto;
    object-fit: contain;
    border-radius: 10px;
  }

  #divlike {
    text-align: right;
    display: inline-block;
    height: 0px;
    font-size: larger;
  }

  #textCount {
    display: inline-block;
    font-family: "GD";
  }

  #alcoholname {
    font-size: 32px;
    padding: 10px 0px 10px;
  }

  #information {
    display: flex;
    flex-direction: column;
    margin: 0px 10px 10px;
    font-size: 20px;
  }
  #information div {
    margin: 0px 5px 3px;
  }

  #buttongroup-frame {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  #buttongroup {
    display: flex;
    width: 300px;
  }
  #goshop {
    padding: 0px 15px;
    border-radius: 10px;
    background-color: #b5fe83;
    border: 2px solid #babd42;
    height: 40px;
  }
  #goshop a {
    text-decoration: none;
    color: black;
  }
  #goreview {
    height: 40px;
    padding: 0px 15px;
    border-radius: 10px;
    background-color: #ffee63;
    border: 2px solid #efd345;
  }
  // #information-desc {
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   display: -webkit-box;
  //   -webkit-line-clamp: 3;
  //   -webkit-box-orient: vertical;
  //   line-height: 1.2em;
  // }
  #information-tags {
    margin-top: 10px;
    display: flex;
  }
  #information-tags div {
    margin-top: 10px;
  }
  #information-chart {
    border: 3px ridge #f5f0bb;
    margin: 10px 0px;
    width: 80vw;
    min-width: 1200px;
    border-radius: 10px;
  }

  // 좋아요 버튼
  .MuiSvgIcon-root {
    color: #d2001a;
  }
`;

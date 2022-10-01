import styled from "styled-components";
import RadarChart from "./RadarChart";
import SendReviewDialog from "./SendReviewDialog";
import { alcoholLike } from "../../api/recommendAPI";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import swal from "sweetalert";
import React, { useState, useEffect } from "react";

export default function Information(props) {
  const [like, setLike] = useState("");
  useEffect(() => {
    setLike(props.alcohol.user_like);
  }, [props]);

  const [openReview, setOpenReview] = useState(false);

  const detailInformationTags =
    props.alcohol && props.alcohol.alco_name
      ? props.alcohol.tag === ""
        ? []
        : [props.alcohol.tag.split(",")]
      : [];

  const detailInformationTagslist = detailInformationTags.map(e => (
    <div key={e}>#{e}</div>
  ));

  /**
   * @todo 유저 평점 집어넣어야 함
   */
  const tasteData = [
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
  ];
  const changelike = () => {
    const data = {
      alco_no: props.alcohol.alco_no,
      user_no: props.userno,
    };

    if (props.userno !== null) {
      console.log(props.alcohol.user_like, like);
      alcoholLike(data).then(res => {
        if (res === "success") {
          if (like === 1) {
            setLike(0);
          } else {
            swal("Like!", "좋아요 추가 완료!", "success");
            setLike(1);
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
              <IconButton onClick={changelike} id="likeb">
                <FavoriteIcon sx={{ fontSize: 40, color: "purple" }} />
              </IconButton>
            </div>
          ) : (
            <div id="divlike">
              <IconButton onClick={changelike} id="likeb">
                <FavoriteBorderIcon sx={{ fontSize: 40, color: "purple" }} />
              </IconButton>
            </div>
          )}
          <h3>{props.alcohol.alco_name}</h3>
          <div>양조장 : {props.alcohol.brewery}</div>
          <div>종류 : {props.alcohol.alco_type}</div>
          <div>재료 : {props.alcohol.material}</div>
          <div>용량 : {props.alcohol.size}ml</div>
          <div>도수 : {props.alcohol.abv}도</div>
          <div>수상내역 : {props.alcohol.award}</div>
          <a
            href={`https://search.shopping.naver.com/search/all?query=${props.alcohol.alco_name}`}
          >
            <button>구매하러 가기</button>
          </a>
          <div>
            <button onClick={handleReview}>리뷰하기</button>
            <SendReviewDialog
              openReview={openReview}
              setOpenReview={setOpenReview}
              alcohol={props.alcohol}
            />
          </div>
          <div id="information-desc">설명 : {props.alcohol.detail}</div>
          <div id="information-tags">태그 : {detailInformationTagslist}</div>
        </div>
      </div>
      <div id="information-chart">
        <RadarChart tasteData={tasteData} />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #picture-information {
    display: flex;
    border: solid;
    margin: 10px 0px;
  }

  #picture {
    width: 200px;
    height: 200px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #picture img {
    width: 190px;
    height: 190px;
    margin: auto;
    object-fit: contain;
  }

  #divlike {
    text-align: right;
    height: 10px;
  }
  #likeb {
    margin-bottom: -30px;
  }

  #information {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
  #information div {
    margin: 0px 5px;
  }
  #information-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.2em;
  }
  #information-tags {
    display: flex;
  }
  #information-chart {
    border: solid olive;
  }
`;

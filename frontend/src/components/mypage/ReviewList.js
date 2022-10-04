import React from "react";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import swal from "sweetalert";
import { mydelete, myreview } from "../../api/myPageAPI";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

/**
 * 술 이미지 교체 필요, 리뷰 보여주는 컴포, 리뷰 삭제 post보내야함
 * @param {*} prop 리뷰리스트 받아야함
 * @returns
 */
export default function ReviewList(prop) {
  //리뷰 클릭시 dialog띄우기
  const onClickItem = item => {
    swal({
      title: "평가 삭제!",
      text: item.alcohol_name + " 평가를 삭제하시겠습니까?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: {
          text: "취소",
          value: "NO",
          visible: true,
        },
        confirm: {
          text: "삭제",
          value: "OK",
          color: "red",
        },
      },
    }).then(value => {
      switch (value) {
        case "OK":
          mydelete(item.review_no)
            .then(res => {
              swal("Success!", "삭제 완료!", "success");
              myreview().then(res => {
                prop.setReviewList([]);
                res.forEach(data => {
                  prop.setReviewList(reviewList => [
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
            })
            .catch(err => {
              console.log(err);
            });

          break;
        case "NO":
          break;
        default:
          console.log("error");
      }
    });
  };

  // 술 리스트 반복으로 보여주기
  const like = () => {
    const result = [];
    for (let i = 0; i < prop.reviewList.length; i++) {
      result.push(
        <SwiperSlide key={i}>
          <div id="bigItem" onClick={() => onClickItem(prop.reviewList[i])}>
            <Card
              sx={{
                maxWidth: 300,
              }}
              id="soolcard"
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  alt="술"
                  id="imgSool"
                  image={prop.reviewList[i].alcohol_image}
                />
                <CardContent>
                  <Typography
                    component="div"
                    sx={{ fontSize: 20, fontFamily: "GD" }}
                  >
                    {prop.reviewList[i].alcohol_name}
                  </Typography>
                  <Typography component="div" sx={{ fontSize: 20 }}>
                    <h5 id="tx_star">평점 : </h5>
                    <Rating
                      name="read-only"
                      value={prop.reviewList[i].score}
                      readOnly
                    />
                  </Typography>
                  <Typography component="div" sx={{ fontSize: 20 }}>
                    <h5 id="tx_rating">
                      한줄평 : {prop.reviewList[i].comment}
                    </h5>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </SwiperSlide>,
      );
    }
    return result;
  };

  return (
    <StyledWrapper>
      <div id="main">
        <h3 id="title">내가 평가한 목록</h3>
        <div id="space">
          <div id="itemlist"></div>
        </div>
        <Swiper
          id="swiper"
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
        >
          {like()}
        </Swiper>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #main {
    margin-top: 60px;
    margin-bottom: 40px;
    width: 1300px;
    height: 530px;
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

    background-color: #f7ecde;
  }
  #soolcard {
    border: 2px solid #e8c9a0;
    border-radius: 5px;
    padding: 5px 5px;
    margin: 5px 0;
    width: 100%;
    display: flex;
    align-items: center;

    :hover {
      box-shadow: rgba(0, 0, 0, 0.9) 0px 3px 8px;
      transform: scale(1.1);
      background-color: #f2e0c9;
    }
  }
  #title {
    text-align: left;
    padding-top: 20px;
    margin-left: 30px;
  }
  #bigItem {
    margin-bottom: 40px;
    margin-top: 20px;
  }
  #tx_rating {
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    font-family: "GD";
  }
  #tx_star {
    text-align: left;
    margin-top: 10px;
    margin-bottom: -25px;
    margin-left: 10px;
    margin-right: 10px;
    font-family: "GD";
  }

  .css-o69gx8-MuiCardMedia-root {
    width: unset;
    margin: auto;
  }

  .swiper-wrapper {
    margin-left: 50px;
  }
`;

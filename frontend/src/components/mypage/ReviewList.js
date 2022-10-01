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
import space from "assets/img/space_example.jpg";
import { mydelete } from "../../api/myPageAPI";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

/**
 * 술 이미지 교체 필요, 리뷰 보여주는 컴포, 리뷰 삭제 post보내야함
 * @param {*} prop 리뷰리스트 받아야함
 * @returns
 */
export default function ReviewList(prop) {
  const navigate = useNavigate();

  //리뷰 클릭시 dialog띄우기
  const onClickItem = item => {
    swal({
      title: "리뷰 삭제!",
      text: "정말로 삭제하시겠습니까?",
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
              swal("Success!", "삭제되었습니다.", "success");
              console.log(res.data);
              navigate("/mypage");
            })
            .catch(err => {
              console.log(err);
            });

          break;
        case "NO":
          console.log("NO");
          break;
        default:
          console.log("error");
      }
    });

    console.log(item);
  };

  // 술 리스트 반복으로 보여주기
  const like = () => {
    const result = [];
    for (let i = 0; i < prop.reviewList.length; i++) {
      result.push(
        <SwiperSlide>
          <div
            id="bigItem"
            key={i}
            onClick={() => onClickItem(prop.reviewList[i])}
          >
            <Card
              sx={{
                maxWidth: 300,
              }}
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
                  <Typography component="div" sx={{ fontSize: 20 }}>
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
        <h3 id="title">리뷰 목록</h3>
        <div id="space">
          <div id="itemlist"></div>
        </div>
        <Swiper
          id="swiper"
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
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
    height: 500px;
    background: url("${space}");
    background-size: 100% 100%;
    color: white;
  }
  #title {
    text-align: left;
    padding-top: 20px;
    margin-left: 30px;
  }
  #bigItem {
    margin-bottom: 30px;
    margin-top: 20px;
  }
  #tx_rating {
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
  #tx_star {
    text-align: left;
    margin-top: 10px;
    margin-bottom: -25px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .css-o69gx8-MuiCardMedia-root {
    width: unset;
    margin: auto;
  }

  .swiper-wrapper {
    margin-left: 50px;
  }
`;
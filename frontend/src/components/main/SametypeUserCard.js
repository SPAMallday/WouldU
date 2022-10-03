import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { userRank } from "../../api/mainpageAPI";
import { useNavigate } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

/**
 * 술 이미지 교체 필요, 리뷰 보여주는 컴포, 리뷰 삭제 post보내야함
 * @param {*} prop 리뷰리스트 받아야함
 * @returns
 */
export default function SameType() {
  const [sametype, setSametype] = useState();
  const navigate = useNavigate();
  const onClickItem = item => {
    //console.log(item);
    navigate("/detail/" + item.alcohol_no);
  };

  useEffect(() => {
    if (sessionStorage.getItem("no") !== null) {
      userRank().then(res => {
        setSametype(res);
      });
    }
  }, []);

  if (sametype && sametype.length > 0) {
    return (
      <StyledWrapper>
        <div id="main">
          <h3 id="title">나와 비슷한 유저들이 고른 술</h3>
          <Swiper
            id="swiper"
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
          >
            {sametype &&
              sametype.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card
                    sx={{
                      maxWidth: 300,
                    }}
                    onClick={() => onClickItem(item)}
                    id="soolcard"
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="230"
                        alt="술"
                        id="imgSool"
                        image={item.alcohol_image}
                      />
                      <CardContent>
                        <Typography component="div" sx={{ fontSize: 20 }}>
                          <h4>{item.alcohol_name}</h4>
                        </Typography>
                        <Typography component="div" sx={{ fontSize: 20 }}>
                          <h4>
                            평점 :
                            <Rating
                              name="read-only"
                              value={item.avg_score}
                              readOnly
                              id="stars"
                              size="large"
                            />
                          </h4>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </StyledWrapper>
    );
  } else {
  }
}

const StyledWrapper = styled.div`
  #main {
    width: 1300px;
    height: 500px;
    background-color: #ffe3e1;
  }
  #title {
    text-align: left;
    padding-top: 20px;
    margin-left: 30px;
  }

  .swiper-wrapper {
    margin-left: 50px;
    margin-top: 50px;
  }

  #imgSool {
    width: 100%;
    height: 230px;
    object-fit: scale-down;
  }

  #soolcard {
    :hover {
      transform: scale(1.1);
    }
  }
`;

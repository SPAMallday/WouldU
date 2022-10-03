import React from "react";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

/**
 * 술 목록 받아서 보여주는 컴포
 * 술 이미지 교체 필요
 * @param {*} prop 좋아요 리스트 받아야함
 * @returns
 */
export default function LikeList(prop) {
  const navigate = useNavigate();
  const onClickItem = item => {
    console.log(item);
    navigate("/detail/" + item.alcohol_no);
  };

  const like = () => {
    const result = [];
    for (let i = 0; i < prop.likeList.length; i++) {
      result.push(
        <SwiperSlide>
          <div key={i} id="item" onClick={() => onClickItem(prop.likeList[i])}>
            {/** 술 이미지 교체 해야함. */}

            <Card
              sx={{
                width: 170,
                height: 310,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  src={prop.likeList[i].alcohol_image}
                  alt={prop.likeList[i].alcohol_name}
                  id="imgSool"
                />
                <CardContent>
                  <Typography component="div" sx={{ fontSize: 20 }}>
                    {prop.likeList[i].alcohol_name}
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
        <h3 id="title">좋아요 목록</h3>
        <Swiper
          modules={[Navigation]}
          spaceBetween={-50}
          slidesPerView={5}
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
    margin-top: 50px;
    width: 1300px;
    height: 430px;
    background: #bb9b9b;
  }
  #title {
    text-align: left;
    padding-top: 20px;
    margin-bottom: 20px;
    margin-left: 30px;
  }
  #item {
    display: inline-block;
  }

  .css-o69gx8-MuiCardMedia-root {
    width: unset;
    margin: auto;
  }

  #imgSool {
    width: 100%;
    height: 230px;
    object-fit: scale-down;
  }
`;

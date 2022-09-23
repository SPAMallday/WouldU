import React from "react";
import styled from "@emotion/styled";
import ex from "assets/img/장수.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

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
  const onClickItem = item => {
    console.log(item);
  };

  const like = () => {
    const result = [];
    for (let i = 0; i < prop.likeList.length; i++) {
      result.push(
        <SwiperSlide>
          <div key={i} id="item" onClick={() => onClickItem(prop.likeList[i])}>
            {/** 술 이미지 교체 해야함. */}
            <img src={ex} alt="술" id="imgSool"></img>
            <h5 id="nameSool">{prop.likeList[i].name}</h5>
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
    width: 1300px;
    height: 400px;
    background: yellow;
  }
  #title {
    text-align: left;
    padding-top: 20px;
    margin-left: 30px;
  }
  #item {
    display: inline-block;
    border: 1px solid;
    margin-right: 30px;
  }
  #imgSool {
    height: 250px;
  }
  #nameSool {
    margin: 10px;
  }

  #space {
    margin: auto;
    width: 1200px;
    background: pink;
  }
`;

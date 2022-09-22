import React from "react";
import styled from "@emotion/styled";
import ex from "assets/img/장수.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { HiOutlineStar } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function LikeList(prop) {
  //dialog용 변수
  const [open, setOpen] = React.useState(false);

  //dialog 닫기
  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    setOpen(false);
    //리뷰 삭제 요청 보내기
  };

  //리뷰 클릭시 dialog띄우기
  const onClickItem = item => {
    setOpen(true);
    console.log(item);
  };

  //별표 만드는 것
  const star = rating => {
    if (rating === 1) {
      return (
        <h4 id="tx_rating">
          별점 :
          <AiFillStar color="yellow" size="20" />
          <HiOutlineStar color="yellow" size="20" />
          <HiOutlineStar color="yellow" size="20" />
          <HiOutlineStar color="yellow" size="20" />
          <HiOutlineStar color="yellow" size="20" />
        </h4>
      );
    } else if (rating === 2) {
      return (
        <h4 id="tx_rating">
          별점 :
          <AiFillStar color="yellow" size="20" />
          <AiFillStar color="yellow" size="20" />
          <HiOutlineStar color="yellow" size="20" />
          <HiOutlineStar color="yellow" size="20" />
          <HiOutlineStar color="yellow" size="20" />
        </h4>
      );
    } else if (rating === 3) {
      return (
        <h4 id="tx_rating">
          별점 :
          <AiFillStar color="yellow" size="20" />
          <AiFillStar color="yellow" size="20" />
          <AiFillStar color="yellow" size="20" />
          <HiOutlineStar color="yellow" size="20" />
          <HiOutlineStar color="yellow" size="20" />
        </h4>
      );
    } else if (rating === 4) {
      return (
        <h4 id="tx_rating">
          별점 : <AiFillStar color="yellow" size="20" />
          <AiFillStar color="yellow" size="20" />
          <AiFillStar color="yellow" size="20" />
          <AiFillStar color="yellow" size="20" />
          <HiOutlineStar color="yellow" size="20" />
        </h4>
      );
    } else {
      return (
        <h4 id="tx_rating">
          별점 : <AiFillStar color="yellow" size="20" />
          <AiFillStar color="yellow" size="20" />
          <AiFillStar color="yellow" size="20" />
          <AiFillStar color="yellow" size="20" />
          <AiFillStar color="yellow" size="20" />
        </h4>
      );
    }
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
            <div id="item">
              {/** 술 이미지 교체 해야함. */}
              <img src={ex} alt="술" id="imgSool"></img>
              <h5 id="nameSool">{prop.reviewList[i].name}</h5>
            </div>
            {star(prop.reviewList[i].rating)}
            <h5 id="tx_rating">한줄평 : {prop.reviewList[i].comment}</h5>
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
          slidesPerView={4}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {like()}
        </Swiper>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            리뷰를 삭제하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>아니요</Button>
          <Button onClick={handleOk} autoFocus>
            예
          </Button>
        </DialogActions>
      </Dialog>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #main {
    width: 1300px;
    height: 500px;
    background: pink;
  }
  #title {
    text-align: left;
    padding-top: 20px;
    margin-left: 30px;
  }
  #bigItem {
    border: 1px solid;
  }
  #tx_rating {
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 20px;
  }
  #item {
    display: inline-block;
    border: 1px solid;
    margin-top: 10px;
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

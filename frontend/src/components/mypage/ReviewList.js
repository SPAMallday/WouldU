import React from "react";
import styled from "@emotion/styled";
import ex from "assets/img/장수.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import swal from "sweetalert";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

/**
 * 술 이미지 교체 필요, 리뷰 보여주는 컴포, 리뷰 삭제 post보내야함
 * @param {*} prop 리뷰리스트 받아야함
 * @returns
 */
export default function ReviewList(prop) {
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
    swal({
      title: "Warning!",
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
          swal("Success!", "삭제되었습니다.", "success");
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
                  image={ex}
                />
                <CardContent>
                  <Typography component="div" sx={{ fontSize: 20 }}>
                    {prop.reviewList[i].name}
                  </Typography>
                  <Typography component="div" sx={{ fontSize: 20 }}>
                    <h5 id="tx_star">평점 : </h5>
                    <Rating
                      name="read-only"
                      value={prop.reviewList[i].rating}
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
    margin-top: 50px;
    width: 1300px;
    background: #bb9b9b;
    margin-bottom: 50px;
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

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "@emotion/styled";
import StarComment from "components/rating/StarComment";
import SelectType from "components/search/SelectType";
import swal from "sweetalert";
import Slide from "@mui/material/Slide";
import { alcoholreview } from "../../api/recommendAPI";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

/**
 * @todo 제출하기 버튼으로 제출할 수 있게 해야함
 */
export default function SendReviewDialog(props) {
  const { openReview, setOpenReview } = props;

  //평가
  const [value, setValue] = useState(3);
  //한줄평
  const [comment, setComment] = useState("");
  //맛선택
  const [sweet, setSweet] = useState(3);
  const [sour, setSour] = useState(3);
  const [body, setBody] = useState(3);
  const [smell, setSmell] = useState(3);

  const handleChange = (event, newValue) => {
    setSweet(newValue);
  };
  const handleChange1 = (event, newValue) => {
    setSour(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setBody(newValue);
  };
  const handleChange3 = (event, newValue) => {
    setSmell(newValue);
  };

  const handleClose = () => {
    setOpenReview(false);
  };

  const handleOk = () => {
    const data = {
      user_no: sessionStorage.getItem("no"),
      alcohol_no: props.alcohol.alco_no,
      score: value,
      comment: comment,
      sweet: sweet,
      sour: sour,
      scent: smell,
      body: body,
    };
    console.log(sweet, sour, body, smell, value, comment);
    alcoholreview(data).then(res => {
      if (res === "success") {
        swal({
          title: "Thank you!",
          text: "리뷰 작성이 완료되었습니다.",
          icon: "success",
          button: {
            text: "확인",
          },
        });
        setOpenReview(false);
      } else {
        swal("Error!", "리뷰 작성 실패!!", "error");
      }
    });
  };

  const onChangeValue = (event, newValue) => {
    setValue(newValue);
  };

  const onChangeComment = event => {
    setComment(event.target.value);
  };

  return (
    <Dialog
      maxWidth="md"
      TransitionComponent={Transition}
      keepMounted
      open={openReview}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <CustomStyle>
        <DialogTitle id="review-title-text">
          &lt; 리뷰 작성하기 &gt;
        </DialogTitle>
      </CustomStyle>
      <DialogContent>
        <DialogContentText sx={{ fontFamily: "GD", fontSize: "18px" }}>
          "{props.alcohol.alco_name}"을(를) 마셔본 우주 유저의 경험은
          소중합니다.
        </DialogContentText>
        <Box
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            m: "auto",
            width: "fit-content",
          }}
        >
          <StyledWrapper>
            <div id="main">
              <div id="ratingForm">
                <div id="imgBox">
                  <img src={props.alcohol.alco_img} alt="술" id="img_sul" />
                </div>
                <div id="detailBox">
                  <h5 id="text_title">이름 : {props.alcohol.alco_name}</h5>
                  <h5 id="text_sul">주종 : {props.alcohol.alco_type}</h5>
                  <h5 id="text_sul">도수 : {props.alcohol.abv}도</h5>
                </div>
              </div>
              <div>
                <SelectType
                  handleChange={handleChange}
                  handleChange1={handleChange1}
                  handleChange2={handleChange2}
                  handleChange3={handleChange3}
                />
              </div>
              <div id="text-font">
                <StarComment
                  value={value}
                  onChangeValue={onChangeValue}
                  comment={comment}
                  onChangeComment={onChangeComment}
                />
              </div>
            </div>
          </StyledWrapper>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleOk}
          sx={{ fontFamily: "GD", color: "black", fontSize: "20px" }}
        >
          제출하기
        </Button>
        <Button
          onClick={handleClose}
          sx={{ fontFamily: "GD", color: "black", fontSize: "20px" }}
        >
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const StyledWrapper = styled.div`
  #main {
    text-align: center;
  }
  #ratingForm {
    display: flex;
    margin: 10px 0px 20px;
    border: 2px solid #abd9ff;
    border-radius: 7px;
    background-color: #d2daff;
  }

  #btn_search {
    width: 150px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  #btn_delete {
    float: right;
    margin-bottom: -50px;
  }
  #imgBox {
    width: 200px;
    height: 200px;
    border: 0.2px solid #abd9ff;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
  #imgBox img {
    width: 190px;
    height: 190px;
    margin: auto;
    object-fit: contain;
  }
  #detailBox {
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #d2daff;
    border-radius: 7px;
  }
  #text_title {
    text-align: left;
    margin: 10px 20px;
    font-size: 24px;
    font-family: "GD";
  }
  #text_sul {
    text-align: left;
    margin: 10px 20px;
    font-size: 20px;
    font-family: "GD";
  }
  #text-font {
    font-family: "GD";
  }
`;

const CustomStyle = styled.div`
  text-align: center;
  .MuiTypography-root {
    font-family: "GD";
    font-size: 28px;
  }
`;
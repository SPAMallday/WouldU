import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from "@emotion/styled";
import testinput from "components/search/testinput";
import StarComment from "components/rating/StarComment";
import SelectType from "components/search/SelectType";


/**
 * @todo 제출하기 버튼으로 제출할 수 있게 해야함
 */
export default function SendReviewDialog(props) {
  const { openReview, setOpenReview, targetId } = props;

  const reviewTargetInTestinput = testinput[targetId - 1];

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

  const onChangeValue = (event, newValue) => {
    setValue(newValue);
  };

  const onChangeComment = event => {
    setComment(event.target.value);
  };

  return (
    <>
      <Dialog
        fullWidth="true"
        maxWidth="md"
        open={openReview}
        onClose={handleClose}
      >
        <DialogTitle>리뷰 작성하기</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {reviewTargetInTestinput.name} 을(를) 마셔본 우주 유저의 경험은 소중합니다. 작성해주세요~
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <StyledWrapper>
              <div id="main">
                <div id="ratingForm">
                  <div id="imgBox">
                    <img
                      src={reviewTargetInTestinput.img_link}
                      alt="술"
                      id="img_sul"
                    />
                  </div>
                  <div id="detailBox">
                    <h5 id="text_sul">이름 : {reviewTargetInTestinput.name}</h5>
                    <h5 id="text_sul">주종 : {reviewTargetInTestinput.type}</h5>
                    <h5 id="text_sul">양조장 : {reviewTargetInTestinput.brewery}</h5>
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
                <div>
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
          <Button onClick={handleClose}>제출하기</Button>
          <Button onClick={handleClose}>닫기</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const StyledWrapper = styled.div`
  #main {
    text-align: center;
  }
  #ratingForm {
    display: inline-block;
    margin: auto;
    border: 1px solid;
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
    background: yellow;
    float: left;
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
    display: inline-block;
    background: pink;
  }
  #text_sul {
    text-align: left;
    margin: 20px;
  }
`;
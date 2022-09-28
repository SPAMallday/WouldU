import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import StarComment from "components/rating/StarComment";
import testinput from "components/search/testinput";

export default function ReviewForRecommend(props) {
  const { setHandleClick, reviewTarget } = props;

  const reviewTargetInTestinput = testinput[reviewTarget - 1];
    //평가
  const [value, setValue] = useState(3);
  //한줄평
  const [comment, setComment] = useState("");

  /**
   * 등록하기 버튼 누를 시 데이터 저장 해야 함
   */
  const onClick = () => {
    setHandleClick(false);
  };

  const goBack = () => {
    setHandleClick(false);
  }

  const onChangeValue = (event, newValue) => {
    setValue(newValue);
  };

  const onChangeComment = event => {
    setComment(event.target.value);
  };

  return (
    <StyledWrapper>
      <div id="main">
        <Button
          type="button"
          id="btn_delete"
          variant="contained"
          color="success"
          onClick={goBack}
        >
          뒤로 가기
        </Button>
        <h2>술평가</h2>
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
          <StarComment
            value={value}
            onChangeValue={onChangeValue}
            comment={comment}
            onChangeComment={onChangeComment}
          />
        </div>
        <div id="btBox">
          <Button
            type="button"
            id="btn_search"
            variant="contained"
            onClick={onClick}
            color="secondary"
          >
            등록
          </Button>
        </div>
      </div>
    </StyledWrapper>
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

import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import StarComment from "components/rating/StarComment";
import { useEffect } from "react";
import { getRecord, makeRecord } from "api/recommendAPI";
import swal from "sweetalert";

export default function ReviewForRecommend(props) {
  const { setHandleClick, reviewTarget } = props;
  //평가
  const [value, setValue] = useState(0);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getRecord(reviewTarget.alcohol_no).then(res => {
      if (res.score !== 0) {
        setUpdate(true);
        setValue(res.score);
      }
    });
  }, []);

  const onClick = () => {
    const data = {
      alcohol_no: reviewTarget.alcohol_no,
      score: value,
      update: update,
    };

    makeRecord(data).then(res => {
      if (res.status === 201) {
        swal("완료!", "성공적으로 평점을 기록했어요👏", "success").then(() =>
          setHandleClick(false),
        );
      } else {
        swal("실패!", "평점 기록에 실패했어요😥", "error");
      }
    });
  };

  const goBack = () => {
    setHandleClick(false);
  };

  const onChangeValue = (event, newValue) => {
    setValue(newValue);
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
            <img src={reviewTarget.alcohol_image} alt="술" id="img_sul" />
          </div>
          <div id="detailBox">
            <h5 id="text_sul">이름 : {reviewTarget.alcohol_name}</h5>
            <h5 id="text_sul">주종 : {reviewTarget.type}</h5>
            <h5 id="text_sul">양조장 : {reviewTarget.brewery}</h5>
          </div>
        </div>
        <div>
          <StarComment
            value={value}
            onChangeValue={onChangeValue}
            type="recommend"
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

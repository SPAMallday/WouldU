import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import StarComment from "components/rating/StarComment";
import { useEffect } from "react";
import { getRecord, makeRecord } from "api/recommendAPI";
import swal from "sweetalert";
import closeicon from "assets/img/closeicon.png";

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
        <img id="closeicon" src={closeicon} alt="창 닫기" onClick={goBack} />
        <div id="main-title-text">&lt; 전통주 평가 &gt;</div>
        <div id="ratingForm">
          <div id="imgBox">
            <img src={reviewTarget.alcohol_image} alt="술" id="img_sul" />
          </div>
          <div id="detailBox">
            <h5 id="text_title">이름 : {reviewTarget.alcohol_name}</h5>
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
            평가 보내기
          </Button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #main {
    text-align: center;
    margin: 10px;
    padding: 20px 30px;
    border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
    border-style: solid;
    border-width: 2px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-family: "GD";
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    box-sizing: border-box;
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    display: flex;
    flex-direction: column;
    background-color: #ffe3e1;

    justify-content: center;
    align-items: center;
  }
  #main-title-text {
    font-size: 36px;
    margin-bottom: 20px;
  }
  #closeicon {
    cursor: pointer;
    width: 50px;
    height: 50px;
    position: relative;
    top: 10px;
    left: 270px;
  }
  #ratingForm {
    display: flex;
    margin: 10px 0px 20px;
    border: 2px solid #ff7f3f;
    border-radius: 7px;
    background-color: #f4bfbf;
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
    border: 0.2px solid #d0b8a8;
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
    background-color: #f4bfbf;
    border-radius: 7px;
  }
  #text_title {
    text-align: left;
    margin: 10px 20px;
    font-size: 24px;
  }
  #text_sul {
    text-align: left;
    margin: 10px 20px;
    font-size: 20px;
  }

  .MuiButtonBase-root {
    background-color: #fa7070;
    font-family: "Jua";
    font-size: 24px;
    color: #fbf2cf;
  }
`;

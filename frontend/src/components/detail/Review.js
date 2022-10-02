import styled from "styled-components";
import Rating from "@mui/material/Rating";

export default function Review(props) {
  // 술 리스트 반복으로 보여주기
  const like = () => {
    const result = [];
    if (props.review && props.review.length > 0) {
      for (let i = 0; i < props.review.length; i++) {
        result.push(
          <div id="reviews" key={i}>
            <h4 id="tx_star">
              평점 :
              <Rating
                name="read-only"
                value={props.review[i].score}
                readOnly
                id="stars"
                size="large"
              />
            </h4>
            <h4 id="tx_comment">한줄평 : {props.review[i].comment}</h4>
          </div>,
        );
      }
      return result;
    }
  };

  return (
    <StyledWrapper>
      <div id="main">
        <h3 id="title">유저들의 평가</h3>

        {like()}
      </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  #main {
    border: 1px solid;
  }

  #stars {
    margin-left: 10px;
    padding-top: px;
  }
  #reviews {
    display: flex;
  }

  #tx_comment {
    margin-left: 30px;
  }
`;

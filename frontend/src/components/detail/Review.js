import styled from "styled-components";
import Rating from "@mui/material/Rating";

export default function Review({ review }) {
  // 술 리스트 반복으로 보여주기
        

  return (
    <StyledWrapper>
      <div id="main">
        <h3 id="title">유저들의 평가</h3>
        {
          review && review.map((item, index) => (
          <div id="reviews" key={index}>
            <h4 id="tx_star">
              평점 :
              <Rating
                name="read-only"
                value={item.score}
                readOnly
                id="stars"
                size="large"
              />
            </h4>
            <h4 id="tx_comment">한줄평 : {item.comment}</h4>
            </div>
          ))
        }
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

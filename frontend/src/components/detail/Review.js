import styled from "styled-components";
import Rating from "@mui/material/Rating";

export default function Review({ review }) {
  // 술 리스트 반복으로 보여주기

  return (
    <StyledWrapper>
      <div id="reviewframe">
        <div id="reviewtitle">&lt; "우주" 회원들의 평가 &gt;</div>
        <div id="reviewlist">
          {review.length > 0 ? null : <div id="reviewnull">현재 등록된 리뷰가 없습니다.😥</div>}
          {review &&
            review.map((item, index) => (
              <div id="reviews" key={index}>
                <div id="tx_star">
                  <Rating
                    name="read-only"
                    value={item.score}
                    readOnly
                    id="stars"
                    size="large"
                  />
                </div>
                <div id="tx_comment">{item.comment}</div>
              </div>
            ))}
        </div>
      </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "GD";

  #reviewframe {
    border: 3px ridge #f5f0bb;
    margin: 10px 0px;
    width: 80vw;
    min-width: 1200px;
    border-radius: 10px;
  }
  #main {
    border: 1px solid;
    height: 250px;
    width: 1300px;
    margin-bottom: 80px;
  }
  #reviewtitle {
    font-size: 24px;
    margin: 10px;
  }

  #reviewnull {
    text-align: center;
    font-size: 24px;
  }

  #reviews {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin: 5px 4px;
    border: 2px solid #e1ceb5;
    border-radius: 10px;
    background-color: #ffe7cc;
    font-size: 20px;
    padding: 2px;
  }

  #tx_star {
    background-color: #fff5e4;
    border-radius: 10px;
    margin-left: 5px;
  }
  #tx_comment {
    margin-left: 10px;
  }

  .MuiRating-root {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
  }
`;

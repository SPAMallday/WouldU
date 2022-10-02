import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";

/**
 * 평점과 한줄평 컴포넌트
 * @param {value,comment} prop (별점, 한줄평)
 * @returns
 */
export default function StarComment(prop) {
  return (
    <StyledWrapper>
      <div id="starBox">
        <h5>평점</h5>
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Rating
            size="large"
            name="simple-controlled"
            value={prop.value}
            onChange={prop.onChangeValue}
          />
        </Box>
      </div>
      {prop.type === undefined ? (
        <div id="hanmadi">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "300px" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-multiline-static"
              label="한줄평"
              multiline
              value={prop.comment}
              rows={2}
              onChange={prop.onChangeComment}
              variant="outlined"
            />
          </Box>
        </div>
      ) : null}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #starBox {
    margin-top: 20px;
  }
  .css-jue3ft-MuiRating-root {
    font-size: 3rem;
  }
  #hanmadi {
    margin-top: 20px;
  }
`;

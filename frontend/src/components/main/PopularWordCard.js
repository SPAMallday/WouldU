import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function PopularWordCard() {
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/like-ranking`)
      .then(res => {
        console.log(res);
        setPopularList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  
  const listItem = popularList.map(e => (
    <ListStyledWrapper key={`${e.ranking}`}>
      <div>
        {e.ranking}위 : {e.alcohol_name}
      </div>
    </ListStyledWrapper>
  ));
  
  return (
    <StyledWrapper>
      <h2>실시간 좋아요 TOP 10</h2>
      {listItem}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 40vw;
  height: 40vh;
  margin: 10px;
  padding: 10px;
  border: solid black 1px;
  border-radius: 10px;
  font-family: "GD";
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ListStyledWrapper = styled.div`

`;
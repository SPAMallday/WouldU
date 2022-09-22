import React, { useEffect } from "react";
import styled from "@emotion/styled";
import earth from "assets/img/earth.png";
import planet1 from "assets/img/planet1.png";
import planet2 from "assets/img/planet2.png";

export default function MyCollection(prop) {
  prop.spaceData.sort((a, b) => b.rating - a.rating);
  useEffect(() => {}, []);
  return (
    <StyledWrapper>
      <div id="main">
        <h3 id="title">{prop.userName}님이 먹은 술 </h3>
        <div id="space">
          <img src={earth} alt="지구" id="P_gido" />
          <img src={planet1} alt="행성1" id="P_sangdo" />
          <img src={planet2} alt="행성2" id="P_seoul" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #main {
    width: 1300px;
    height: 400px;
    background: yellow;
  }
  #title {
    text-align: left;
    padding-top: 20px;
    margin-left: 30px;
  }
  #P_gido {
    width: 300px;
  }
  #P_sangdo {
    width: 200px;
  }
  #P_seoul {
    width: 100px;
  }
  #space {
  }
`;

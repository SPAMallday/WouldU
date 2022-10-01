import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import earth from "assets/img/earth.png";
import planet3 from "assets/img/planet1.png";
import planet2 from "assets/img/planet2.png";
import planet1 from "assets/img/planet3.png";
import planet4 from "assets/img/planet4.png";
import space from "assets/img/space_example.jpg";

export default function MyCollection(prop) {
  const [rank, setRank] = useState();
  useEffect(() => {
    if (prop.spaceData && prop.spaceData.length > 0) {
      setRank(prop.spaceData);
    }
  }, [prop, rank]);

  if (prop.spaceData && prop.spaceData.length > 0) {
    if (rank && rank.length > 0) {
      return (
        <StyledWrapper>
          <div id="main">
            <h3 id="title">{prop.userName}님이 먹은 술 </h3>
            <div id="space">
              {rank[0].count !== 0 ? (
                <Earth count={rank[0].count}>
                  <div id="textCount">{rank[0].count} 개</div>
                  <img src={earth} alt="지구" id="P_earth" />
                  <h5>{rank[0].space}</h5>
                </Earth>
              ) : (
                <Earth count={7}>
                  <img src={earth} alt="지구" id="P_earth" />
                  <h5>지구</h5>
                </Earth>
              )}
              {rank[1] ? (
                <Planet1 count={rank[1].count}>
                  <div id="textCount">{rank[1].count} 개</div>
                  <img src={planet1} alt="행성" id="P_planet1" />
                  <h5>{rank[1].space}</h5>
                </Planet1>
              ) : null}
              {rank[2] ? (
                <Planet2 count={rank[2].count}>
                  <div id="textCount">{rank[2].count} 개</div>
                  <img src={planet2} alt="행성" id="P_planet2" />
                  <h5>{rank[2].space}</h5>
                </Planet2>
              ) : null}

              {rank[3] ? (
                <Planet3 count={rank[3].count}>
                  <div id="textCount">{rank[3].count} 개</div>
                  <img src={planet3} alt="행성" id="P_planet3" />
                  <h5>{rank[3].space}</h5>
                </Planet3>
              ) : null}

              {rank[4] ? (
                <Planet4 count={rank[4].count}>
                  <div id="textCount">{rank[4].count} 개</div>
                  <img src={planet4} alt="행성" id="P_planet4" />
                  <h5>{rank[4].space}</h5>
                </Planet4>
              ) : null}
            </div>
          </div>
        </StyledWrapper>
      );
    }
  }
}

const Earth = styled.div`
  #P_earth {
    width: ${props =>
      props.count > 3 ? (props.count > 6 ? "300px" : "200px") : "100px"};
  }

  display: inline-block;
  color: white;
  margin-left: 10px;
  margin-right: 10px;

  h5 {
    text-align: center;
    margin-top: 10px;
  }

  :hover {
    transform: scale(1.2);
  }
`;

const Planet1 = styled.div`
  #P_planet1 {
    width: ${props =>
      props.count > 3 ? (props.count > 6 ? "300px" : "200px") : "100px"};
  }

  display: inline-block;
  color: white;
  h5 {
    text-align: center;
    margin-top: 10px;
  }
  :hover {
    transform: scale(1.2);
  }
`;
const Planet2 = styled.div`
  #P_planet2 {
    width: ${props =>
      props.count > 3 ? (props.count > 6 ? "300px" : "200px") : "100px"};
  }

  display: inline-block;
  color: white;
  h5 {
    text-align: center;
    margin-top: 10px;
  }
  :hover {
    transform: scale(1.2);
  }
`;
const Planet3 = styled.div`
  #P_planet3 {
    width: ${props =>
      props.count > 3 ? (props.count > 6 ? "300px" : "200px") : "100px"};
  }

  display: inline-block;
  color: white;
  h5 {
    text-align: center;
    margin-top: 10px;
  }
  :hover {
    transform: scale(1.2);
  }
`;

const Planet4 = styled.div`
  #P_planet4 {
    width: ${props =>
      props.count > 3 ? (props.count > 6 ? "300px" : "200px") : "100px"};
  }

  display: inline-block;
  color: white;
  h5 {
    text-align: center;
    margin-top: 10px;
  }
  :hover {
    transform: scale(1.2);
  }
`;

const StyledWrapper = styled.div`
  #main {
    margin-top: 60px;
    margin-bottom: 40px;
    background: url("${space}");
    background-size: 100% 100%;
    width: 1300px;
    height: 510px;
  }
  #title {
    text-align: left;
    padding-top: 20px;
    margin-left: 30px;
    color: white;
    margin-bottom: 30px;
  }

  #space {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 400px;
  }
`;

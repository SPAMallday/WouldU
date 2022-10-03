import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import one from "assets/img/number/one.png"
import two from "assets/img/number/two.png"
import three from "assets/img/number/three.png"
import four from "assets/img/number/four.png"
import five from "assets/img/number/five.png"
import six from "assets/img/number/six.png"
import seven from "assets/img/number/seven.png"
import eight from "assets/img/number/eight.png"
import nine from "assets/img/number/nine.png"
import ten from "assets/img/number/ten.png"
import {
  likeRanking
} from "../../api/mainpageAPI";

export default function PopularWordCard() {
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    
    likeRanking().then(res => {
        console.log(res);
        setPopularList(res);
      })
  }, []);
  
  if (popularList && popularList.length === 10) {
    return (
      <StyledWrapper>
        <h2>실시간 좋아요 순위</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <img src={one} alt="one" />
                {popularList[0].alcohol_name}
              </td>
              <td>
                <img src={six} alt="six" />
                {popularList[5].alcohol_name}
              </td>
            </tr>
            <tr>
              <td>
                <img src={two} alt="two" />
                {popularList[1].alcohol_name}
              </td>
              <td>
                <img src={seven} alt="seven" />
                {popularList[6].alcohol_name}
              </td>
            </tr>
            <tr>
              <td>
                <img src={three} alt="three" />
                {popularList[2].alcohol_name}
              </td>
              <td>
                <img src={eight} alt="eight" />
                {popularList[7].alcohol_name}
              </td>
            </tr>
            <tr>
              <td>
                <img src={four} alt="four" />
                {popularList[3].alcohol_name}
              </td>
              <td>
                <img src={nine} alt="nine" />
                {popularList[8].alcohol_name}
              </td>
            </tr>
            <tr>
              <td>
                <img src={five} alt="five" />
                {popularList[4].alcohol_name}
              </td>
              <td>
                <img src={ten} alt="ten" />
                {popularList[9].alcohol_name}
              </td>
            </tr>
          </tbody>
        </table>
      </StyledWrapper>
    );    
  }
};

const StyledWrapper = styled.div`
  width: 40vw;
  height: 40vh;
  margin: 10px;
  padding: 10px;
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

  table {
    max-width: 600px;
  }
  tr {
    width: 600px;
    display: flex;
  }
  td {
    border: 2px solid #F09494;
    border-radius: 5px;
    padding: 5px 5px;
    margin: 5px 10px;
    width: 300px;
    display: flex;
    align-items: center;
    font-size: 18px;
    background-color: #ffd1d1;
  }

  img {
    width: 24px;
    margin-right: 7px;
  }
`;
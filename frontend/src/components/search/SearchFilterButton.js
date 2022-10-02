import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { search } from "../../api/searchAPI";

export default function SearchFilterButton(props) {
  const { buttonValue, buttonName, params, setParams, setSearchData } = props;
  const [selected, setSelected] = useState(false);
  const [filterKinds, setFilterKinds] = useState([]);
  const [temp, setTemp] = useState('aa');
  // {
  //   'name': '',
  //   'sort': 1,
  //   'row_index': 0,
  //   'alcol-type':[],
  // }


  const handleClick = (e) => {
    e.preventDefault();

    if (selected === false) {
      setSelected(true);

      const at = params.alcol_type + buttonValue + ','
      setParams(prevState => ({...prevState, 
        alcol_type: at
      }))
    }
    else {
      setSelected(false);

      const at = params.alcol_type.replace(buttonValue + ',', '')
      setParams(prevState => ({...prevState, 
        alcol_type: at
      }))
    }
  };
  

  return (
    <StyledWrapper>
      <div>
        <button
          id={selected === true ? "clicked" : "non-clicked"}
          type="button"
          onClick={handleClick}
        >
          {buttonName}
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #non-clicked {
    border: solid #b6e388;
    margin: 0px 10px;
    line-height: 2.3;
    padding: 0 15px;
    font-size: 20px;
    text-align: center;
    color: #000;
    border-radius: 10px;
    background-color: #e1ffb1;
    box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.6),
      inset -1px -1px 1px rgba(0, 0, 0, 0.6);
    font-family: "GD";
  }
  #non-clicked:hover {
    background-color: #c7f2a4;
  }
  #clicked {
    border: solid #b6e388;
    margin: 0px 10px;
    line-height: 2.3;
    padding: 0 15px;
    font-size: 20px;
    text-align: center;
    color: #000;
    border-radius: 10px;
    background-color: #b6e388;
    box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.6),
      inset -1px -1px 1px rgba(0, 0, 0, 0.6);
    font-family: "GD";
  }
`;
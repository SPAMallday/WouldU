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
    border: 0;
    margin: 10px;
    line-height: 2.5;
    padding: 0 20px;
    font-size: 1rem;
    text-align: center;
    color: #000;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: rgb(50, 200, 50);
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
      inset -2px -2px 3px rgba(0, 0, 0, 0.6);
  }
  #clicked {
    border: 0;
    margin: 10px;
    line-height: 2.5;
    padding: 0 20px;
    font-size: 1rem;
    text-align: center;
    color: #000;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: rgb(200, 50, 50);
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
      inset -2px -2px 3px rgba(0, 0, 0, 0.6);
  }
`;
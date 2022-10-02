import styled from "styled-components";
import * as React from "react";

export default function SearchFilterButton(props) {
  const { buttonName, filterKinds, setFilterKinds } = props;
  const [selected, setSelected] = React.useState(false);
  
  const handleClick = (n) => {
    if (selected === false) {
      n.preventDefault();
      setSelected(true);
      setFilterKinds([...filterKinds, buttonName]);
    }
    else {
      n.preventDefault();
      setSelected(false);
      filterKinds.splice(filterKinds.indexOf( buttonName ), 1);
      setFilterKinds([...filterKinds]);
    }
  };
  
  return (
    <StyledWrapper>
      <div>
        <button id={selected === true ? "clicked" : "non-clicked"} type="button" onClick={handleClick}>
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
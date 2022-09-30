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
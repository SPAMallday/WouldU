import styled from "styled-components";
import * as React from "react";
import testinput from "./testinput";
import Element from "./Element";
import { Link } from "react-router-dom";

export default function SearchResult(props) {
  const { searchQuery, filterKinds } = props;

  const filterName = testinput.filter(q => {
    return q.name.replace(" ","").toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase().replace(" ",""))
  });

  const filterNameAndKinds = (filterKinds.length === 0) ?
    filterName :
    filterName.filter(k => {
        return filterKinds.some(i => i.slice(0, 2) === k.type.slice(0, 2))
      });
  
  const listItems = filterNameAndKinds.map(e => (
    <Link to={"/detail/" + e.id} key={`detail + ${e.id}`}>
      <Element
        id={e.id}
        img_link={e.img_link}
        name={e.name}
        brewery={e.brewery}
        ingredients={e.ingredients}
        size={e.size}
        alcohol={e.alcohol}
        desc={e.desc}
        key={`${e.id}`}
      />
    </Link>
  ));

  return (
    <StyledWrapper>
      <div id="result">
        {listItems}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 800px;
  height: auto;
`;
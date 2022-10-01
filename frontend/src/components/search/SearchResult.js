import styled from "styled-components";
import * as React from "react";
import testinput from "./testinput";
import Element from "./Element";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

export default function SearchResult(props) {
  const { searchQuery, filterKinds } = props;
  // eslint-disable-next-line
  const [limit, setLimit] = React.useState(15);
  const [page, setPage] = React.useState(1);
  const offset = (page - 1) * limit;

  const filterName = testinput.filter(q => {
    return q.name.replace(" ","").toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase().replace(" ",""))
  });

  const filterNameAndKinds = (filterKinds.length === 0) ?
    filterName :
    filterName.filter(k => {
        return filterKinds.some(i => i.slice(0, 2) === k.type.slice(0, 2))
      });
  
  const listItems = filterNameAndKinds.slice(offset, offset + limit).map(e => (
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
    <>
      <StyledWrapper>
        <div id="result">{listItems}</div>
      </StyledWrapper>
        <Pagination
          total={filterNameAndKinds.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
    </>
  );
}

const StyledWrapper = styled.div`
  width: 1800px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  #result {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
  }
`;
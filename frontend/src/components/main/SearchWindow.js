import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SearchWindow() {
  const [searchQuery, setSearchQuery] = React.useState("");
  // const dataFiltered = filterData(searchQuery, data);

  const SearchBar = ({setSearchQuery}) => (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="전통주 검색"
        variant="outlined"
        size="small"
        sx={{ width: 700 }}
      />
      <Link to="search">
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "grey" }} />
        </IconButton>
      </Link>
    </form>
  );
  // const filterData = (query, data) => {
  //   if (!query) {
  //     return data;
  //   } else {
  //     return data.filter((d) => d.toLowerCase().includes(query));
  //   }
  // };
  return (
    <StyledWrapper>
      <div
        id="searchbar"
        style={{
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 10,
        }}
      >
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {/* <div style={{ padding: 3 }}>
          {dataFiltered.map((d) => (
            <div
              className="text"
              style={{
                padding: 5,
                justifyContent: "normal",
                fontSize: 20,
                color: "blue",
                margin: 1,
                width: "250px",
                BorderColor: "green",
                borderWidth: "10px"
              }}
              key={d.id}
            >
              {d}
            </div>
          ))}
        </div> */}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
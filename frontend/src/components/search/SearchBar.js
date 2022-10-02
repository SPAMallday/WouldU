import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";

export default function SearchBar(props) {
  const { setSearchQuery } = props;

  return (
    <Paper
      component="span"
      sx={{
        p: "2px",
        m: "20px",
        display: "flex",
        alignItems: "center",
        width: 800,
        height: 50,
        boxShadow: 2,
        border: 1,
        borderColor: "grey.600",
        backgroundColor: "#FCF8E8",
      }}
    >
      <InputBase
        component="span"
        sx={{ flex: 1, fontSize: 20, ml: 2, fontFamily: "GD" }}
        placeholder="전통주 검색"
        inputProps={{ "aria-label": "input" }}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <Divider component="span" sx={{ height: 28 }} orientation="vertical" />
      <IconButton
        component="span"
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
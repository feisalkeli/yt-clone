import { Paper, Icon, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
        flex: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={() => {}}
    >
      <input
        className="search-bar"
        placeholder="Search...."
        value=""
        onChange={() => {}}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red", marginLeft: "1" }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

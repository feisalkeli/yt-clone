import { Paper, Icon, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  }
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
        flex: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search...."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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

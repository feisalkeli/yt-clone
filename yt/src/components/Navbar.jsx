import React from "react";
import { Stack, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: "sticky", background: "#0000", top: 0 }}
    >
      {/* Logo aligned to the left */}
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>

      {/* Search bar centered horizontally */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ flex: 1 }}
      >
        <SearchBar />
      </Stack>
    </Stack>
  );
};

export default Navbar;

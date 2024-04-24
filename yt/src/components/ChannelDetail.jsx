/**
 * The ChannelDetail function is a React component that renders a div with the text "ChannelDetail".
 * @returns A `<div>` element with the text "ChannelDetail" inside is being returned.
 */
import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box } from "@mui/material";

import Videos from "./Videos";
import ChannelCard from "./ChannelCard";

import { fetchFromApi } from "../utils/fetchfromApi";

const ChannelDetail = () => {
  const { id } = useParams();

  useEffect(() => {}, [id]);
  return <Box sx={{ color: "white" }}>{id}</Box>;
};

export default ChannelDetail;

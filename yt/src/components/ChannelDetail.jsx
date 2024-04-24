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

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  console.log(channelDetail, videos);

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const channelResponse = await fetchFromApi(
          `channels?part=snippet&id=${id}`
        );
        const videoResponse = await fetchFromApi(
          `search?channelId=${id}&part=snippet&order=date`
        );
        setChannelDetail(channelResponse?.items[0]);
        setVideos(videoResponse?.items);
      } catch (error) {
        console.error("Error fetching channel data:", error);
      }
    };
    fetchChannelData();
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box
        style={{
          background:
            "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(14,88,176,1) 100%)",
          zIndex: 10,
          height: "300px",
        }}
      >
        <ChannelCard channelDetail={channelDetail} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;

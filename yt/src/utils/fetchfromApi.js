import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// Define default options for the API request
const defaultOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (endpoint, params) => {
  const options = {
    ...defaultOptions,
    url: `${BASE_URL}/${endpoint}`,
    params: {
      maxResults: "50",
    },
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from the API");
  }
};

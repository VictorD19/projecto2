import axios from "axios";
const baseUrl = process.env.REACT_APP_API;
const config = {
  method: "GET",
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_HOST,
    "x-rapidapi-key": process.env.REACT_APP_KEY,
  },
};

const getDataApi = async (endpoint) => {
  try {
    const { data } = await axios.get(`${baseUrl}/${endpoint}`, config);
    return data;
  } catch (error) {
    return error;
  }
};

const getDetailsGame = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/game`, {
      ...config,
      params: { id },
    });
    return data;
  } catch (error) {
    return error;
  }
};
const functions = {
    getGames: async () => await getDataApi("games"),
    getNews: async () => await getDataApi("latestnews"),
    getDetailsGame,
  };
export default functions

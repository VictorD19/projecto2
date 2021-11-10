import axios from "axios";
const baseUrl = "https://mmo-games.p.rapidapi.com";
const config = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "mmo-games.p.rapidapi.com",
    "x-rapidapi-key": "80d8a24185msh4e11ba47f426b7dp1fbc1fjsne51908dec1ea",
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

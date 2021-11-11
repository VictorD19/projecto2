import { createContext, useContext, useEffect, useState } from "react";
import RapidApi from "../Database";

const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [listGames, setListGames] = useState([]);

  useEffect(() => {
    (async () => {
      const games = await RapidApi.getGames();
      setListGames(games)
        })();
  }, []);

  return (
    <GamesContext.Provider value={{ listGames, setListGames }}>
      {children}
    </GamesContext.Provider>
  );
};

export const useGameData = () => {
  const { listGames, setListGames } = useContext(GamesContext);
  return {
    listGames,
    setListGames,
  };
};

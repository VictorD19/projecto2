import { createContext, useContext, useState } from "react";

const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState('')
  
  // useEffect(() => {
  //   (async () => {
  //     const games = await RapidApi.getGames();
  //     setListGames(games)
  //       })();
  // }, []);
  // listGames, setListGames,
  return (
    <GamesContext.Provider value={{ searchParam,setSearchParam }}>
      {children}
    </GamesContext.Provider>
  );
};

export const useGameData = () => {
  const { searchParam,setSearchParam  } = useContext(GamesContext);
  return {

    searchParam,setSearchParam 
  };
};

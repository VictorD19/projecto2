import { createContext, useContext, useState } from "react";

const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");


  const getNewList = (lista, param, setFuntion) => {
    let tempList = [...lista];
    if (param.paramSearch) {
      tempList = lista.filter(({ title }) =>
        title.toLowerCase().includes(param.paramSearch.toLowerCase())
      );
    }
    setFuntion(tempList);
  };

  return (
    <GamesContext.Provider value={{ searchParam, setSearchParam, getNewList }}>
      {children}
    </GamesContext.Provider>
  );
};

export const useGameData = () => {
  const { searchParam, setSearchParam, getNewList } = useContext(GamesContext);
  return {
    getNewList,
    searchParam,
    setSearchParam,
  };
};

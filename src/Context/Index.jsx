import { createContext, useContext, useEffect, useState } from "react";
import RapidApi from "../Database";

const GamesContext = createContext();

// Cria lista com os parametro de busqueda
const getNewList = (lista, param, setFuntion) => {
  let tempList = [...lista];
  if (param.paramSearch) {
    tempList = lista.filter(({ title }) =>
      title.toLowerCase().includes(param.paramSearch.toLowerCase()) 
      // || description.toLowerCase().includes(param.paramSearch.toLowerCase()) 
    );
  }
  setFuntion(tempList);
};

const getListRow = (lista)=>{
  const listRow = []
  for (let i = 0; i < 4; i++) {
    let randomItem = Math.floor(Math.random() * (lista.length - 1));
    let item = lista[randomItem]
    listRow.push(item)
  }
  return listRow
}

export const GamesProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [listGame, setListGame] = useState([]);
  const [notices, setNotices] = useState([]);
  const [featuredGame, setFeatureGame]= useState(null)


  // Lista de games
  useEffect(() => {
    (async () => {
      const games = await RapidApi.getGames();
      setListGame(games);
      getNewList(games, searchParam, setListGame);

      // Selecion de um jogo aleatorio
      const randomGame = Math.floor(Math.random() * (games.length - 1));
      const game = games[randomGame]
      setFeatureGame(game)
     
    })();
  }, [searchParam]);

  // Lista de noticias
  useEffect(() => {
    (async () => {
      const news = await RapidApi.getNews();
      setNotices(news);
      getNewList(news, searchParam, setNotices);}
    )();
  }, [searchParam]);

  return (
    <GamesContext.Provider
      value={{ searchParam, setSearchParam, getNewList, listGame, notices,featuredGame,getListRow}}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGameData = () => {
  const { searchParam, setSearchParam, getNewList, listGame, notices, featuredGame,getListRow} =
    useContext(GamesContext);
  return { notices, listGame, getNewList, searchParam, setSearchParam, featuredGame,getListRow}
};

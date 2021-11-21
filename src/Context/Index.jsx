import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import RapidApi from "../Database";

const GamesContext = createContext();

const initialState = {
  games: [],
  news: [],
  searchParam: "",
  featuredGame: null,
  listResultGames: [],
  listResultNews: [],
  listRows: {},
};

// Cria lista com os parametro de busqueda

const getListRow = (lista) => {
  const listRow = [];
  for (let i = 0; i < 4; i++) {
    let randomItem = Math.floor(Math.random() * (lista.length - 1));
    let item = lista[randomItem];
    listRow.push(item);
  }
  return listRow;
};
const reducer = (state, action) => {
  switch (action.method) {
    case "SetListGames":
      return { ...state, games: action.value };
    case "SetListNews":
      return { ...state, news: action.value };
    case "FeaturedGame":
      return { ...state, featuredGame: action.value };
    case "GetParamSearch":
      return { ...state, searchParam: action.value };
    case "GetListResultGames":
      return { ...state, listResultGames: action.value };
    case "GetListResultNews":
      return { ...state, listResultNews: action.value };
    case "SetListRow":
      return { ...state, listRows: action.value };
    default:
      return initialState;
  }
};

export const GamesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const getNewList = (lista, param,type) => {
    const method = type ==='games' ? "GetListResultGames" : 'GetListResultNews'
    let tempList = [];
    if (param.paramSearch) {
      tempList = lista.filter(
        ({ title,short_description }) =>
          title.toLowerCase().includes(param.paramSearch.toLowerCase()) || short_description.toLowerCase().includes(param.paramSearch.toLowerCase())
        // || 
      );
    }
    dispatch({ method, value: tempList });
  };

  useEffect(() => {
    (async () => {

      const games = await RapidApi.getGames();
      dispatch({ method: "SetListGames", value: games });
      
      getNewList(games, state.searchParam,'games');

      const randomGame = Math.floor(Math.random() * (games.length - 1));
      const game = games[randomGame];
      dispatch({ method: "FeaturedGame", value: game });
    })();
  }, [state.searchParam]);

 

  useEffect(() => {
    (async () => {
      const news = await RapidApi.getNews();
      dispatch({ method: "SetListNews", value: news });
      getNewList(news, state.searchParam,'news');
    })();
  }, [state.searchParam]);

  return (
    <GamesContext.Provider
      value={{
        getListRow,
        state,
        dispatch,
        getNewList
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGameData = () => {
  const {
    getListRow,
    state,
    dispatch,
    getNewList
  } = useContext(GamesContext);
  return {
    getListRow,
    getNewList,
    state,
    dispatch,
  };
};

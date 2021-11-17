import { memo, useEffect, useState } from "react";
import { CardGames } from "../../Components/CardGame";
import { Container } from "../../Components/Container";
import InputSearch from "../../Components/InputSearch";
import { useGameData } from "../../Context/Index";
import { SectionStyled, TitleStyle } from "./Home.style";
import RapidApi from "../../Database";
import {
  LoadingContainerStyled,
  LoadingStyled,
} from "../DetailsGame/Details.style";
import Loading from "../../Assets/loading.svg";

const Home = () => {
  const [listGames, setListGames] = useState([]);
  const { searchParam, getNewList } = useGameData();

  useEffect(() => {
    (async () => {
      const games = await RapidApi.getGames();
      setListGames(games);
      getNewList(games, searchParam, setListGames);
    })();
  }, [searchParam, getNewList]);

  return (
    <Container>
      <InputSearch page="games" />
      <TitleStyle>Total de Jogos ({listGames.length})</TitleStyle>

      {listGames.length <= 0 && (
        <LoadingContainerStyled>
          <LoadingStyled src={Loading} alt="" />
          <h1>Carregando lista de jogo...</h1>
        </LoadingContainerStyled>
      )}

      {listGames.length > 0 && (
        <SectionStyled>
          {listGames.map((game) => (
            <CardGames
              key={game.id}
              id={game.id}
              title={game.title}
              image={game.thumbnail}
              description={game.short_description}
              platform={game.platform}
            />
          ))}
        </SectionStyled>
      )}
    </Container>
  );
};

export default memo(Home);

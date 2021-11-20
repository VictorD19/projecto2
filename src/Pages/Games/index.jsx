import { memo } from "react";
import { CardGames } from "../../Components/CardGame";
import { Container } from "../../Components/Container";
import InputSearch from "../../Components/InputSearch";
import { useGameData } from "../../Context/Index";
import { SectionStyled, TitleStyle } from "./Games.style";

import {
  LoadingContainerStyled,
  LoadingStyled,
} from "../DetailsGame/Details.style";
import Loading from "../../Assets/loading.svg";

const Home = () => {
  const { searchParam, listGame } = useGameData();

  return (
    <Container>
      <InputSearch page="games" />
      <TitleStyle>
        {searchParam.paramSearch !== ""
          ? `Resultado para "${searchParam.paramSearch}"`
          : "Total de Jogos"}{" "}
        ( {listGame.length} )
      </TitleStyle>

      {listGame.length <= 0 && (
        <LoadingContainerStyled>
          <LoadingStyled src={Loading} alt="" />
          <h1>Carregando lista de jogo...</h1>
        </LoadingContainerStyled>
      )}

      {listGame.length > 0 && (
        <SectionStyled>
          {listGame.map((game) => (
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

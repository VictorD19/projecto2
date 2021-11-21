
import { CardGames } from "../../Components/CardGame";
import { Container } from "../../Components/Container";
import InputSearch from "../../Components/InputSearch";
import { useGameData } from "../../Context/Index";
import { SectionStyled, TitleStyle } from "./Games.style";

import { LoaderCardGame } from "../../Components/Loaders";

const GamesPage = () => {
  const { state ,getNewList} = useGameData();
  const {games,listResultGames,searchParam} = state
  const list = new Array(10)

  const listgames = listResultGames.length !== 0 ? listResultGames : games


  return (
    <Container>
      <InputSearch page="games" />
      <TitleStyle>
        {searchParam.paramSearch !== ""
          ? `Resultado para "${searchParam.paramSearch}" ( ${listResultGames.length} )`
          : `Total de Jogos ( ${games.length} ) ` }
      
      </TitleStyle>

      {listResultGames.length <= 0 && 
         <div >
           {list.map((item,i) => <LoaderCardGame key={i}/>)}
         </div>
    
      }

      {listgames.length > 0 && (
        <SectionStyled>
          {listgames.map((game,i) => (
            <CardGames
              key={i}
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

export default GamesPage;

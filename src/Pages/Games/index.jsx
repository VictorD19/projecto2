import { memo } from "react";
import { CardGames } from "../../Components/CardGame";
import { Container } from "../../Components/Container";
import InputSearch from "../../Components/InputSearch";
import { useGameData } from "../../Context/Index";
import { SectionStyled, TitleStyle } from "./Games.style";

import { LoaderCardGame } from "../../Components/Loaders";

const Home = () => {
  const { searchParam, listGame } = useGameData();
  const list = [<LoaderCardGame/>,<LoaderCardGame/>,<LoaderCardGame/>,<LoaderCardGame/>,<LoaderCardGame/>,<LoaderCardGame/>,<LoaderCardGame/>,<LoaderCardGame/>]
 


  return (
    <Container>
      <InputSearch page="games" />
      <TitleStyle>
        {searchParam.paramSearch !== ""
          ? `Resultado para "${searchParam.paramSearch}"`
          : "Total de Jogos"}
        ( {listGame.length} )
      </TitleStyle>

      {listGame.length <= 0 && 
         <div >
           {list.map(item => item)}
         </div>
    
      }

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

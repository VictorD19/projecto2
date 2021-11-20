import { useEffect, useState } from "react";
import { Container } from "../../Components/Container";
import { FeaturedGame } from "../../Components/FeaturedGame";
import { RowList } from "../../Components/RowList";
import { RowItem } from "../../Components/RowList/RowItem";
import { useGameData } from "../../Context/Index";

export const Home = () => {
  const [listRow, setListRow] = useState(null);
  const { listGame, notices, getListRow } = useGameData();

  useEffect(() => {
    if (listGame && notices) {
      const news = getListRow(notices);
      const games = getListRow(listGame);
      setListRow({ news, games })
    }
  }, [listGame, notices, getListRow]);
  console.log(listRow);
  return (
    // recebo os daods poren um poco atrasado
    <Container>
      <FeaturedGame />
      {listRow && listRow.games[0] && listRow.news[0] && 
      <>
      <RowList title='Jogos em Destaques' to='games'>
                {listRow.games.map(game=><RowItem key={game.id} img={game.thumbnail} title={game.title}/> )}
      </RowList>
      <RowList title='Noticias em Destaques' to='news'>
      {listRow.news.map((notice,i) => <RowItem key={i} img={notice.main_image} title={notice.title}/> )}
      </RowList>
            
      </>
            }
    </Container>
  );
};

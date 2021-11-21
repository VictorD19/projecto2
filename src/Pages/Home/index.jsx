import { useEffect, useState } from "react";
import { CardNotice } from "../../Components/CardNotice";
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
  return (
    // recebo os daods poren um poco atrasado
    <Container>
      <FeaturedGame />
      {listRow && listRow.games[0] && listRow.news[0] && 
      <>
      <RowList title='Jogos em Destaques' to='games'>
                {listRow.games.map(game=><RowItem key={game.id} img={game.thumbnail} title={game.title} id={game.id}/> )}
      </RowList>
      <RowList title='Noticias em Destaques' to='news' direction='column'>
      {listRow.news.map((notice,i) => <CardNotice key={notice.id}
            title={notice.title}
            image={notice.main_image}
            url={notice.article_url}
            description={notice.short_description}/> )}
      </RowList>
            
      </>
            }
    </Container>
  );
};

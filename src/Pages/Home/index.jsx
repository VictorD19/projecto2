import { useEffect} from "react";
import { CardNotice } from "../../Components/CardNotice";
import { Container } from "../../Components/Container";
import { FeaturedGame } from "../../Components/FeaturedGame";
import { RowList } from "../../Components/RowList";
import { RowItem } from "../../Components/RowList/RowItem";
import { useGameData } from "../../Context/Index";

export const Home = () => {
  const { state, getListRow, dispatch } = useGameData();
  const { games, listRows, news } = state;
  const view = "newsList" in listRows || "gamesList" in listRows

  useEffect(() => {   
   
      const newsList = getListRow(news);
      const gamesList = getListRow(games);
      if (newsList[0] && gamesList[0]) {
        dispatch({ method: "SetListRow", value: { newsList, gamesList } });
      }

  }, [games,news, getListRow,dispatch ]);

  return (
    <Container>
      <FeaturedGame />
      {view && (
        <>
          <RowList title="Jogos em Destaques" to="games">
            {
              listRows.gamesList.map((game) => (
                <RowItem
                  key={game.id}
                  img={game.thumbnail}
                  title={game.title}
                  id={game.id}
                />
              ))}
          </RowList>
          <RowList title="Noticias em Destaques" to="news" direction="column">
            {
              listRows.newsList.map((notice,i ) => (
                <CardNotice
                  key={i}
                  title={notice.title}
                  image={notice.main_image}
                  url={notice.article_url}
                  description={notice.short_description}
                />
              ))}
          </RowList>
        </>
      )}
    </Container>
  );
};

import { useEffect, useState } from "react";

import RapidApi from "../../Database";
import { TitleStyle } from "../Home/Home.style";
import { SectionNoticesStyled } from "./Notice.style";

import { CardNotice } from "../../Components/CardNotice";
import { Container } from "../../Components/Container";
import  InputSearch  from "../../Components/InputSearch";
import { useGameData } from "../../Context/Index";
import { LoadingContainerStyled, LoadingStyled } from "../DetailsGame/Details.style";
import Loading from '../../Assets/loading.svg'

export const News = () => {
  const [notices, setNotices] = useState([]);
  const {searchParam, getNewList} = useGameData()
 console.log(searchParam);

  useEffect(() => {
    (async () => {
      const news = await RapidApi.getNews();
      console.log(news);
      setNotices(news);
      getNewList(news,searchParam,setNotices)

    })();
  }, [searchParam,getNewList]);

  return (
    <Container>
      <InputSearch />
      <TitleStyle>Todas as notícias </TitleStyle>
      <SectionNoticesStyled>
      {notices.length <= 0 && <LoadingContainerStyled>
          <LoadingStyled src={Loading} alt="" />
          <h1>Carregando noticias...</h1>
        </LoadingContainerStyled>}
        {notices.map((notice) => (
          <CardNotice
          key={notice.id}
            title={notice.title}
            image={notice.main_image}
            url={notice.article_url}
            description={notice.short_description}
          />
        ))}

      
      </SectionNoticesStyled>
    </Container>
  );
};

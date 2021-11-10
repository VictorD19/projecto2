import { useEffect, useState } from "react";

import RapidApi from "../../Database";
import { TitleStyle } from "../Home/Home.style";
import { SectionNoticesStyled } from "./Notice.style";

import { CardNotice } from "../../Components/CardNotice";
import { Container } from "../../Components/Container";
import { InputSearch } from "../../Components/InputSearch";

export const News = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    (async () => {
      const news = await RapidApi.getNews();
      setNotices(news);
      console.log(news);
    })();
  }, []);
  return (
    <Container>
      <InputSearch />
      <TitleStyle>Todas as notícias </TitleStyle>
      <SectionNoticesStyled>
        {notices.map((notice) => (
          <CardNotice
          key={notice.id}
            title={notice.title}
            image={notice.main_image}
            url={notice.article_url}
            description={notice.short_description}
          />
        ))}

        <CardNotice />
        <CardNotice />
      </SectionNoticesStyled>
    </Container>
  );
};

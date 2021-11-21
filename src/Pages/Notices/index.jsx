import { TitleStyle } from "../Games/Games.style";
import { SectionNoticesStyled } from "./Notice.style";

import { CardNotice } from "../../Components/CardNotice";
import { Container } from "../../Components/Container";
import  InputSearch  from "../../Components/InputSearch";
import { useGameData } from "../../Context/Index";
import { Not_Results } from "../../Components/Not_Result/Index";

export const News = () => {
  const {state} = useGameData()
const {listResultNews,searchParam } = state

  return (
    <Container>
      <InputSearch />
      <TitleStyle>{searchParam.paramSearch !== '' ? `Resultado para "${searchParam.paramSearch}" ( ${listResultNews.length} )`:'Todas as notícias'  } </TitleStyle>
      <SectionNoticesStyled>
      {listResultNews.length <= 0 ? <Not_Results/> : listResultNews.map((notice) => (
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

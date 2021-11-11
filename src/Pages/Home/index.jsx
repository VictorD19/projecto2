import { CardGames } from "../../Components/CardGame"
import { Container } from "../../Components/Container"
import { InputSearch } from "../../Components/InputSearch"
import { useGameData } from "../../Context/Index"
import { SectionStyled, TitleStyle } from "./Home.style"

export const Home = ()=>{
   const {listGames} = useGameData()
    return <Container>
        <InputSearch/>
        <TitleStyle>Total de Jogos ({listGames.length})</TitleStyle>
        <SectionStyled>
            {listGames.map(game => <CardGames key={game.id} id title={game.title} image={game.thumbnail} description={game.short_description} platform={game.platform}/> )}
        
        </SectionStyled>
    </Container>
}
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"

import Loading from '../../Assets/loading.svg'
import { Container } from "../../Components/Container";
import RapidApi from "../../Database"
import { ContainerImgStyles, LoadingContainerStyled, LoadingStyled, MainImgStyled } from "./Details.style";


export const DetailsGame = ()=>{
    const { gameId } = useParams()
    const navegate  = useNavigate()
    const [gameDetails, setGameDetails] = useState(null)
    console.log(gameDetails);
    

    useEffect(() => {
        (async ()=>{
            const details = await RapidApi.getDetailsGame(gameId)
       
            setGameDetails(details)
        })()
        
    }, [])


    return(  <Container >
        { gameDetails === null && <LoadingContainerStyled>
            <LoadingStyled src={Loading} alt="" />
            <h1>Carregando detalhes do jogo...</h1>
            </LoadingContainerStyled>  }
        {gameDetails && 
        <>
        <h1>{gameDetails.title}</h1>
        <ContainerImgStyles>
        <MainImgStyled src={gameDetails.thumbnail} alt="" />
        </ContainerImgStyles>
        <div>
            <div>
                Generos : {gameDetails.genre}
            </div>
            <div>
                Paginas : {gameDetails.platform}
            </div>
        </div>
        {/* sustituir valore fda descripção */}
        {/* { gameDetails.description} */}
        <p style={{textAlign: 'justify'}}>

    <strong>World of Tanks</strong> is a team-based free MMO action game exclusively focused on the armored warfare in the mid-20th century. Created by the strategy masterminds at Wargaming.net, this is a shooter with a lot of tactical elements to be taken into consideration. Choose your tanks and enter epic battles!</p> 
        </>
        }

        <div>
            <h1>Requisitsos do sistema</h1>
             So: {gameDetails.minimum_system_requirements.os} \n
            procesador: {gameDetails.minimum_system_requirements.processor},
            memory:  {gameDetails.minimum_system_requirements.memory}
            graficons: {gameDetails.minimum_system_requirements.graphics }    ,
            disco: {gameDetails.minimum_system_requirements.storage }     </div>
    </Container>)
}
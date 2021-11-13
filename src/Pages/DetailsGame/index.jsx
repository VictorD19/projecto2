import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Loading from "../../Assets/loading.svg";
import { Container } from "../../Components/Container";
import RapidApi from "../../Database";
import {
  ContainerImgStyles,
  DescripionStyled,
  DivStyled,
  LoadingContainerStyled,
  LoadingStyled,
  MainImgStyled,
  RequerimentSystemStyled,
} from "./Details.style";

export const DetailsGame = () => {
  const { gameId } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    (async () => {
      const details = await RapidApi.getDetailsGame(gameId);
      console.log(details);
      setGameDetails(details);
    })();
  }, []);

  return (
    <Container>
      {gameDetails === null && (
        <LoadingContainerStyled>
          <LoadingStyled src={Loading} alt="" />
          <h1>Carregando detalhes do jogo...</h1>
        </LoadingContainerStyled>
      )}
      {gameDetails && (
        <>
          <h1>{gameDetails.title}</h1>
          <ContainerImgStyles>
            <MainImgStyled src={gameDetails.thumbnail} alt="" />
          </ContainerImgStyles>
          <DivStyled>
            <div>
              <h3> Generos</h3>
              <span>{gameDetails.genre}</span>
            </div>
            <div>
              <h3>Plataforma</h3>
              <span> {gameDetails.platform}</span>
            </div>
          </DivStyled>
          <DescripionStyled>
            <h3>Descripção</h3>
            {gameDetails.short_description}
          </DescripionStyled>
          

          <RequerimentSystemStyled>
            <h3>Requisitos do sistema</h3>
            <b> Sistema Operacional: </b>
            {gameDetails.minimum_system_requirements.os !== undefined
              ? gameDetails.minimum_system_requirements.os
              : "windows2"}
            <br />
            <b>procesador: </b>
            {gameDetails.minimum_system_requirements.processor}
            <br />
            <b> memory: </b>  {gameDetails.minimum_system_requirements.memory}
            <br />
            <b>graficons: </b> {gameDetails.minimum_system_requirements.graphics} <br />
            <b>disco: </b> {gameDetails.minimum_system_requirements.storage}
          </RequerimentSystemStyled>
        </>
      )}
    </Container>
  );
};

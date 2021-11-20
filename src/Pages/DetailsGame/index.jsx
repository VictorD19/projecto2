import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Loading from "../../Assets/loading.svg";
import RapidApi from "../../Database";

import { Container } from "../../Components/Container";

import {
  DescripionStyled,
  DivStyled,
  ListRequeriment,
  LoadingContainerStyled,
  LoadingStyled,
  RequerimentSystemStyled,
  SubTitle,
  Title,
} from "./Details.style";
import { getCommentarys } from "./funtions";
import { Commentary, SectionComentarys } from "../../Components/Comentary";
import { Slider } from "../../Components/Slider";
import { FormAddComentary } from "../../Components/FormAddComentary";

export const DetailsGame = () => {
  const [listComentarys, setListComentarys] = useState([]);
  const { gameId } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  // const [ano,mes,dia] =

  // {`(${dia}/${mes}/${ano})`}
  useEffect(() => {
    (async () => {
      const details = await RapidApi.getDetailsGame(gameId);
      const [ano, mes, dia] = details.release_date.split("-");
      details.release_date = `${dia}/${mes}/${ano}`;
      setGameDetails(details);
      const listComentary = getCommentarys(details.id);
      setListComentarys(listComentary);
    })();
  }, [gameId]);

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
          <Title>
            {gameDetails.title} {`(${gameDetails.release_date})`}{" "}
          </Title>
          <Slider
            list={[
              { id: gameDetails.id, image: gameDetails.thumbnail },
              ...gameDetails.screenshots,
            ]}
          />
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

          {gameDetails.minimum_system_requirements && (
            <RequerimentSystemStyled>
              <h3>Requisitos do sistema</h3>
              <ListRequeriment>
                <li>
                  <b> Sistema Operacional: </b>
                  {gameDetails.minimum_system_requirements.os !== undefined
                    ? gameDetails.minimum_system_requirements.os
                    : "windows2"}
                </li>
                <li>
                  <b>Processador: </b>
                  {gameDetails.minimum_system_requirements.processor}
                  <br />
                </li>
                <li>
                  <b>Memória: </b>{" "}
                  {gameDetails.minimum_system_requirements.memory}
                </li>
                <li>
                  <b>Gráficos: </b>{" "}
                  {gameDetails.minimum_system_requirements.graphics}
                </li>
                <li>
                  <b>Espaço em disco: </b>{" "}
                  {gameDetails.minimum_system_requirements.storage}
                </li>
              </ListRequeriment>
            </RequerimentSystemStyled>
          )}

          {/* Fomulario */}
          <SubTitle>Adicionar Comentario</SubTitle>
          <FormAddComentary id={gameDetails.id} setList ={setListComentarys}/>

          <SubTitle>Comentarios</SubTitle>
          <SectionComentarys>
            {listComentarys.map((comentary, i) => (
              <Commentary
                key={i}
                list={listComentarys}
                commentaryData={comentary}
              />
            ))}
          </SectionComentarys>
        </>
      )}
    </Container>
  );
};


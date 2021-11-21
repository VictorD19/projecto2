import {
  CardStyled,
  DecriptionContainer,
  HeaderDescriptionStyled,
  LinkStyled,
  TextDescription,
} from "./CardGame.style";

export const CardGames = ({title,image,description,platform,id}) => {

  
    let [value1,value2] = platform ? platform.split(' ').filter(type=> type === 'Web' || type === 'PC') : ''
    const plataforma = value2 ? `${value1} / ${value2}` : value1
 
  return (
    <CardStyled>
      <img
        src={image}
        alt={`img do jogo${title}`}
      />
      <DecriptionContainer>
        <HeaderDescriptionStyled>
          <h3>{title}</h3>  <span>{plataforma}</span> 
        </HeaderDescriptionStyled>
        <TextDescription>
         {description}
        </TextDescription>
        <LinkStyled to={`/game/${id}`}>Ver Mais</LinkStyled>
      </DecriptionContainer>
    </CardStyled>
  );
};

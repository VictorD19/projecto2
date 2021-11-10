import { ButtonOutline } from "../Button";
import {
  CardStyled,
  DecriptionContainer,
  HeaderDescriptionStyled,
  TextDescription,
} from "./CardGame.style";

export const CardGames = ({title,image,description,platform}) => {

  let plataforma = platform.split(' ').filter(type=> type === 'Web' || type === 'PC'
    )
  return (
    <CardStyled>
      <img
        src={image}
        alt={`img do jogo${title}`}
      />
      <DecriptionContainer>
        <HeaderDescriptionStyled>
          <h3>{title}</h3>  <span>{plataforma.join(' / ')}</span> 
        </HeaderDescriptionStyled>
        <TextDescription>
         {description}
        </TextDescription>
        <ButtonOutline>Ver Mais</ButtonOutline>
      </DecriptionContainer>
    </CardStyled>
  );
};

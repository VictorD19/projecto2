import { useGameData } from "../../Context/Index";
import { BackgroundDegrade, Description, DescriptionFeatured, DetailsFeatured, FeaturedContainer, TitleFeatured, ToDetails } from "./Feature.style";

export const FeaturedGame = () => {
  const { featuredGame } = useGameData();
    if(featuredGame){
      if ('short_description' in featuredGame) {
        featuredGame.short_description = featuredGame.short_description.substring(0,150) + '...'
      }
    }
 
  return (
    <>
      {featuredGame && (
        <FeaturedContainer background={featuredGame.thumbnail}>
          <BackgroundDegrade>
            <TitleFeatured>{featuredGame.title}</TitleFeatured>

            <DescriptionFeatured>
              <DetailsFeatured>
                <h3>Desenvolvedor <br /> <small>
                  {featuredGame.developer} 
                  </small> </h3>
                <h3>Genero <br /> <small> {featuredGame.genre} </small>  </h3>
                <h3>Plataforma  <br /><small> {featuredGame.platform} </small></h3>
              </DetailsFeatured>
              <Description>{featuredGame.short_description}</Description>
              <ToDetails to={`game/${featuredGame.id}`}>Ver mas...</ToDetails>
            </DescriptionFeatured>
          </BackgroundDegrade>
        </FeaturedContainer>
      )}
    </>
  );
};

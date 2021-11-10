import { CardNoticeStyled, DescriptionCard, LinkStyled } from "./CardNotice.style";

export const CardNotice = ({ image, title, url, description }) => {
  return (
    <CardNoticeStyled>
      <img src={image} alt="" />
      <DescriptionCard>
        <h1>{title}</h1>
        <p>
          {description}
        </p>
        <LinkStyled href={url} target="_blank">
          Ir a notícia oficial
        </LinkStyled>
      </DescriptionCard>
    </CardNoticeStyled>
  );
};

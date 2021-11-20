import { useState } from "react";
import { setListLocalStorage } from "../../Pages/DetailsGame/funtions";


import {
  ComentaryStyled,
  DetailsStyled,
  DisLikeButtom,
  LikeButtom,
  PointsStyled,
} from "./Commentary.style";

export const Commentary = ({ commentaryData, list }) => {
  const [point, setPoint] = useState(commentaryData.points);

  const index = list.indexOf(commentaryData);
  const [commentary] = list.filter(
    (value) => value.idCommentary === commentaryData.idCommentary
  );
  const tempList = [...list];

  const upPoint = () => {
    setPoint(point + 1);
    commentary.points++;
    tempList[index] = commentary;
    setListLocalStorage(tempList);
  };
  const downPoint = () => {
    setPoint(point - 1);
    commentary.points--;
    tempList[index] = commentary;
    setListLocalStorage(tempList);
  };

  return (
    <ComentaryStyled>
      <DetailsStyled>
        <h4>{commentaryData.name}</h4>
        <p>{commentaryData.comentario}</p>
      </DetailsStyled>

      <PointsStyled value={point}>
        <DisLikeButtom onClick={downPoint}>-</DisLikeButtom>
        <span>

        {point === 0 ? point : point > 0 ? `+${point}` : point}
        </span>
        <LikeButtom onClick={upPoint}>+</LikeButtom>
      </PointsStyled>
    </ComentaryStyled>
  );
};

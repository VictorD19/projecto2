import { useState } from "react";
import { setListLocalStorage } from "../../Pages/DetailsGame/funtions";

import {
  ButtonPlus,
  ComentaryStyled,
  DetailsStyled,
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
        <ButtonPlus onClick={downPoint}>-</ButtonPlus>
        <span>

        {point === 0 ? point : point > 0 ? `+${point}` : point}
        </span>
        <ButtonPlus onClick={upPoint}>+</ButtonPlus>
      </PointsStyled>
    </ComentaryStyled>
  );
};

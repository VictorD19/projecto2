import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import {
  ArrowBack,
  ArrowNext,
  ContainerImgPrevious,
  ContainerImgStyles,
  ItemContainer,
  MainContainerSlider,
  MainImgStyled,
} from "./Slider.style";

export const Slider = ({ list }) => {
  const [img, setImg] = useState(list[0]);
  let index = list.indexOf(img);
  const lengthList = list.length;

  const nextImg = () => {
    if (index === -1) setImg(list[index + 2]);
    if (index !== -1 && index < lengthList) setImg(list[index + 1]);
    if (index === lengthList - 1) setImg(list[0]);
  };
  const backImg = () => {
    if (index === -1) index = 0;
    if (index === -1 || index === 0) setImg(list[lengthList - 1]);
    if (index !== 0 && index < lengthList) setImg(list[index - 1]);
  };

  return (
    <MainContainerSlider>
      <ContainerImgStyles>
        <ArrowBack onClick={backImg}>
          <BiLeftArrow />
        </ArrowBack>
        <ArrowNext onClick={nextImg}>
          <BiRightArrow />
        </ArrowNext>
        <MainImgStyled key={img.id} src={img.image} alt="" />
      </ContainerImgStyles>
      <ContainerImgPrevious>
        {list.map((item, i) => (
          <ItemContainer key={item.id}>
            <img src={item.image} alt="" onClick={() => setImg(list[i])} />
          </ItemContainer>
        ))}
      </ContainerImgPrevious>
    </MainContainerSlider>
  );
};

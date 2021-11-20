import {
  ContainerImgPrevious,
  ContainerImgStyles,
  ItemContainer,
  MainContainerSlider,
  MainImgStyled,
} from "./Slider.style";
import { useState } from "react";
export const Slider = ({ list }) => {
  const [img, setImg] = useState(list[0]);

  return (
    <MainContainerSlider>
      <ContainerImgStyles>
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

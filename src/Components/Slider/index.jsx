import {
  Arrow,
  ArrowNext,
  ContainerImgStyles,
  MainContainerSlider,
  MainImgStyled,
} from "./Slider.style";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,

} from "react-icons/bs";
import { useState } from "react";

export const Slider = ({ list }) => {
  const [img, setImg] = useState(list[0]);
  const index = list.indexOf(img);
 

  const backImg = () => {
    if (index > 0) {
      setImg(list[index - 1]);
    }
    if (index === 0) setImg(list[0]);
  };
  const netImg = ()=>{
    if (index < list.length - 1)  setImg(list[index+1]);
    if (index === list.length - 1) setImg(list[0])
  }
  return (
    <MainContainerSlider>
      <ArrowNext onClick={netImg}>
        <BsArrowRightCircleFill />
      </ArrowNext>
      <Arrow onClick={backImg}>
        <BsArrowLeftCircleFill />
      </Arrow>

      <ContainerImgStyles>
        <MainImgStyled key={img.id} src={img.image} alt="" />
      </ContainerImgStyles>
    </MainContainerSlider>
  );
};

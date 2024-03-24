import { useSwiper } from 'swiper/react';
import { Btn, WrapBtn } from './SliderBtn.styled';

export const SliderBtn = () => {
  const swiper = useSwiper();
  return (
    <WrapBtn>
      <Btn onClick={() => swiper.slideNext()}>Next</Btn>
      <Btn onClick={() => swiper.slidePrev()}>Prev</Btn>
    </WrapBtn>
  );
};

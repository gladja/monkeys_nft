import { Section } from '../Section';
import { Title } from '../Title';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderBtn } from '../MindMap/SliderBtn';
import 'swiper/css';

import { img } from './images';
import { Img, WrapSlider } from './Collection.styled';

export const Collection = ({ width }) => {
  const imageValue = () => {
    if (width < 768) {
      return 1;
    }
    if (width > 768 && width < 1280) {
      return 2;
    }
    if (width > 1280) {
      return 4;
    }
  };

  console.log(imageValue());

  return (
    <Section>
      <Title text="Collection" />
      <WrapSlider>
        <Swiper
          spaceBetween={24}
          slidesPerView={imageValue()}
          slideToClickedSlide="true"
        >
          {img.map((itm, i) => (
            <SwiperSlide key={i}>
              <Img src={itm} alt="foto ape" />
            </SwiperSlide>
          ))}
          <SliderBtn />
        </Swiper>
      </WrapSlider>
    </Section>
  );
};

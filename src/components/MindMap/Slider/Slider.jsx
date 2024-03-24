import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { SliderBtn } from '../SliderBtn';
import { ItemRed, Svg, TitleItem, WrapSlider } from '../MindMap.styled';
import sprite from '../../../assets/images/sprite.svg';
import value from '../data.json';
import { Card } from '../Card';

export const Slider = () => {
  return (
    <div>
      <WrapSlider>
        <Swiper spaceBetween={50} slidesPerView={1}>
          {value.map(({ id, title, text }) => (
            <SwiperSlide key={id}>
              <Card title={title} text={text} />
            </SwiperSlide>
          ))}

          <SwiperSlide>
            <a href="#">
              <ItemRed>
                <Svg>
                  <use href={`${sprite}#arrow`}></use>
                </Svg>
                <TitleItem>Learn more in mind map</TitleItem>
              </ItemRed>
            </a>
          </SwiperSlide>

          <SliderBtn />
        </Swiper>
      </WrapSlider>
    </div>
  );
};

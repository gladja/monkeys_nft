import { Item, Wrap, Svg, Baner } from './BanerAbout.styled';
import sprite from '../../assets/images/sprite.svg';

export const BanerAbout = () => {
  return (
    <Wrap>
      <Baner>
        <Item>
          <Svg>
            <use href={`${sprite}#cross`}></use>
          </Svg>
          Destroy stereotypes
        </Item>
        <Item>
          <Svg>
            <use href={`${sprite}#cross`}></use>
          </Svg>
          HAVE NO LIMITS
        </Item>
        <Item>
          <Svg>
            <use href={`${sprite}#cross`}></use>
          </Svg>
          Break rules
        </Item>
        <Item>
          <Svg>
            <use href={`${sprite}#cross`}></use>
          </Svg>
          HAVE NO LIMITS
        </Item>
        <Item>
          <Svg>
            <use href={`${sprite}#cross`}></use>
          </Svg>
          Break rules
        </Item>
      </Baner>
    </Wrap>
  );
};

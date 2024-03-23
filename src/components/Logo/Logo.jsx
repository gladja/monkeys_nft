import { LogoWrap, Svg } from './Logo.styled';
import sprite from '../../assets/images/sprite.svg';

export const Logo = ({ color, menu }) => {
  return (
    <>
      <LogoWrap href="/">
        <Svg type={color} menu={menu}>
          <use href={`${sprite}#logo`}></use>
        </Svg>
      </LogoWrap>
    </>
  );
};

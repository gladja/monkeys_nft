import { LogoWrap, Svg } from './Logo.styled';
import sprite from '../../assets/images/sprite.svg';

export const Logo = () => {
  return (
    <>
      <LogoWrap href="/">
        <Svg>
          <use href={`${sprite}#logo`}></use>
        </Svg>
      </LogoWrap>
    </>
  );
};

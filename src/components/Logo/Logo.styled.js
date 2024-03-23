import styled from 'styled-components';

export const LogoWrap = styled.a`
  /* width: 48px; */
  position: absolute;
  left: 3%;
  top: 4%;

  @media screen and (min-width: 1280px) {
    left: 6%;
    /* width: 72px; */
  }
`;

export const Svg = styled.svg`
  width: 48px;

  @media screen and (min-width: 1280px) {
    fill: black;
    width: 72px;
  }
`;

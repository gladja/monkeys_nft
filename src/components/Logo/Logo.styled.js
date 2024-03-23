import styled from 'styled-components';

export const LogoWrap = styled.a`
  position: absolute;
  left: 3%;
  top: 4%;

  @media screen and (min-width: 1280px) {
    left: 6%;
  }
`;

export const Svg = styled.svg`
  width: 48px;
  transition: fill 0.3s;

  fill: ${({ type }) => type};

  &:hover {
    fill: ${({ menu }) => (menu === 'true' ? 'red' : 'white')};
  }

  @media screen and (min-width: 768px) {
    fill: ${({ type }) => type};
    width: 72px;

    &:hover {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

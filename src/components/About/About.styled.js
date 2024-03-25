import styled from 'styled-components';

export const WrapTitle = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  font-family: RightGrotesk, sans-serif;
  font-size: 40px;
  text-transform: uppercase;

  max-width: 280px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: 60px;
    max-width: 260px;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    font-size: 120px;
    max-width: 538px;
  }
`;

export const Color = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

export const TextAbout = styled.p`
  font-family: MessinaSansMono, sans-serif;
  font-size: 16px;
  line-height: calc(19 / 16);
  text-transform: uppercase;
  text-indent: 140px;
  text-align: end;

  max-width: 280px;
  margin: 16px auto 0;

  @media screen and (min-width: 768px) {
    max-width: 275px;
    margin: 10px 0 0;
    text-indent: 0;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    margin: 30px 0 0;
    max-width: 409px;
  }
`;

export const BlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 36px auto 40px;

  @media screen and (min-width: 768px) {
    width: 269px;
    margin: 68px 0 36px;
  }

  @media screen and (min-width: 1280px) {
    width: 417px;
    margin: 56px 0 40px;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 36px;
    height: 36px;
  }
`;

export const TextItem = styled.p`
  font-size: 12px;
  line-height: calc(14 / 12);
  text-align: center;

  max-width: 280px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 100%;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    max-width: 100%;
  }
`;

export const Img = styled.img`
  min-width: 216px;
  margin: 0 auto;

  @media screen and (min-width: 360px) and (max-width: 480px) {
    width: 90%;
  }

  @media screen and (min-width: 480px) {
    width: 283px;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 0;
    bottom: -36px;
    width: 313px;
  }

  @media screen and (min-width: 1280px) {
    bottom: -40px;
    width: 492px;
  }
`;

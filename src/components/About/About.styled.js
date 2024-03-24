import styled from 'styled-components';

export const Title = styled.h2`
  font-family: RightGrotesk, sans-serif;
  font-size: 40px;
  text-transform: uppercase;

  /* max-width: 216px; */
  margin: 0 auto;
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

  /* max-width: 216px; */
  margin: 16px auto 0;
`;

export const BlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 36px auto 40px;
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  margin-bottom: 16px;
`;

export const TextItem = styled.p`
  font-size: 12px;
  line-height: calc(14 / 12);
  text-align: center;

  /* max-width: 216px; */
`;

export const Img = styled.img`
  /* margin-top: 8px; */
  min-width: 216px;
  margin: 0 auto;

  @media screen and (min-width: 360px) and (max-width: 480px) {
    width: 90%;
  }

  @media screen and (min-width: 480px) {
    width: 283px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 35px;
  }

  @media screen and (min-width: 1280px) {
    width: 463px;
    margin-right: 55px;
  }
`;

import styled from 'styled-components';

export const TitleWrap = styled.h2`
  font-family: RightGrotesk, sans-serif;
  font-size: 44px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 160px;
    margin-bottom: 80px;
  }
`;

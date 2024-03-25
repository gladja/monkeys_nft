import styled from 'styled-components';

export const WrapSlider = styled.div`
  margin: 0 auto;
  width: 216px;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

export const ItemRed = styled.div`
  width: 216px;
  height: 242px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.red};
  padding: 20px 20px 24px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: padding 0.2s;

  &:hover {
    padding: 18px 18px 24px 12px;
  }

  @media screen and (min-width: 768px) {
    width: 284px;
    height: 242px;
    padding: 24px;

    &:hover {
      padding: 20px 20px 24px 24px;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 504px;
    height: 480px;
  }
`;

export const TitleItem = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-family: RightGrotesk, sans-serif;
  font-size: 32px;
  text-transform: uppercase;
  width: 150px;

  @media screen and (min-width: 1280px) {
    width: 65%;
    font-size: 64px;
  }
`;

export const Svg = styled.svg`
  margin-left: auto;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 1280px) {
    width: 40px;
    height: 40px;
  }
`;

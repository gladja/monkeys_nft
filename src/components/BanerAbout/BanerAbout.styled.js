import styled from 'styled-components';

export const Wrap = styled.div`
  background: ${({ theme }) => theme.colors.red};
  width: 100%;
  height: 52px;
  color: ${({ theme }) => theme.colors.white};
  overflow-x: hidden;

  @media screen and (min-width: 1280px) {
    height: 86px;
  }
`;

export const Baner = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 1280px) {
    gap: 36px;
  }
`;

export const Item = styled.li`
  font-family: RightGrotesk, sans-serif;
  font-size: 36px;
  text-transform: uppercase;
  white-space: nowrap;

  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    gap: 36px;
  }
`;

export const Svg = styled.svg`
  width: 36px;
  height: 36px;
  margin-top: 5px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

import styled from 'styled-components';

export const Item = styled.div`
  width: 216px;
  height: 242px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.black2};
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 284px;
    height: 242px;
    padding: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 504px;
    height: 480px;
  }
`;

export const TextItem = styled.p`
  font-family: MessinaSansMono, sans-serif;
  font-size: 12px;
  line-height: calc(14 / 12);
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-left: auto;
    width: 128px;
  }

  @media screen and (min-width: 1280px) {
    width: 228px;
    font-size: 24px;
    line-height: calc(29 / 24);
  }
`;

export const TitleItem = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-family: RightGrotesk, sans-serif;
  font-size: 32px;
  text-transform: uppercase;
  width: 150px;

  @media screen and (min-width: 1280px) {
    width: 100%;
    font-size: 64px;
  }
`;

import styled from 'styled-components';

export const Wrap = styled.div`
  margin: 0 auto;
  padding: 54px 8px 0;

  @media screen and (min-width: 768px) {
    padding: 54px 16px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 16px 16px 0;
  }
`;

export const Bg = styled.div`
  border-radius: 12px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.red};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroText = styled.p`
  font-family: BiroScriptPlus, sans-serif;
  line-height: 1.68;
`;

export const Title = styled.h1`
  font-family: RightGrotesk, sans-serif;
  font-size: 44px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.01em;
  line-height: 1.6;
`;

export const Img = styled.img`
  min-width: 216px;
  margin-top: 8px;
  padding: 0 64px;

  @media screen and (min-width: 360px) and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 480px) {
    width: 448px;
  }
`;

export const Btn = styled.button`
  font-family: RightGrotesk, sans-serif;
  text-transform: uppercase;
  line-height: calc(19 / 16);
  letter-spacing: 0.03em;
  max-width: 216px;
  width: 100%;
  margin-top: -3px;
  padding: 10px 0;
  border-radius: 8px;
  border: 0;
  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);

  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const HeroTextItem = styled.p`
  font-size: 12px;
  line-height: calc(14 / 12);
  max-width: 216px;
  width: 100%;
  margin: 12px 0 14px;
  text-transform: uppercase;
`;

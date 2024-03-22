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
  padding: 36px 8px 20px;
  background: ${({ theme }) => theme.colors.red};

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  @media screen and (min-width: 768px) {
    padding-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 65px;
  }
`;

export const WrapTitle = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 52%;
    transform: translateY(-50%);
  }
`;

export const HeroText = styled.p`
  font-family: BiroScriptPlus, sans-serif;
  line-height: 1.68;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Title = styled.h1`
  font-family: RightGrotesk, sans-serif;
  font-size: 44px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.01em;
  padding-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 591px;
    font-size: 92px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    width: 1030px;
    font-size: 164px;
  }
`;

export const Img = styled.img`
  margin-top: 8px;
  min-width: 216px;

  @media screen and (min-width: 360px) and (max-width: 480px) {
    width: 63%;
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

export const WrapText = styled.div`
  @media screen and (min-width: 360px) and (max-width: 480px) {
    width: 63%;
  }

  @media screen and (min-width: 768px) {
    width: 591px;
    position: absolute;
    top: 67%;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
  }

  @media screen and (min-width: 1280px) {
    width: 1030px;
  }
`;

export const Btn = styled.button`
  font-family: RightGrotesk, sans-serif;
  text-transform: uppercase;
  line-height: calc(19 / 16);
  letter-spacing: 0.03em;
  min-width: 216px;
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

  @media screen and (min-width: 360px) and (max-width: 480px) {
    /* width: 63%; */
  }

  @media screen and (min-width: 480px) {
    width: 283px;
  }

  @media screen and (min-width: 768px) {
    min-width: 0;
    width: 190px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
    width: 337px;
  }
`;

export const HeroTextItem = styled.p`
  font-size: 12px;
  line-height: calc(14 / 12);
  max-width: 216px;
  width: 100%;
  margin: 12px auto 0;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 190px;
    text-indent: 60px;
    text-align: justify;
    margin: 0 0 12px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    max-width: 337px;
    margin: 0 0 22px;
  }
`;

import styled from 'styled-components';

export const WrapSlider = styled.div`
  margin: 0 auto;
  width: 216px;

  @media screen and (min-width: 768px) {
    width: 591px;
  }

  @media screen and (min-width: 1280px) {
    width: 1030px;
  }
`;

export const Img = styled.img`
  width: 216px;
  height: 256px;

  @media screen and (min-width: 768px) {
    width: 284px;
    height: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 240px;
    height: 280px;
  }
`;

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

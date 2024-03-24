import styled from 'styled-components';

export const Svg = styled.svg`
  width: 36px;
  height: 36px;
  margin: 0 auto 16px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Wrap = styled.div`
  width: 216px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Text = styled.p`
  font-family: MessinaSansMono, sans-serif;
  font-size: 16px;
  line-height: calc(19 / 16);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 16px;
`;

export const WrapInput = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const Input = styled.input`
  font-family: MessinaSansMono, sans-serif;
  font-size: 12px;
  width: 168px;
  height: 48px;
  border-radius: 0 8px 8px 0;
  padding: 17px 24px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  border: none;
  outline: none;

  &:focus {
    border: 1px solid white;
  }
`;

export const WrapSvg = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.black2};
  border-radius: 8px 0 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Svg2 = styled.svg`
  width: 24px;
  height: 24px;

  transition: fill 0.3s;

  fill: ${({ theme }) => theme.colors.blue};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const Btn = styled.button`
  font-family: RightGrotesk, sans-serif;
  font-size: 16px;
  width: 100%;
  height: 41px;
  padding: 10px 0;
  border-radius: 8px;
  border: 0;
  text-transform: uppercase;
  line-height: calc(19 / 16);
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.red};
  margin-top: 24px;

  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

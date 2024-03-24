import { styled } from 'styled-components';

export const WrapBtn = styled.div`
  margin: 24px auto 0;
  display: flex;
  justify-content: space-around;
  width: 216px;
`;

export const Btn = styled.button`
  font-family: BiroScriptPlus, sans-serif;
  font-size: 24px;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};

  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;

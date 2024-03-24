import styled from 'styled-components';

export const Wrap = styled.section`
  color: ${({ theme }) => theme.colors.white};
  margin: 60px auto 0;

  min-width: 216px;

  @media screen and (min-width: 360px) and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    position: relative;
    margin: 80px auto 0;
  }

  @media screen and (min-width: 768px) {
    margin: 120px auto 0;
  }
`;

import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 54px;
  margin: 0 auto;
  padding: 0 72px;

  @media screen and (min-width: 360px) and (max-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 481px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 96px;
  }
`;

import styled from 'styled-components';

export const Text = styled.footer`
  width: 216px;
  margin: 60px auto 24px;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    margin: 80px auto 40px;
  }
`;

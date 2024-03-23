import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 24px 18px 0;
`;

export const Nav = styled.nav`
  display: flex;
  margin-left: auto;
  align-items: end;
  flex-direction: column;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuBtn = styled.li`
  border-radius: 8px;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background: rgba(41, 41, 41);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuOpen = styled.a`
  font-family: MessinaSansMono, sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};

  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
    border-bottom: 1px solid ${({ theme }) => theme.colors.red};
  }
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;

  transition: fill 0.3s;

  fill: ${({ theme }) => theme.colors.white};

  &:hover {
    fill: ${({ theme }) => theme.colors.red};
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const MenuNav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
  margin: 20px auto 0;

  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);
  cursor: pointer;

  border-radius: 12px 0 0 12px;
`;

export const MenuText = styled.a`
  font-family: MessinaSansMono, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};

  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

export const Text = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

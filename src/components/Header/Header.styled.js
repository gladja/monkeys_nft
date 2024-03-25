import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  top: 4%;
  right: 3%;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuNav = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);
  cursor: pointer;

  position: absolute;
  top: 0;
  right: 48px;

  width: 240px;
  height: 48px;
  padding: 0 10px;
  border-radius: 12px 0 0 12px;

  @media screen and (min-width: 1280px) {
    width: 400px;
    height: 80px;
    padding: 0 14px;

    right: 80px;
  }
`;

export const MenuBtn = styled.li`
  border-radius: 8px;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
  }
`;

export const MenuText = styled.a`
  font-family: MessinaSansMono, sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};

  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const MenuOpen = styled.a`
  font-family: MessinaSansMono, sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};

  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;

  transition: fill 0.3s;

  &:hover {
    fill: white;
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

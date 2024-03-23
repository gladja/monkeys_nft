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

export const Btn = styled.li`
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

export const Svg = styled.svg`
  width: 24px;
  height: 24px;

  transition: fill 0.5s;

  &:hover {
    fill: white;
  }
`;

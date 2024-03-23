import { Logo } from '../Logo/Logo';
import {
  Menu,
  MenuBtn,
  MenuNav,
  MenuOpen,
  MenuText,
  Nav,
  Svg,
  Text,
  Wrap,
} from './BurgerMenu.styled';
import sprite from '../../assets/images/sprite.svg';

export const BurgerMenu = ({ menu, setMenu }) => {
  return (
    <Wrap>
      <Logo color={'white'} menu={menu.toString()} />
      <Nav>
        <Menu>
          <MenuBtn>
            <MenuOpen href="#" onClick={() => setMenu(!menu)}>
              {menu ? 'CLOSE' : 'MENU'}
            </MenuOpen>
          </MenuBtn>
          <MenuBtn>
            <a href="#">
              <Svg>
                <use href={`${sprite}#discord`}></use>
              </Svg>
            </a>
          </MenuBtn>
          <MenuBtn>
            <a href="#">
              <Svg>
                <use href={`${sprite}#blue`}></use>
              </Svg>
            </a>
          </MenuBtn>
          <MenuBtn>
            <a href="#">
              <Svg>
                <use href={`${sprite}#x`}></use>
              </Svg>
            </a>
          </MenuBtn>
        </Menu>

        <MenuNav>
          <li>
            <MenuText href="#" onClick={() => setMenu(false)}>
              ABOUT
            </MenuText>
          </li>
          <li>
            <MenuText href="#" onClick={() => setMenu(false)}>
              M-MAP
            </MenuText>
          </li>
          <li>
            <MenuText href="#" onClick={() => setMenu(false)}>
              FAQ
            </MenuText>
          </li>
          <li>
            <MenuText href="#" onClick={() => setMenu(false)}>
              ARTS
            </MenuText>
          </li>
          <li>
            <MenuText href="#" onClick={() => setMenu(false)}>
              MINT
            </MenuText>
          </li>
        </MenuNav>
      </Nav>

      <Text>© Yacht ape 2024 all rights reserved</Text>
    </Wrap>
  );
};

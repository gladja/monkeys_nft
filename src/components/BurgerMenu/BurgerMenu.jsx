import { Logo } from '../Logo/Logo';
import {
  Menu,
  MenuBtn,
  MenuNav,
  MenuOpen,
  MenuText,
  Nav,
  Svg,
  Wrap,
  WrapFooter,
  WrapLogo,
} from './BurgerMenu.styled';
import sprite from '../../assets/images/sprite.svg';
import { Footer } from '../Footer/Footer';

export const BurgerMenu = ({ menu, setMenu }) => {
  return (
    <Wrap>
      <WrapLogo>
        <Logo color={'white'} menu={menu.toString()} />
      </WrapLogo>
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
      <WrapFooter>
        <Footer />
      </WrapFooter>
    </Wrap>
  );
};

import {
  MenuBtn,
  Menu,
  Nav,
  Svg,
  MenuText,
  MenuNav,
  MenuOpen,
} from './Header.styled';
import sprite from '../../assets/images/sprite.svg';

export const Header = ({ menu, setMenu }) => {
  return (
    <Nav>
      <Menu>
        <MenuBtn
          style={{ borderRadius: menu && '0 12px 12px 0' }}
          type={menu.toString()}
        >
          {menu && (
            <MenuNav style={{ position: menu && 'absolute' }}>
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
          )}
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
    </Nav>
  );
};

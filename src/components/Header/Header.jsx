import { Btn, Menu, Nav, Svg } from './Header.styled';
import sprite from '../../assets/images/sprite.svg';

export const Header = () => {
  return (
    <Nav>
      <Menu>
        <Btn>
          <a href="#">
            <span>MENU</span>
          </a>
        </Btn>
        <Btn>
          <a href="#">
            <Svg>
              <use href={`${sprite}#discord`}></use>
            </Svg>
          </a>
        </Btn>
        <Btn>
          <a href="#">
            <Svg>
              <use href={`${sprite}#blue`}></use>
            </Svg>
          </a>
        </Btn>
        <Btn>
          <a href="#">
            <Svg>
              <use href={`${sprite}#x`}></use>
            </Svg>
          </a>
        </Btn>
      </Menu>
    </Nav>
  );
};

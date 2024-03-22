import { LogoWrap } from './Logo.styled';
import logo from '../../assets/images/logo.svg';

export const Logo = () => {
  return (
    <>
      <LogoWrap href="/">
        <img src={logo} alt="logo" />
      </LogoWrap>
    </>
  );
};

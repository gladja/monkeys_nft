import {
  Bg,
  Btn,
  HeroText,
  HeroTextItem,
  Img,
  Title,
  Wrap,
  WrapText,
  WrapTitle,
} from './Hero.style';
import hero_mob from '../../assets/images/hero_mob.png';
// import hero_dec from '../../assets/images/hero_des.png';
import { Logo } from '../Logo/Logo';
import { Header } from '../Header';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Hero = ({ menu, setMenu, width }) => {
  return (
    <Wrap>
      {menu && width < 768 ? (
        <BurgerMenu menu={menu} setMenu={setMenu} />
      ) : (
        <Bg>
          <Logo color={'#171717'} />
          <Header menu={menu} setMenu={setMenu} />
          <>
            <WrapTitle>
              <HeroText>diD yOu seE iT ?</HeroText>
              <Title>
                YACHT <span>APES</span>
              </Title>
              <HeroText>Apes aRe eveRywhere</HeroText>
            </WrapTitle>
            <Img src={hero_mob} alt="ape" />
            <WrapText>
              <Btn>Meet apes</Btn>
              <HeroTextItem>
                Yacht Ape is a collection of unique digital apes that you can
                own in NFT format
              </HeroTextItem>
            </WrapText>
          </>
        </Bg>
      )}
    </Wrap>
  );
};

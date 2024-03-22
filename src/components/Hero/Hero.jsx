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

export const Hero = () => {
  return (
    <Wrap>
      <Bg>
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
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </HeroTextItem>
        </WrapText>
      </Bg>
    </Wrap>
  );
};

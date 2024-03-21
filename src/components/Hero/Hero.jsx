import {
  Bg,
  Btn,
  HeroText,
  HeroTextItem,
  Img,
  Title,
  Wrap,
} from './Hero.style';
import hero_mob from '../../assets/images/hero_mob.png';

export const Hero = () => {
  return (
    <Wrap>
      <Bg>
        <HeroText>diD yOu seE iT ?</HeroText>
        <Title>YACHT APES</Title>
        <HeroText>Apes aRe eveRywhere</HeroText>
        <Img src={hero_mob} alt="ape" />
        <Btn>Meet apes</Btn>
        <HeroTextItem>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </HeroTextItem>
      </Bg>
    </Wrap>
  );
};

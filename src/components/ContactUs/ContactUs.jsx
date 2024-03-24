import { Section } from '../Section';
import { Title } from '../Title';
import sprite from '../../assets/images/sprite.svg';
import {
  Svg,
  Text,
  Wrap,
  Input,
  Svg2,
  WrapSvg,
  WrapInput,
  Btn,
} from './ContactUs.styled';

export const ContactUs = () => {
  return (
    <Section>
      <Title text="Are you in?" />
      <Wrap>
        <div>
          <Svg>
            <use href={`${sprite}#cross`}></use>
          </Svg>
        </div>
        <Text>
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </Text>
        <form action="">
          <WrapInput>
            <WrapSvg>
              <Svg2>
                <use href={`${sprite}#discord`}></use>
              </Svg2>
            </WrapSvg>
            <Input type="text" placeholder="@username" />
          </WrapInput>
          <WrapInput>
            <WrapSvg>
              <Svg2>
                <use href={`${sprite}#mm`}></use>
              </Svg2>
            </WrapSvg>
            <Input type="text" placeholder="1x28601vsdfg31543cs" />
          </WrapInput>
          <Btn type="submit">MINT</Btn>
        </form>
      </Wrap>
    </Section>
  );
};

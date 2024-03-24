import { Section } from '../Section';
import { Title } from '../Title/';

import { AccordionItemHeading } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
  TitleWrap,
  Text,
  AccordionItemCustom,
  AccordionCustom,
  AccordionItemButtonCustom,
  AccordionItemPanelCustom,
  WrapAccord,
  TitleBlock,
  Number,
  Img,
} from './Faq.styled';
import value from './data.json';
import { img } from './images';

export const Faq = ({ width }) => {
  return (
    <Section>
      <Title text="Faq" />
      <WrapAccord>
        <AccordionCustom preExpanded={'1'}>
          {value.map(({ id, title, text }, i) => (
            <AccordionItemCustom key={id} uuid={id}>
              <AccordionItemHeading>
                <AccordionItemButtonCustom>
                  <TitleBlock>
                    <Number>[&nbsp;{id}&nbsp;]</Number>
                    <TitleWrap>{title}</TitleWrap>
                  </TitleBlock>
                </AccordionItemButtonCustom>
              </AccordionItemHeading>
              <AccordionItemPanelCustom>
                <Text>
                  {width > 768 && <Img src={img[i]} alt="ape foto" />}
                  {text}
                </Text>
              </AccordionItemPanelCustom>
            </AccordionItemCustom>
          ))}
        </AccordionCustom>
      </WrapAccord>
    </Section>
  );
};

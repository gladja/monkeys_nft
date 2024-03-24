import { Section } from '../Section';
import { Title } from '../Title/';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
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
} from './Faq.styled';

export const Faq = () => {
  return (
    <Section>
      <Title text="Faq" />
      <WrapAccord>
        <AccordionCustom>
          <AccordionItemCustom>
            <AccordionItemHeading>
              <AccordionItemButtonCustom>
                <TitleBlock>
                  <Number>[&nbsp;1&nbsp;]</Number>
                  <TitleWrap>WHAT IS AN NFT COLLECTION?</TitleWrap>
                </TitleBlock>
              </AccordionItemButtonCustom>
            </AccordionItemHeading>
            <AccordionItemPanelCustom>
              <Text>
                An NFT collection is a group of unique digital assets, each
                represented by a non-fungible token, typically created around a
                specific theme or style.
              </Text>
            </AccordionItemPanelCustom>
          </AccordionItemCustom>

          <AccordionItemCustom>
            <AccordionItemHeading>
              <AccordionItemButtonCustom>
                <TitleBlock>
                  <Number>[&nbsp;2&nbsp;]</Number>
                  <TitleWrap>
                    HOW DO I PURCHASE NFTS FROM A COLLECTION?
                  </TitleWrap>
                </TitleBlock>
              </AccordionItemButtonCustom>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Text>
                Launch your own token, the proceeds of which will go to a global
                fund to LAUNCH YACHT CLUB AND PROMOTE it
              </Text>
            </AccordionItemPanel>
          </AccordionItemCustom>
        </AccordionCustom>
      </WrapAccord>
    </Section>
  );
};

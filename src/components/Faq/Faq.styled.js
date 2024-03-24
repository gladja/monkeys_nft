import styled from 'styled-components';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export const WrapAccord = styled.div`
  display: flex;
  justify-content: center;
`;

export const AccordionCustom = styled(Accordion)``;

export const AccordionItemCustom = styled(AccordionItem)`
  width: 216px;
  padding: 8px;
  border-radius: 12px;

  &:focus-within,
  &:visited {
    background: ${({ theme }) => theme.colors.black2};
  }
`;

export const AccordionItemButtonCustom = styled(AccordionItemButton)`
  /* .accordion__button { */
  /* background: ${({ theme }) => theme.colors.black2}; */

  /* &:hover {
    color: red;
  } */
  /* } */
`;

export const TitleBlock = styled.div`
  display: flex;
  gap: 8px;

  transition: color 0.3s;

  &:focus-within,
  &:focus,
  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.red};
  }

  &:hover > p {
    color: ${({ theme }) => theme.colors.white};
  },
`;

export const Number = styled.p`
  font-family: BiroScriptPlus, sans-serif;
  font-size: 12px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.red};
`;

export const AccordionItemPanelCustom = styled(AccordionItemPanel)`
  padding: 10px 8px 10px 30px;
`;

export const TitleWrap = styled.h3`
  font-family: RightGrotesk, sans-serif;
  font-size: 20px;
  text-transform: uppercase;

  &:focus,
  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Text = styled.p`
  font-family: MessinaSansMono, sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  line-height: calc(14 / 12);
`;

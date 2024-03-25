import styled from 'styled-components';

import {
  Accordion,
  AccordionItem,
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

  @media screen and (min-width: 768px) {
    width: 591px;
    padding: 10px 10px 10px 183px;
  }

  @media screen and (min-width: 1280px) {
    width: 1030px;
    padding: 20px 20px 20px 297px;
  }
`;

export const AccordionItemButtonCustom = styled(AccordionItemButton)``;

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
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    gap: 27px;
  }
`;

export const Number = styled.p`
  font-family: BiroScriptPlus, sans-serif;
  font-size: 12px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.red};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 20px;
  }
`;

export const AccordionItemPanelCustom = styled(AccordionItemPanel)`
  padding: 10px 8px 10px 30px;

  @media screen and (min-width: 768px) {
    padding: 10px 8px 10px 50px;
  }

  @media screen and (min-width: 1280px) {
    padding: 10px 8px 10px 60px;
  }
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

  @media screen and (min-width: 768px) {
    width: 204px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    width: 635px;
  }
`;

export const Text = styled.p`
  font-family: MessinaSansMono, sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  line-height: calc(14 / 12);

  position: relative;

  @media screen and (min-width: 768px) {
    height: 65px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const Img = styled.img`
  width: 148px;
  height: 183px;
  transform: rotate(-8deg);

  position: absolute;
  left: -65%;
  bottom: -55%;

  @media screen and (min-width: 1280px) {
    width: 248px;
    height: 282px;

    left: -53%;
    bottom: -60%;
  }
`;

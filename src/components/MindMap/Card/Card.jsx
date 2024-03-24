import { Item, TextItem, TitleItem } from './Card.stylrd';

export const Card = ({ title, text }) => {
  return (
    <>
      <Item>
        <TextItem>{text}</TextItem>
        <TitleItem>{title}</TitleItem>
      </Item>
    </>
  );
};

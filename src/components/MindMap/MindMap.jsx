import { Section } from '../Section';
import { Grid, ItemRed, Svg, Title, TitleItem } from './MindMap.styled';
import sprite from '../../assets/images/sprite.svg';
import { Slider } from './Slider';
import { Card } from './Card';
import value from './data.json';

export const MindMap = ({ width }) => {
  return (
    <Section>
      <Title>MindMap</Title>
      {width < 768 ? (
        <Slider />
      ) : (
        <Grid>
          {value.map(({ id, title, text }) => (
            <li key={id}>
              <Card title={title} text={text} />
            </li>
          ))}

          <li>
            <a href="#">
              <ItemRed>
                <Svg>
                  <use href={`${sprite}#arrow`}></use>
                </Svg>
                <TitleItem>Learn more in mind map</TitleItem>
              </ItemRed>
            </a>
          </li>
        </Grid>
      )}
    </Section>
  );
};

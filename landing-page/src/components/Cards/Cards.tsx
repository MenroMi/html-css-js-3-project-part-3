import {Box, Card} from '..';
import type {IAdvantages} from '../../types';

const Cards = ({cards}: {cards: IAdvantages[]}) => {
  return cards.map(({title, descr, icon}, i) => (
    <Card
      key={title}
      className={`flex flex-col flex-1 3xl:max-w-[800px] mb-auto ${
        i === 0 || i === 2 ? 'place-self-end' : ''
      }`}
    >
      <Box className="h-24 w-full mb-5">
        <img className="mx-auto" src={icon} alt={title} key={i} />
      </Box>

      <p className="text-center text-card-heading font-semibold">{title}</p>
      <p className="text-center mt-4 text-card-p">{descr}</p>
    </Card>
  ));
};

export default Cards;

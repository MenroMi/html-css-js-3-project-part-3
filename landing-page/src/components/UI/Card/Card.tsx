import {Box} from '..';

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card = ({children, className}: ICardProps) => {
  return <Box className={className}>{children}</Box>;
};

export default Card;

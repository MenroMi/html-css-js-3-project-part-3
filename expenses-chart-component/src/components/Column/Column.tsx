import {FC} from 'react';
import './Column.css';

interface IColumnProps {
  day: string;
  amount: number;
  onActive: React.Dispatch<React.SetStateAction<string | null>>;
  activeBar: string | null;
}

const Column: FC<IColumnProps> = ({day, amount, onActive, activeBar}) => {
  return (
    <div className="column" onClick={() => onActive(day)}>
      <div
        className="column__amount"
        style={day === activeBar ? {opacity: 1} : {}}
      >
        ${amount}
      </div>
      <div
        className="column__pilar"
        style={{
          height: `${amount}%`,
          backgroundColor: `${
            day === activeBar
              ? 'var(--primary-soft-cyan)'
              : 'var(--primary-soft-red)'
          }`,
        }}
      ></div>
      <p className="column__day">{day}</p>
    </div>
  );
};

export default Column;

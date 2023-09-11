import {useState} from 'react';
import data from '../../data.json';
import Column from '../Column/Column';
import './BarChart.css';

const BarChart = () => {
  const [activeBar, setActiveBar] = useState<string | null>(null);

  console.log(activeBar);
  return (
    <div className="bar-chart">
      {data.map((day, i) => {
        return (
          <Column
            amount={day.amount}
            day={day.day}
            key={i}
            onActive={setActiveBar}
            activeBar={activeBar}
          />
        );
      })}
    </div>
  );
};

export default BarChart;

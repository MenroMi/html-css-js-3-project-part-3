import BarChart from '../BarChart/BarChart';
import './Schedule.css';

const Schedule = () => {
  return (
    <div className="schedule-component">
      <h2>Spending - Last 7 days</h2>

      <BarChart />

      <div className="divider"></div>

      <div className="total">
        <div className="total__currency">
          <p className="curr-descr">Total this month</p>
          <p className="curr-amount">$478.33</p>
        </div>

        <div className="total__previous">
          <p className="prev-amount">+2.4%</p>
          <p className="prev-descr">from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

import './MainComponent.css';
import {MyBalance, Schedule} from '..';

const MainComponent = () => {
  return (
    <div className="main-component">
      <MyBalance />
      <Schedule />
    </div>
  );
};

export default MainComponent;

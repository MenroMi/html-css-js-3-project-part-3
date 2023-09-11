import Logo from '../Logo/Logo';
import './MyBalance.css';

const MyBalance = () => {
  return (
    <div className="balance-component">
      <div className="balance">
        <h2>My balance</h2>
        <p>$921.48</p>
      </div>
      <Logo />
    </div>
  );
};

export default MyBalance;

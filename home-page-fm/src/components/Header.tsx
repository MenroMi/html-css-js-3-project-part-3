import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className=" mx-auto max-w-[1440px] w-full py-5 flex justify-between items-center z-30">
      <a href="/" className="z-30">
        <Logo />
      </a>
      <Navigation />
    </header>
  );
};

export default Header;

import {FC} from 'react';

interface INavigationProps {
  logo: string;
  navItems: string[];
}

const Navigation: FC<INavigationProps> = ({logo, navItems}) => {
  return (
    <nav className="flex justify-between items-center w-full gap-8 pt-5">
      <a href="/" className="w-[50%] h-full">
        <img src={logo} alt="logo" className="h-full" />
      </a>

      <ul
        id="nav-items"
        className="flex gap-2 md:gap-16 h-full items-center w-full max-w-[350px] justify-between"
      >
        {navItems.map(item => (
          <li className={`cursor-pointer text-center`} key={item}>
            <a
              href="/"
              className="text-xs sm:text-base hover:font-semibold active:font-semibold active:text-cyan"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

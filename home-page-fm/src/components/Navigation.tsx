import {useEffect} from 'react';
import useWindowSize from '../hooks/useWindowSize';
import {NavDesktop, NavMobile} from './Navs';
import BurgerMenuContext from '../providers/BurgerMenuContext';

const Navigation = () => {
  const {
    size: {width},
    setSize,
  } = useWindowSize();

  useEffect(() => {
    if (typeof window !== 'undefined')
      setSize({width: window.innerWidth, height: window.innerHeight});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav role="navigation">
      {width && width < 1024 ? (
        <BurgerMenuContext>
          <NavMobile />
        </BurgerMenuContext>
      ) : (
        <NavDesktop />
      )}
    </nav>
  );
};

export default Navigation;

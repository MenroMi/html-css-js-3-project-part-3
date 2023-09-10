import {useContext} from 'react';
import NavBurger from './NavBurger';
import NavElems from './NavElems';
import {BgrMenuContext} from '../../providers/BurgerMenuContext';

const NavMobile = () => {
  const {isOpen, setIsOpen} = useContext(BgrMenuContext);
  return (
    <>
      <NavBurger
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        className={`block relative wbk-user-select`}
      />
      <div
        id="background-bgr-menu"
        className={`animate-bgr-menu ${
          isOpen ? 'block' : 'hidden'
        } z-20 bg-white fixed top-0 right-0 w-[70%] h-full`}
      >
        <NavBurger
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          className="block absolute wbk-user-select right-5 top-[1.7rem]"
        />
        <NavElems className="absolute  transition-transform flex flex-col mt h-full w-full justify-center" />
      </div>

      <div
        id="overlay"
        className={` ${isOpen ? 'block' : 'hidden'}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default NavMobile;

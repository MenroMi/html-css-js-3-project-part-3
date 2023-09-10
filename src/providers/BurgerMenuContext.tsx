import {createContext, useState} from 'react';

interface IBurgerMenuContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BgrMenuContext = createContext<IBurgerMenuContext>({
  isOpen: false,
  setIsOpen: () => {},
});

const BurgerMenuContext = ({children}: {children: React.ReactNode}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <BgrMenuContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </BgrMenuContext.Provider>
  );
};

export default BurgerMenuContext;

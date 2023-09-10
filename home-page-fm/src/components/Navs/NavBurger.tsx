import {FC} from 'react';

interface INavBurgerProps extends React.HTMLAttributes<HTMLDivElement> {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const NavBurger: FC<INavBurgerProps> = ({
  setIsOpen,
  isOpen,
  className,
  ...rest
}) => {
  return (
    <div id="menuToggle" className={className} {...rest}>
      <input
        type="checkbox"
        className="block w-40px h-32px absolute -top-7px -right-5px cursor-pointer opacity-0 z-30 wbk-callout peer/input"
        onChange={e => setIsOpen(e.target.checked)}
        checked={isOpen}
      />

      {['01', '02', '03'].map(id => {
        return (
          <span
            key={id}
            className={`block w-bgr-line h-bgr-line origin-bgr mb-5px relative z-1 transition-transform bg-neutral-very-dark-blue ${
              id === '01'
                ? 'origin-0% peer-checked/input:rotate-45d peer-checked/input:-translate-x-2px peer-checked:-translate-y-1px'
                : ''
            } ${
              id === '02'
                ? 'peer-checked/input:opacity-0 peer-checked/input:rotate-0 peer-checked/input:scale-bgr'
                : ''
            }
              ${
                id === '03'
                  ? 'origin-y-100% peer-checked/input:-rotate-45d peer-checked/input:translate-x-0 peer-checked/input:-translate-y-1px'
                  : ''
              }
            `}
          />
        );
      })}
    </div>
  );
};
export default NavBurger;

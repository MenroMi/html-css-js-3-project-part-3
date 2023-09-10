import {FC} from 'react';
import {NAV_LINKS} from '../../constants';

interface INavElemsProps extends React.HTMLAttributes<HTMLUListElement> {}

const NavElems: FC<INavElemsProps> = ({className, ...rest}) => {
  return (
    <ul className={className} {...rest}>
      {NAV_LINKS.map((name: string) => (
        <li
          key={name}
          className="hover:text-primary-orange cursor-pointer transition max-lg:text-3xl max-lg:py-7 max-lg:pl-10"
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default NavElems;

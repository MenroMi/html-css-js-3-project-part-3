import {FC} from 'react';
import {BUTTON_TYPES} from '../../../constants';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: BUTTON_TYPES;
  content: string;
  children?: React.ReactNode;
}

const Button: FC<IButtonProps> = ({
  type = BUTTON_TYPES.BUTTON,
  className,
  content,
  id,
  children,
  ...props
}) => {
  return (
    <button id={id ? id : 'btn'} type={type} className={className} {...props}>
      {content}
      {children}
    </button>
  );
};

export default Button;

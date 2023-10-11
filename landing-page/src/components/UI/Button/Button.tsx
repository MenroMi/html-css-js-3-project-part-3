import {FC} from 'react';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  content: string;
  children?: React.ReactNode;
}

const Button: FC<IButtonProps> = ({
  className,
  content,
  id = 'btn',
  children,
  ...props
}) => {
  return (
    <button className={`${id === 'btn' ? 'btn' : ''} ${className}`} {...props}>
      {content}
      {children}
    </button>
  );
};

export default Button;

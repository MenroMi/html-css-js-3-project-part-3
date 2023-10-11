import {twMerge as tw} from 'tailwind-merge';

interface IBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Box = ({children, className, ...props}: IBoxProps) => {
  return (
    <div className={tw('box', className)} {...props}>
      {children}
    </div>
  );
};

export default Box;

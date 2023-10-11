import React from 'react';

interface IMenuItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  content: string;
  href?: string;
}

const MenuItem = ({className, content, href = '/'}: IMenuItemProps) => {
  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
};

export default MenuItem;

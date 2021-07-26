import { FC } from 'react';
import Link from 'next/link';

interface Props {
  type: 'link';
  href: string;
  color: 'primary' | 'secondary' | 'light' | 'important';
  external?: boolean;
}

export const Button: FC<Props> = ({ children, href, color, external }) => {
  if (external) {
    return (
      <a href={href} className={`button button_${color}`} target="_blank" rel="nofollow noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={`button button_${color}`}>{children}</a>
    </Link>
  );
};

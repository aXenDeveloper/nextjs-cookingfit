import { FC } from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  type: 'primary';
  external?: boolean;
}

export const ButtonLink: FC<Props> = ({ children, href, type, external }) => {
  if (external) {
    return (
      <a href={href} className={`button button_${type}`} target="_blank" rel="nofollow noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={`button button_${type}`}>{children}</a>
    </Link>
  );
};

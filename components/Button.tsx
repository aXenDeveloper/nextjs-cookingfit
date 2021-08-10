import { FC } from 'react';
import Link from 'next/link';

interface ColorButtonProps {
  color: 'primary' | 'secondary' | 'light' | 'important';
}

interface LinkProps {
  type: 'link';
  href: string;
  external?: boolean;
  onClick?(): never;
  typeButton?: never;
  fullWidth?: boolean;
  disable?: never;
}

interface ButtonProps {
  type: 'button';
  onClick?(): void;
  href?: never;
  external?: never;
  typeButton?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  disable?: boolean;
}

type Props = (LinkProps | ButtonProps) & ColorButtonProps;

export const Button: FC<Props> = ({
  type,
  children,
  href,
  color,
  external,
  onClick,
  typeButton,
  fullWidth,
  disable
}) => {
  if (type === 'button') {
    return (
      <button
        type={typeButton}
        className={`button button_${color}${fullWidth ? ' button:fullWidth' : ''}`}
        onClick={onClick}
        disabled={disable}
      >
        {children}
      </button>
    );
  }

  if (type === 'link' && external) {
    return (
      <a
        href={href}
        className={`button button_${color}${fullWidth ? ' button:fullWidth' : ''}`}
        target="_blank"
        rel="nofollow noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={type === 'link' && href ? href : '/'}>
      <a className={`button button_${color}${fullWidth ? ' button:fullWidth' : ''}`}>{children}</a>
    </Link>
  );
};

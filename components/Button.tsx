import { FC } from 'react';
import Link from 'next/link';

type ColorButtonProps = {
  color: 'primary' | 'secondary' | 'light' | 'important';
};

type LinkProps = {
  type: 'link';
  ariaLabel: never;
  href: string;
  external?: boolean;
  onClick?(): never;
  typeButton?: never;
  fullWidth?: boolean;
  disable?: never;
};

type ButtonProps = {
  type: 'button';
  ariaLabel: string;
  onClick?(): void;
  href?: never;
  external?: never;
  typeButton?: 'button' | 'submit';
  fullWidth?: boolean;
  disable?: boolean;
};

type Props = (LinkProps | ButtonProps) & ColorButtonProps;

export const Button: FC<Props> = ({
  type,
  children,
  ariaLabel,
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
        aria-label={ariaLabel}
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

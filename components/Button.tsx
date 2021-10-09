import { FC, MouseEvent } from 'react';
import Link from 'next/link';

interface ColorButtonProps {
  color: 'primary' | 'secondary' | 'light' | 'important';
}

interface LinkProps {
  type: 'link';
  ariaLabel: never;
  href: string;
  external?: boolean;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  typeButton?: never;
  fullWidth?: boolean;
  disabled?: never;
}

interface ButtonProps {
  type: 'button';
  ariaLabel: string;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  href?: never;
  external?: never;
  typeButton?: 'button' | 'submit';
  fullWidth?: boolean;
  disabled?: boolean;
}

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
  disabled
}) => {
  if (type === 'button') {
    return (
      <button
        type={typeButton}
        className={`button button_${color}${fullWidth ? ' button:fullWidth' : ''}`}
        onClick={e => onClick && onClick(e)}
        disabled={disabled}
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
        onClick={() => onClick && onClick()}
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

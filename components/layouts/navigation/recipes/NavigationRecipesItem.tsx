import { FC } from 'react';
import Link from 'next/link';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  title: string;
  path: string;
  icon: {
    fontAwesome: boolean;
    icon: IconProp;
  };
  active: boolean;
}

export const NavigationRecipesItem: FC<Props> = ({
  title,
  path,
  icon,
  active,
}) => {
  const { t } = useTranslation('global');

  return (
    <li
      className={`navigation_item navigation_recipes_item${
        active ? ' navigation_item:active' : ''
      }`}
    >
      <Link href={path}>
        <a>
          <FontAwesomeIcon icon={icon.icon} />
          <span>{t(`navigation_main_${title}`)}</span>
        </a>
      </Link>
    </li>
  );
};

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { iconSVG } from '../../../../_utils/navigationRecipes/navigationRecipesIcons';

type Props = {
  title: string;
  path: string;
  icon?: IconProp;
  active: boolean;
};

export const NavigationRecipesItem: FC<Props> = ({ title, path, icon, active }) => {
  const { t } = useTranslation('global');

  return (
    <li
      className={`navigation_item navigation_recipes_item${
        active ? ' navigation_item:active' : ''
      }`}
    >
      <Link href={path}>
        <a>
          <div>{icon ? <FontAwesomeIcon icon={icon} /> : iconSVG[title]()}</div>

          <span>{t(`navigation_${title}`)}</span>
        </a>
      </Link>
    </li>
  );
};

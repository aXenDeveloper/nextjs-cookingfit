import { FC } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  title: string;
  path: string;
  icon: IconProp;
  active: boolean;
}

export const NavigationMenuItem: FC<Props> = ({ title, path, icon, active }) => {
  const { t } = useTranslation('global');

  return (
    <li
      className={`navigation_item navigation_menu_item${active ? ' navigation_item:active' : ''}`}
    >
      <Link href={path}>
        <a>
          <FontAwesomeIcon icon={icon} />
          <span>{t(`navigation_${title}`)}</span>
        </a>
      </Link>
    </li>
  );
};

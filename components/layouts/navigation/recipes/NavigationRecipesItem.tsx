import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  title: string;
  path: string;
  icon?: IconProp;
  active: boolean;
}

import breackfastSVG from '../../../../assets/icons/breakfast.svg';

interface Props123 {
  [key: string]: any;
}

const iconSVG: Props123 = {
  breackfast: breackfastSVG,
};

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
          {icon ? (
            <FontAwesomeIcon icon={icon} />
          ) : (
            <Image src={breackfastSVG} alt={t(`navigation_main_${title}`)} />
          )}

          <span>{t(`navigation_main_${title}`)}</span>
        </a>
      </Link>
    </li>
  );
};

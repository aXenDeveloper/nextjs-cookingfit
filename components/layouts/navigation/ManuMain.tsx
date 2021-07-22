import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faCalculator, faHome, faUtensils } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export const ManuMain = () => {
  const { t } = useTranslation('global');

  return (
    <ul className="menu menu_main">
      <li className="menu_item menu_item:active">
        <Link href="/">
          <a>
            <FontAwesomeIcon icon={faHome} />
            <span>{t('menu_main_home')}</span>
          </a>
        </Link>
      </li>

      <li className="menu_item">
        <Link href="/recipes">
          <a>
            <FontAwesomeIcon icon={faUtensils} />
            <span>{t('menu_main_recipes')}</span>
          </a>
        </Link>
      </li>

      <li className="menu_item">
        <Link href="/products">
          <a>
            <FontAwesomeIcon icon={faAppleAlt} />
            <span>{t('menu_main_products')}</span>
          </a>
        </Link>
      </li>

      <li className="menu_item">
        <Link href="/calculators">
          <a>
            <FontAwesomeIcon icon={faCalculator} />
            <span>{t('menu_main_calculators')}</span>
          </a>
        </Link>
      </li>
    </ul>
  );
};

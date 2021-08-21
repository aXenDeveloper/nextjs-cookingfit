import Link from 'next/link';
import {
  faCalculator,
  faSearch,
  faShoppingBasket,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { useAuth } from '../../../context/useAuth';

export const NavigationBottom = () => {
  const { t } = useTranslation('global');
  const { session } = useAuth();

  return (
    <ul className="nav_bottom responsive_hide:desktop">
      <li>
        <Link href="/calculators">
          <a>
            <FontAwesomeIcon icon={faCalculator} />
            <span>{t('navigation_calculators')}</span>
          </a>
        </Link>
      </li>

      <li>
        <Link href="/search">
          <a>
            <FontAwesomeIcon icon={faSearch} />
            <span>{t('navigation_search')}</span>
          </a>
        </Link>
      </li>

      {session ? (
        <>
          <li>
            <Link href="/shopping">
              <a>
                <FontAwesomeIcon icon={faShoppingBasket} />
                <span>{t('navigation_shopping')}</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/login">
              <a>
                <FontAwesomeIcon icon={faUser} />
                <span>{t('navigation_login')}</span>
              </a>
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link href="/login">
            <a>
              <FontAwesomeIcon icon={faUser} />
              <span>{t('navigation_login')}</span>
            </a>
          </Link>
        </li>
      )}
    </ul>
  );
};

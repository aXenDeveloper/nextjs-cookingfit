import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { signOut } from 'next-auth/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { navigationMenuList } from '../../../../_utils/navigationMenuList';
import { useAuth } from '../../../../context/useAuth';

export const MobileDrawerContentNav = () => {
  const { t } = useTranslation('global');
  const { t: t_usermenu } = useTranslation('usermenu');
  const { session } = useAuth();

  return (
    <ul className="mobileDrawer_content_nav">
      {navigationMenuList.map(el => (
        <li key={el.id}>
          <Link href={el.path}>
            <a>
              <div>
                <FontAwesomeIcon icon={el.icon} />
              </div>
              <span>{t(`navigation_${el.title}`)}</span>
            </a>
          </Link>
        </li>
      ))}

      {session && (
        <li>
          <button onClick={() => signOut()}>
            <div>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
            <span>{t_usermenu('sign_out')}</span>
          </button>
        </li>
      )}
    </ul>
  );
};

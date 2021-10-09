import { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { signOut } from 'next-auth/client';
import { navigationMenuList } from '../../../../_utils/navigationMenuList';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  handleClose: () => void;
}

export const MobileDrawerContentNav: FC<Props> = ({ handleClose }) => {
  const { t } = useTranslation('global');
  const { t: t_usermenu } = useTranslation('usermenu');

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

      <li>
        <button onClick={() => signOut()}>
          <div>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </div>
          <span>{t_usermenu('sign_out')}</span>
        </button>
      </li>
    </ul>
  );
};
